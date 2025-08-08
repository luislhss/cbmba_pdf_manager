import os
import sys
import json
import requests
import logging
from flask import Blueprint, request, jsonify, send_file, current_app
from werkzeug.utils import secure_filename

# Configurar logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

pdf_bp = Blueprint("pdf", __name__)

def get_config_file():
    """Retorna o caminho do arquivo de configuração"""
    project_root = get_project_root()
    return os.path.join(project_root, "config.json")

def load_config():
    """Carrega a configuração da pasta de downloads"""
    config_file = get_config_file()
    default_config = {
        "download_dir": None,  # None significa usar pasta padrão
        "use_default": True
    }
    
    try:
        if os.path.exists(config_file):
            with open(config_file, 'r', encoding='utf-8') as f:
                config = json.load(f)
                # Garante que as chaves existam
                for key in default_config:
                    if key not in config:
                        config[key] = default_config[key]
                return config
    except Exception as e:
        logger.error(f"Erro ao carregar configuração: {e}")
    
    return default_config

def save_config(config):
    """Salva a configuração da pasta de downloads"""
    config_file = get_config_file()
    try:
        with open(config_file, 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
        logger.info(f"Configuração salva: {config}")
        return True
    except Exception as e:
        logger.error(f"Erro ao salvar configuração: {e}")
        return False

def get_project_root():
    """Retorna o diretório raiz do projeto"""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(os.path.dirname(current_dir))
    return project_root

def get_default_download_dir():
    """Retorna o diretório padrão de downloads"""
    import platform
    system = platform.system()
    
    if system == "Windows":
        # Tenta usar a pasta Downloads do usuário
        downloads_dir = os.path.join(os.path.expanduser("~"), "Downloads", "CBMBA_Normas")
    else:
        # Para Linux/Mac, usa a pasta do projeto
        project_root = get_project_root()
        downloads_dir = os.path.join(project_root, "downloads")
    
    return downloads_dir

def get_download_dir():
    """Retorna o diretório de downloads configurado"""
    config = load_config()
    
    if config["use_default"] or not config["download_dir"]:
        download_dir = get_default_download_dir()
    else:
        download_dir = config["download_dir"]
    
    try:
        # Cria o diretório se não existir
        if not os.path.exists(download_dir):
            os.makedirs(download_dir, exist_ok=True)
            logger.info(f"Diretório de downloads criado: {download_dir}")
        
        # Verifica se o diretório é gravável
        if not os.access(download_dir, os.W_OK):
            logger.error(f"Diretório não é gravável: {download_dir}")
            # Fallback para pasta temporária
            import tempfile
            fallback_dir = os.path.join(tempfile.gettempdir(), "cbmba_downloads")
            os.makedirs(fallback_dir, exist_ok=True)
            logger.info(f"Usando diretório fallback: {fallback_dir}")
            return fallback_dir
        
        return download_dir
    except Exception as e:
        logger.error(f"Erro ao criar diretório de downloads: {str(e)}")
        # Fallback final
        import tempfile
        temp_dir = os.path.join(tempfile.gettempdir(), "cbmba_downloads")
        os.makedirs(temp_dir, exist_ok=True)
        return temp_dir

@pdf_bp.route("/config", methods=["GET"])
def get_config():
    """Retorna a configuração atual"""
    try:
        config = load_config()
        current_dir = get_download_dir()
        default_dir = get_default_download_dir()
        
        return jsonify({
            "config": config,
            "current_download_dir": current_dir,
            "default_download_dir": default_dir,
            "is_writable": os.access(current_dir, os.W_OK) if os.path.exists(current_dir) else False
        }), 200
    except Exception as e:
        logger.error(f"Erro ao obter configuração: {str(e)}")
        return jsonify({"error": f"Erro ao obter configuração: {str(e)}"}), 500

@pdf_bp.route("/config", methods=["POST"])
def set_config():
    """Define a configuração da pasta de downloads"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "Dados não fornecidos"}), 400
        
        config = load_config()
        
        # Atualiza configuração
        if "use_default" in data:
            config["use_default"] = bool(data["use_default"])
        
        if "download_dir" in data and data["download_dir"]:
            # Valida se o diretório existe ou pode ser criado
            download_dir = data["download_dir"]
            try:
                os.makedirs(download_dir, exist_ok=True)
                if not os.access(download_dir, os.W_OK):
                    return jsonify({"error": "Diretório não é gravável"}), 400
                config["download_dir"] = download_dir
                config["use_default"] = False
            except Exception as e:
                return jsonify({"error": f"Erro ao validar diretório: {str(e)}"}), 400
        
        # Salva configuração
        if save_config(config):
            current_dir = get_download_dir()
            return jsonify({
                "message": "Configuração salva com sucesso",
                "config": config,
                "current_download_dir": current_dir
            }), 200
        else:
            return jsonify({"error": "Erro ao salvar configuração"}), 500
            
    except Exception as e:
        logger.error(f"Erro ao definir configuração: {str(e)}")
        return jsonify({"error": f"Erro ao definir configuração: {str(e)}"}), 500

@pdf_bp.route("/download", methods=["POST"])
def download_pdf():
    """Baixa um PDF de uma URL e salva localmente"""
    try:
        logger.info("Iniciando download de PDF")
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "Dados não fornecidos"}), 400
        
        url = data.get("url")
        name = data.get("name", "documento")
        
        if not url:
            return jsonify({"error": "URL é obrigatória"}), 400
        
        logger.info(f"URL: {url}")
        logger.info(f"Nome: {name}")
        
        # Sanitiza o nome do arquivo
        safe_name = "".join(c for c in name if c.isalnum() or c in (' ', '-', '_', '.')).rstrip()
        filename = safe_name.replace(" ", "_") + ".pdf"
        filename = filename.replace("(", "").replace(")", "").replace("/", "_").replace("\\", "_")
        
        download_dir = get_download_dir()
        filepath = os.path.join(download_dir, filename)
        
        logger.info(f"Diretório de download: {download_dir}")
        logger.info(f"Caminho do arquivo: {filepath}")
        
        # Verifica se o arquivo já existe
        if os.path.exists(filepath):
            file_size = os.path.getsize(filepath)
            logger.info(f"Arquivo já existe com tamanho: {file_size} bytes")
            return jsonify({
                "message": "Arquivo já existe",
                "filename": filename,
                "path": filepath,
                "relative_path": os.path.relpath(filepath, get_project_root()),
                "size": file_size,
                "download_dir": download_dir
            }), 200
        
        # Headers para download
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'application/pdf,application/octet-stream,*/*',
            'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        }
        
        logger.info("Iniciando requisição HTTP")
        
        # Download com configurações robustas
        session = requests.Session()
        session.headers.update(headers)
        
        response = session.get(
            url, 
            stream=True, 
            timeout=120,
            verify=False,
            allow_redirects=True
        )
        
        response.raise_for_status()
        logger.info(f"Resposta HTTP: {response.status_code}")
        
        # Salva o arquivo
        logger.info("Salvando arquivo...")
        bytes_written = 0
        
        with open(filepath, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
                    bytes_written += len(chunk)
        
        logger.info(f"Arquivo salvo com {bytes_written} bytes")
        
        # Verifica se o arquivo foi salvo corretamente
        if not os.path.exists(filepath):
            logger.error("Arquivo não foi criado")
            return jsonify({"error": "Falha ao criar o arquivo"}), 500
        
        file_size = os.path.getsize(filepath)
        if file_size == 0:
            logger.error("Arquivo criado mas está vazio")
            os.remove(filepath)
            return jsonify({"error": "Arquivo baixado está vazio"}), 500
        
        logger.info(f"Download concluído com sucesso. Tamanho: {file_size} bytes")
        
        return jsonify({
            "message": "Download concluído com sucesso",
            "filename": filename,
            "path": filepath,
            "relative_path": os.path.relpath(filepath, get_project_root()),
            "size": file_size,
            "download_dir": download_dir
        }), 200
        
    except requests.exceptions.Timeout:
        logger.error("Timeout na requisição")
        return jsonify({"error": "Timeout: O download demorou muito para ser concluído"}), 408
    except requests.exceptions.ConnectionError:
        logger.error("Erro de conexão")
        return jsonify({"error": "Erro de conexão: Verifique sua conexão com a internet"}), 503
    except requests.exceptions.HTTPError as e:
        logger.error(f"Erro HTTP: {e}")
        return jsonify({"error": f"Erro HTTP: {e.response.status_code}"}), e.response.status_code
    except requests.RequestException as e:
        logger.error(f"Erro na requisição: {str(e)}")
        return jsonify({"error": f"Erro ao baixar arquivo: {str(e)}"}), 500
    except PermissionError as e:
        logger.error(f"Erro de permissão: {str(e)}")
        return jsonify({"error": "Erro de permissão: Não foi possível salvar o arquivo"}), 403
    except OSError as e:
        logger.error(f"Erro do sistema: {str(e)}")
        return jsonify({"error": f"Erro do sistema: {str(e)}"}), 500
    except Exception as e:
        logger.error(f"Erro interno: {str(e)}")
        return jsonify({"error": f"Erro interno: {str(e)}"}), 500

@pdf_bp.route("/serve/<filename>")
def serve_pdf(filename):
    """Serve um PDF baixado localmente"""
    try:
        download_dir = get_download_dir()
        filepath = os.path.join(download_dir, filename)
        
        logger.info(f"Tentando servir arquivo: {filepath}")
        
        if os.path.exists(filepath):
            logger.info(f"Arquivo encontrado, tamanho: {os.path.getsize(filepath)} bytes")
            return send_file(
                filepath, 
                as_attachment=False, 
                mimetype="application/pdf",
                download_name=filename
            )
        else:
            logger.error(f"Arquivo não encontrado: {filepath}")
            return jsonify({"error": "Arquivo não encontrado"}), 404
    except Exception as e:
        logger.error(f"Erro ao servir arquivo: {str(e)}")
        return jsonify({"error": f"Erro ao servir arquivo: {str(e)}"}), 500

@pdf_bp.route("/list")
def list_pdfs():
    """Lista todos os PDFs baixados"""
    try:
        download_dir = get_download_dir()
        files = []
        
        logger.info(f"Listando arquivos em: {download_dir}")
        
        if os.path.exists(download_dir):
            for filename in os.listdir(download_dir):
                if filename.lower().endswith(".pdf"):
                    filepath = os.path.join(download_dir, filename)
                    try:
                        files.append({
                            "filename": filename,
                            "size": os.path.getsize(filepath),
                            "modified": os.path.getmtime(filepath),
                            "path": filepath
                        })
                    except OSError:
                        logger.warning(f"Erro ao acessar arquivo: {filename}")
                        continue
        
        logger.info(f"Encontrados {len(files)} arquivos PDF")
        return jsonify({
            "files": files, 
            "download_dir": download_dir,
            "count": len(files)
        }), 200
    except Exception as e:
        logger.error(f"Erro ao listar arquivos: {str(e)}")
        return jsonify({"error": f"Erro ao listar arquivos: {str(e)}"}), 500

@pdf_bp.route("/delete/<filename>", methods=["DELETE"])
def delete_pdf(filename):
    """Deleta um PDF baixado"""
    try:
        download_dir = get_download_dir()
        filepath = os.path.join(download_dir, filename)
        
        if os.path.exists(filepath):
            os.remove(filepath)
            logger.info(f"Arquivo deletado: {filename}")
            return jsonify({"message": "Arquivo deletado com sucesso"}), 200
        else:
            return jsonify({"error": "Arquivo não encontrado"}), 404
    except Exception as e:
        logger.error(f"Erro ao deletar arquivo: {str(e)}")
        return jsonify({"error": f"Erro ao deletar arquivo: {str(e)}"}), 500

@pdf_bp.route("/check/<filename>")
def check_pdf(filename):
    """Verifica se um PDF existe localmente"""
    try:
        download_dir = get_download_dir()
        filepath = os.path.join(download_dir, filename)
        exists = os.path.exists(filepath)
        
        result = {
            "exists": exists,
            "filename": filename,
            "download_dir": download_dir
        }
        
        if exists:
            result["path"] = filepath
            result["size"] = os.path.getsize(filepath)
        
        return jsonify(result), 200
    except Exception as e:
        logger.error(f"Erro ao verificar arquivo: {str(e)}")
        return jsonify({"error": f"Erro ao verificar arquivo: {str(e)}"}), 500

@pdf_bp.route("/download-dir")
def get_download_directory():
    """Retorna informações sobre o diretório de downloads"""
    try:
        download_dir = get_download_dir()
        default_dir = get_default_download_dir()
        config = load_config()
        
        return jsonify({
            "current_download_dir": download_dir,
            "default_download_dir": default_dir,
            "config": config,
            "exists": os.path.exists(download_dir),
            "writable": os.access(download_dir, os.W_OK) if os.path.exists(download_dir) else False
        }), 200
    except Exception as e:
        logger.error(f"Erro ao obter diretório: {str(e)}")
        return jsonify({"error": f"Erro ao obter diretório: {str(e)}"}), 500

