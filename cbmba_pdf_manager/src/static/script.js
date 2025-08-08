// Dados dos documentos
const documents = [
    {
        name: "IT 01 - Procedimentos Administrativos",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2022-09/it_no_01.2016_homologa_as_alteracoes_da_instrucao_tecnica_do_corpo_de_bombeiros_militar_da_bahia_-_procedimentos_administrativos_e_da_outras_providencias.pdf",
        type: "it",
        keywords: ["procedimentos", "administrativos", "homologa", "alteracoes"]
    },
    {
        name: "IT 02 - Processo Administrativo Infracional",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_02.2016_-_processo_administrativo_infracional.pdf",
        type: "it",
        keywords: ["processo", "administrativo", "infracional", "multa"]
    },
    {
        name: "IT 03 - Terminologia de Segurança Contra Incêndio",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_03.2016_-_terminologia_de_seguranca_contra_incendio.pdf",
        type: "it",
        keywords: ["terminologia", "seguranca", "incendio", "definicoes"]
    },
    {
        name: "IT 04 - Símbolos Gráficos",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_04.2016_-_simbolos_graficos.pdf",
        type: "it",
        keywords: ["simbolos", "graficos", "sinalizacao", "placas"]
    },
    {
        name: "IT 05 - Credenciamento de Instrutores",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-05/it_05_2021_credenciamento_de_instrutores_e_bombeiroscivis_e_de_empresas_da_area_de_seguranca_contra_incendio_e_panico_anexos_disponiveis_republicacao_da_portaria_027.pdf",
        type: "it",
        keywords: ["credenciamento", "instrutores", "bombeiros", "civis", "empresas"]
    },
    {
        name: "IT 06 - Acesso de Viatura na Edificação",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-08/it_06-2016_acesso_de_viatuara_na_edificacao.pdf",
        type: "it",
        keywords: ["acesso", "viatura", "edificacao", "bombeiros", "veiculo"]
    },
    {
        name: "IT 07 - Separação Entre Edificações",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_07.2016_-_separacao_entre_edificacoes.pdf",
        type: "it",
        keywords: ["separacao", "edificacoes", "distancia", "isolamento"]
    },
    {
        name: "IT 08 - Resistência ao Fogo dos Elementos",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_08.2016_-_resistencia_ao_fogo_dos_elementos_de_construcao.pdf",
        type: "it",
        keywords: ["resistencia", "fogo", "elementos", "construcao", "estrutural"]
    },
    {
        name: "IT 09 - Compartimentação Horizontal e Vertical",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2022-03/it_009.2022_-_homologa_as_alteracoes_na_instrucao_tecnica_do_corpo_de_bombeiros_militar_da_bahia_-_it_no_09_2022_-_compartimentacao_horizontal_e_compartimentacao_vertic_0.pdf",
        type: "it",
        keywords: ["compartimentacao", "horizontal", "vertical", "paredes", "lajes"]
    },
    {
        name: "IT 10 - Controle de Materiais de Acabamento",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_10.2016_-_controle_de_materiais_de_acabamentorevestimento.pdf",
        type: "it",
        keywords: ["materiais", "acabamento", "revestimento", "propagacao", "chama"]
    },
    {
        name: "IT 11 - Saídas de Emergência",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2020-03/it_11.2016_-_saidas_de_emergencia.pdf",
        type: "it",
        keywords: ["saidas", "emergencia", "escape", "evacuacao", "escadas"]
    },
    {
        name: "IT 12 - Centros Esportivos e de Exibição",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_12.2016_-_centros_esportivos_e_de_exibicao_-_requisitos_de_seguranca_contra_incendio.pdf",
        type: "it",
        keywords: ["centros", "esportivos", "exibicao", "estadios", "ginasios"]
    },
    {
        name: "IT 13 - Pressurização de Escada de Segurança",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2022-03/it.cbmba_13._2022_-_pressurizacao_de_escada_de_seguranca.pdf",
        type: "it",
        keywords: ["pressurizacao", "escada", "seguranca", "fumaca", "ventilacao"]
    },
    {
        name: "IT 14 - Carga de Incêndio em Edificações",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2023-02/it_14_2017_carga_de_incendio_em_edificacoes_estruturas_e_areas_de_risco_1.pdf",
        type: "it",
        keywords: ["carga", "incendio", "edificacoes", "combustivel", "risco"]
    },
    {
        name: "IT 16 - Plano de Emergência Contra Incêndio",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_16.2018_-_plano_de_emergencia_contra_incendio_e_panico.pdf",
        type: "it",
        keywords: ["plano", "emergencia", "incendio", "panico", "evacuacao"]
    },
    {
        name: "IT 17 - Brigada de Incêndio",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2022-02/it_cbmba_17._2016_brigada_de_incendio_2022_1_5.pdf",
        type: "it",
        keywords: ["brigada", "incendio", "treinamento", "funcionarios", "combate"]
    },
    {
        name: "IT 18 - Sistema de Iluminação de Emergência",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_18.2017_-_sistema_de_iluminacao_de_emergencia.pdf",
        type: "it",
        keywords: ["iluminacao", "emergencia", "sistema", "baterias", "autonomia"]
    },
    {
        name: "IT 19 - Sistema de Detecção e Alarme",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_19.2017-_sistema_de_deteccao_e_alarme_de_incendio.pdf",
        type: "it",
        keywords: ["deteccao", "alarme", "incendio", "sensores", "fumaca"]
    },
    {
        name: "IT 20 - Sinalização de Emergência",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_20.2017_-_sinalizacao_de_emergencia.pdf",
        type: "it",
        keywords: ["sinalizacao", "emergencia", "placas", "orientacao", "escape"]
    },
    {
        name: "IT 21 - Sistema de Proteção por Extintores",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_21.2017_-_sistema_de_protecao_por_extintores_de_incendio.pdf",
        type: "it",
        keywords: ["extintores", "protecao", "combate", "incendio", "portateis"]
    },
    {
        name: "IT 22 - Sistemas de Hidrantes e Mangotinhos",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_22.2016_-_sistemas_de_hidrantes_e_de_mangotinhos_para_combate_a_incendio.pdf",
        type: "it",
        keywords: ["hidrantes", "mangotinhos", "agua", "combate", "incendio"]
    },
    {
        name: "IT 23 - Sistemas de Chuveiros Automáticos",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_23.2018_-_sistemas_de_chuveiros_automaticos.pdf",
        type: "it",
        keywords: ["chuveiros", "automaticos", "sprinklers", "agua", "aspersao"]
    },
    {
        name: "IT 24 - Chuveiros Automáticos para Depósito",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2020-04/it-24-2020_sistema_de_chuveiros_automaticos_para_areas_de_deposito.pdf",
        type: "it",
        keywords: ["chuveiros", "deposito", "armazenamento", "estoque", "mercadorias"]
    },
    {
        name: "IT 26 - Sistema Fixo de Gases",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-09/it_26.2021_sistema_fixo_de_gases_para_combate_a_incendio.pdf",
        type: "it",
        keywords: ["gases", "fixo", "combate", "incendio", "co2", "fm200"]
    },
    {
        name: "IT 27 - Silos",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2020-07/it_27.2020_silos.pdf",
        type: "it",
        keywords: ["silos", "graos", "armazenamento", "agricola", "explosao"]
    },
    {
        name: "IT 28 - Manipulação de GLP",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-09/it_28_2021_manipulacao_armazenamento_comercializacao_e_utilizacao_de_gas_liquefeito_de_petroleo.pdf",
        type: "it",
        keywords: ["glp", "gas", "liquefeito", "petroleo", "botijao", "manipulacao"]
    },
    {
        name: "IT 29 - Comercialização de Gás Natural",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-03/it_n29.2021_comercializacao_distribuicao_e_utilizacao_de_gas_natural.pdf",
        type: "it",
        keywords: ["gas", "natural", "comercializacao", "distribuicao", "utilizacao"]
    },
    {
        name: "IT 30 - Fogos de Artifício e Pirotecnia",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_30.2017_-_fogos_de_artificio_e_pirotecnia.pdf",
        type: "it",
        keywords: ["fogos", "artificio", "pirotecnia", "explosivos", "shows"]
    },
    {
        name: "IT 32 - Produtos Perigosos",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-09/it_32_2021_produtos_perigosos_em_edificacoes_e_areas_de_risco_rev_final_3.pdf",
        type: "it",
        keywords: ["produtos", "perigosos", "quimicos", "toxicos", "inflamaveis"]
    },
    {
        name: "IT 33 - Cobertura de Sapê e Piaçava",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-09/it_33_2021_cobertura_de_sape_piacava_e_similares_rev._final_1_2.pdf",
        type: "it",
        keywords: ["sape", "piacava", "cobertura", "palha", "natural"]
    },
    {
        name: "IT 34 - Hidrante Urbano",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-09/it_34_2021_hidrante_urbano_rev._final_2_0.pdf",
        type: "it",
        keywords: ["hidrante", "urbano", "publico", "rua", "agua"]
    },
    {
        name: "IT 35 - Túnel Rodoviário",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-09/it_35_2021_tunel_rodoviario._rev._final_3.pdf",
        type: "it",
        keywords: ["tunel", "rodoviario", "subterraneo", "ventilacao", "escape"]
    },
    {
        name: "IT 36 - Pátio de Contêineres",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2021-09/it_36_2021_patio_de_conteineres_rev._final_5.pdf",
        type: "it",
        keywords: ["patio", "conteineres", "porto", "armazenamento", "cargas"]
    },
    {
        name: "IT 37 - Subestação Elétrica",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_37.2018_-_subestacao_eletrica.pdf",
        type: "it",
        keywords: ["subestacao", "eletrica", "energia", "transformadores", "alta", "tensao"]
    },
    {
        name: "IT 39 - Estabelecimentos de Restrição de Liberdade",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_39.2016_-_estabelecimentos_destinados_a_restricao_de_liberdade.pdf",
        type: "it",
        keywords: ["prisao", "cadeia", "detencao", "restricao", "liberdade"]
    },
    {
        name: "IT 40 - Patrimônio Histórico ou Cultural",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_40.2017_-_seguranca_contra_incendio_em_edificacoes_que_compoem_o_patrimonio_historico_ou_cultural.pdf",
        type: "it",
        keywords: ["patrimonio", "historico", "cultural", "preservacao", "museus"]
    },
    {
        name: "IT 41 - Inspeção Visual em Instalações Elétricas",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_41.2018_-_inspecao_visual_em_instalacoes_eletricas_de_baixa_tensao.pdf",
        type: "it",
        keywords: ["inspecao", "visual", "instalacoes", "eletricas", "baixa", "tensao"]
    },
    {
        name: "IT 42 - Procedimentos Administrativos (2024)",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2024-04/it_no_42_portaria_n.o_244_cg_-_cbmba.2024_-homologa_a_instrucao_tecnica_do_corpo_de_bombeiros_militar_da_bahia_-_it_no_42.2024_-procedimentos_administrativos_e_as_medidas_de_seguranca_contra_incendio_e_panico_para_regulari.pdf",
        type: "it",
        keywords: ["procedimentos", "administrativos", "2024", "regularizacao", "medidas"]
    },
    {
        name: "IT 43 - Adaptação às Normas - Edificações Existentes",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/it_43.2016_-_adaptacao_as_normas_de_seguranca_contra_incendio_-_edificacoes_existentes.pdf",
        type: "it",
        keywords: ["adaptacao", "normas", "edificacoes", "existentes", "adequacao"]
    },
    {
        name: "IT 46 - Eventos Programados",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2024-07/it_46.2024_-_eventos_programados.pdf",
        type: "it",
        keywords: ["eventos", "programados", "shows", "festivais", "concentracao"]
    },
    {
        name: "Exigências para Estruturas e Trios Elétricos",
        url: "http://cbm.ba.gov.br/sites/default/files/documentos/2020-02/EXIG%C3%8ANCIAS%20PARA%20ESTRUTURAS%20E%20TRIOS%20ELETRICOS%202020.pdf",
        type: "doc",
        keywords: ["estruturas", "trios", "eletricos", "carnaval", "exigencias"]
    },
    {
        name: "Cartilha Sebrae CBMBA 01",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2024-03/Cartilha01_Sebrae_CBMBA_2024_web.pdf",
        type: "doc",
        keywords: ["cartilha", "sebrae", "empresas", "orientacao", "seguranca"]
    },
    {
        name: "Cartilha Sebrae CBMBA 02",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2024-03/Cartilha02_Sebrae_CBMBA_2024_web.pdf",
        type: "doc",
        keywords: ["cartilha", "sebrae", "empresas", "orientacao", "seguranca"]
    },
    {
        name: "PLANESB - Plano Estratégico",
        url: "http://cbm.ba.gov.br/sites/default/files/2020-08/PLANESB%20-%20Plano%20Estrat%C3%A9gico%20do%20CBMBA%202020-2025.pdf",
        type: "doc",
        keywords: ["planesb", "plano", "estrategico", "cbmba", "gestao"]
    },
    {
        name: "Lei nº 12.929/2013",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2022-06/lei_no_12929_de_27_12_2013_-_estadual_-_bahia_-_legisweb.pdf",
        type: "doc",
        keywords: ["lei", "12929", "2013", "estadual", "bahia", "legislacao"]
    },
    {
        name: "Portaria que Regula a Autorização",
        url: "http://www.cbm.ba.gov.br/sites/default/files/2020-04/2017_061_portaria_que_regula_a_autorizacao_revisao_final_1.pdf",
        type: "doc",
        keywords: ["portaria", "autorizacao", "regulamentacao", "procedimentos"]
    },
    {
        name: "Decreto Estadual nº 16.302/2015",
        url: "http://www.cbm.ba.gov.br/sites/default/files/documentos/2018-10/decreto_no_16.302_de_27_ago_15_-_regulamenta_a_lei_no_12.929.pdf",
        type: "doc",
        keywords: ["decreto", "16302", "2015", "regulamenta", "lei", "estadual"]
    },
    {
        name: "Site Oficial CBMBA",
        url: "http://www.cbm.ba.gov.br/",
        type: "link",
        keywords: ["site", "oficial", "cbmba", "bombeiros", "bahia", "portal"]
    }
];

let currentActiveButton = null;
let filteredDocuments = documents;
let offlineDocuments = [];
let isShowingOffline = false;
let downloadedFiles = new Set(); // Para rastrear arquivos baixados

// Função para normalizar texto para busca
function normalizeText(text) {
    return text.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^a-z0-9\s]/g, "") // Remove caracteres especiais
        .trim();
}

// Função para gerar nome de arquivo seguro
function generateSafeFilename(name) {
    return name.replace(/[^a-zA-Z0-9\s]/g, "_").replace(/\s+/g, "_") + ".pdf";
}

// Função para filtrar documentos
function filterDocuments(searchTerm, sourceDocs = documents) {
    if (!searchTerm.trim()) {
        return sourceDocs;
    }
    
    const normalizedSearch = normalizeText(searchTerm);
    const searchWords = normalizedSearch.split(/\s+/);
    
    return sourceDocs.filter(doc => {
        const normalizedName = normalizeText(doc.name);
        const normalizedKeywords = doc.keywords.map(k => normalizeText(k));
        
        return searchWords.some(word => 
            normalizedName.includes(word) || 
            normalizedKeywords.some(keyword => keyword.includes(word))
        );
    });
}

// Função para mostrar notificação
function showNotification(message, type = "info") {
    // Remove notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        max-width: 400px;
        word-wrap: break-word;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #e17055 0%, #d63031 100%)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove após 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Função para download usando método nativo do navegador
function downloadPDFNative(url, filename) {
    return new Promise((resolve, reject) => {
        try {
            // Cria um link temporário para download
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.target = '_blank';
            
            // Adiciona ao DOM temporariamente
            document.body.appendChild(link);
            
            // Simula o clique para iniciar o download
            link.click();
            
            // Remove o link do DOM
            document.body.removeChild(link);
            
            // Marca como baixado após um pequeno delay
            setTimeout(() => {
                downloadedFiles.add(filename);
                localStorage.setItem('cbmba_downloaded_files', JSON.stringify([...downloadedFiles]));
                resolve(filename);
            }, 1000);
            
        } catch (error) {
            reject(error);
        }
    });
}

// Função para verificar se arquivo foi baixado
function isFileDownloaded(filename) {
    return downloadedFiles.has(filename);
}

// Função para carregar lista de arquivos baixados do localStorage
function loadDownloadedFiles() {
    try {
        const saved = localStorage.getItem('cbmba_downloaded_files');
        if (saved) {
            const files = JSON.parse(saved);
            downloadedFiles = new Set(files);
        }
    } catch (error) {
        console.error('Erro ao carregar lista de arquivos baixados:', error);
        downloadedFiles = new Set();
    }
}

// Função para marcar arquivo como baixado manualmente
function markAsDownloaded(filename) {
    downloadedFiles.add(filename);
    localStorage.setItem('cbmba_downloaded_files', JSON.stringify([...downloadedFiles]));
}

// Função para desmarcar arquivo como baixado
function unmarkAsDownloaded(filename) {
    downloadedFiles.delete(filename);
    localStorage.setItem('cbmba_downloaded_files', JSON.stringify([...downloadedFiles]));
}

// Função para criar os botões
function createButtons(documentsToShow = documents) {
    const container = document.getElementById("buttonsContainer");
    container.innerHTML = ""; // Limpa os botões existentes
    
    documentsToShow.forEach(doc => {
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        
        const button = document.createElement("button");
        button.className = doc.type === "it" ? "it-button" : (doc.type === "doc" ? "it-button doc-button" : "it-button link-button");
        
        if (doc.type === "link") {
            button.onclick = () => window.open(doc.url, "_blank");
        } else {
            button.onclick = () => loadPDF(doc.url, button, doc);
        }
        
        const numberDiv = document.createElement("div");
        numberDiv.className = "it-number";
        
        const nameDiv = document.createElement("div");
        nameDiv.className = "it-name";
        nameDiv.textContent = doc.name;
        
        if (doc.type === "it") {
            const itNumber = doc.name.match(/IT (\d+)/);
            numberDiv.textContent = itNumber ? `IT ${itNumber[1]}` : "IT";
        } else if (doc.type === "doc") {
            numberDiv.textContent = "DOC";
        } else if (doc.type === "link") {
            numberDiv.textContent = "LINK";
        }
        
        button.appendChild(numberDiv);
        button.appendChild(nameDiv);
        
        // Adiciona botão de download para PDFs
        if (doc.type !== "link") {
            const downloadBtn = document.createElement("button");
            downloadBtn.className = "download-btn";
            
            const filename = generateSafeFilename(doc.name);
            const isDownloaded = isFileDownloaded(filename);
            
            // Define aparência baseada no status de download
            if (isDownloaded) {
                downloadBtn.innerHTML = "📁";
                downloadBtn.title = "Arquivo já baixado - Clique para baixar novamente";
                downloadBtn.style.background = "linear-gradient(135deg, #ff9500 0%, #ff7b00 100%)";
            } else {
                downloadBtn.innerHTML = "⬇";
                downloadBtn.title = "Baixar PDF";
                downloadBtn.style.background = "linear-gradient(135deg, #00b894 0%, #00cec9 100%)";
            }
            
            downloadBtn.onclick = async (e) => {
                e.stopPropagation();
                
                try {
                    showNotification("Iniciando download... O arquivo será salvo na pasta de Downloads padrão do seu navegador.", "info");
                    
                    // Usa download nativo do navegador
                    await downloadPDFNative(doc.url, filename);
                    
                    // Atualiza aparência do botão
                    downloadBtn.innerHTML = "📁";
                    downloadBtn.title = "Arquivo já baixado - Clique para baixar novamente";
                    downloadBtn.style.background = "linear-gradient(135deg, #ff9500 0%, #ff7b00 100%)";
                    
                    showNotification(`Download iniciado: ${filename}\n\nO arquivo será salvo na pasta Downloads do seu navegador. Para visualização offline, mova o arquivo para a pasta 'CBMBA' no diretório do projeto.`, "success");
                    
                    // Atualiza lista de documentos offline
                    updateOfflineDocuments();
                    
                } catch (error) {
                    console.error("Erro no download:", error);
                    showNotification("Erro ao iniciar download. Tente clicar com o botão direito no link e selecionar 'Salvar como'.", "error");
                }
            };
            
            buttonContainer.appendChild(button);
            buttonContainer.appendChild(downloadBtn);
        } else {
            buttonContainer.appendChild(button);
        }
        
        container.appendChild(buttonContainer);
    });
}

// Função para carregar PDF com melhor compatibilidade
function loadPDF(url, buttonElement, doc) {
    const iframe = document.getElementById("pdfIframe");
    
    // Para melhor compatibilidade com Firefox, adiciona parâmetros
    let finalUrl = url;
    if (url.includes('.pdf')) {
        finalUrl += "#toolbar=1&navpanes=1&scrollbar=1";
    }
    
    iframe.src = finalUrl;
    
    // Remove classe active de todos os botões
    document.querySelectorAll(".it-button").forEach(btn => {
        btn.classList.remove("active");
    });
    
    // Adiciona classe active ao botão clicado
    buttonElement.classList.add("active");
    currentActiveButton = buttonElement;
}

// Função de busca atualizada com funcionalidade de voltar
function searchOrReturn() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchTerm = searchInput.value;
    
    // Se está mostrando offline ou há termo de busca, volta para todos os documentos
    if (isShowingOffline || searchTerm.trim()) {
        // Limpa a busca e volta para todos os documentos
        searchInput.value = "";
        isShowingOffline = false;
        filteredDocuments = documents;
        createButtons(documents);
        searchButton.textContent = "Buscar";
        return;
    }
    
    // Se não há termo de busca, faz a busca
    if (!searchTerm.trim()) {
        return;
    }
    
    filteredDocuments = filterDocuments(searchTerm);
    createButtons(filteredDocuments);
    searchButton.textContent = "Voltar";
    
    // Se houver apenas um resultado, carrega automaticamente
    if (filteredDocuments.length === 1 && filteredDocuments[0].type !== "link") {
        const firstButton = document.querySelector(".it-button");
        if (firstButton) {
            loadPDF(filteredDocuments[0].url, firstButton, filteredDocuments[0]);
        }
    }
}

// Função para listar documentos offline (baseado em localStorage)
function updateOfflineDocuments() {
    offlineDocuments = documents.filter(doc => 
        doc.type !== "link" && isFileDownloaded(generateSafeFilename(doc.name))
    );
}

// Função para mostrar documentos offline
function showOfflineDocuments() {
    updateOfflineDocuments();
    isShowingOffline = true;
    createButtons(offlineDocuments);
    
    // Atualiza o botão de busca para "Voltar"
    const searchButton = document.getElementById("searchButton");
    searchButton.textContent = "Voltar";
    
    // Limpa o campo de busca
    document.getElementById("searchInput").value = "";
    
    if (offlineDocuments.length === 0) {
        showNotification("Nenhum documento offline encontrado. Baixe alguns documentos primeiro usando o botão ⬇.", "info");
    } else {
        showNotification(`${offlineDocuments.length} documento(s) marcado(s) como baixado(s).`, "success");
    }
}

// Função para mostrar instruções de uso
function showInstructions() {
    const instructions = `
📋 INSTRUÇÕES DE USO:

🔍 BUSCAR DOCUMENTOS:
• Digite termos no campo "Buscar norma..."
• Use o botão "Buscar/Voltar" para navegar

📥 BAIXAR DOCUMENTOS:
• Clique no botão ⬇ ao lado do documento
• O arquivo será baixado para a pasta Downloads do navegador
• Botão fica laranja (📁) quando já baixado

💾 DOCUMENTOS OFFLINE:
• Clique em "Documentos offline" para ver arquivos marcados como baixados
• Para visualização offline real, mova os arquivos para a pasta 'CBMBA' no diretório do projeto

⚙️ CONFIGURAÇÕES:
• Arquivos baixados são lembrados pelo navegador
• Para resetar a lista, limpe os dados do site no navegador

🎯 DICAS:
• Clique com botão direito no documento e "Salvar como" se o download automático não funcionar
• Organize seus PDFs em uma pasta 'CBMBA' para fácil acesso
• Use Ctrl+F no PDF aberto para buscar dentro do documento
    `;
    
    showNotification(instructions, "info");
}

// Event listeners
document.getElementById("searchButton").addEventListener("click", searchOrReturn);
document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value;
    const searchButton = document.getElementById("searchButton");
    
    if (searchTerm.trim() || isShowingOffline) {
        searchButton.textContent = "Voltar";
    } else {
        searchButton.textContent = "Buscar";
    }
    
    // Busca em tempo real apenas se não estiver mostrando offline
    if (!isShowingOffline) {
        filteredDocuments = filterDocuments(searchTerm);
        createButtons(filteredDocuments);
    }
});

document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchOrReturn();
    }
});

document.getElementById("showOfflineBtn").addEventListener("click", showOfflineDocuments);

// Adiciona botão de instruções
document.addEventListener("DOMContentLoaded", function() {
    // Cria botão de instruções
    const instructionsBtn = document.createElement("button");
    instructionsBtn.id = "instructionsBtn";
    instructionsBtn.className = "instructions-button";
    instructionsBtn.innerHTML = "❓ Instruções";
    instructionsBtn.title = "Como usar o sistema";
    instructionsBtn.onclick = showInstructions;
    
    // Adiciona o botão ao painel de controles
    const controlButtons = document.querySelector('.control-buttons') || document.querySelector('.button-panel');
    if (controlButtons) {
        controlButtons.appendChild(instructionsBtn);
    }
});

// Inicializar a página
document.addEventListener("DOMContentLoaded", function() {
    showNotification("Sistema iniciado. Use o botão ❓ para ver as instruções de uso.", "info");
    
    // Carrega lista de arquivos baixados
    loadDownloadedFiles();
    
    // Atualiza documentos offline
    updateOfflineDocuments();
    createButtons();
    
    // Carrega o primeiro documento por padrão, se não for um link
    if (documents.length > 0) {
        const firstDoc = documents[0];
        if (firstDoc.type !== "link") {
            const firstButton = document.querySelector(".it-button");
            if (firstButton) {
                loadPDF(firstDoc.url, firstButton, firstDoc);
            }
        }
    }
    
    showNotification("Sistema pronto! Clique em ⬇ para baixar documentos ou ❓ para instruções.", "success");
});

