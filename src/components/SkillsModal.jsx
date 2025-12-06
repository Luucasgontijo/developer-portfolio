import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiX } from "react-icons/hi";

const SkillsModal = ({ skill, onClose }) => {
  const { isDarkMode, language } = useContext(ThemeContext);

  // Dados das competências para cada área
  const skillsData = {
    automation: {
      title: {
        en: "n8n & Low-Code Automation",
        pt: "n8n & Automação Low-Code",
      },
      description: {
        en: "Expert-level n8n workflow development, complex automation orchestration, and enterprise low-code solutions.",
        pt: "Desenvolvimento de workflows n8n nível expert, orquestração de automação complexa e soluções low-code empresariais.",
      },
      skills: {
        en: [
          "n8n - Expert-level workflow development and orchestration",
          "Email System Integration - Outlook/Exchange, Gmail automation",
          "CRM Integration - HubSpot, Salesforce, custom CRM connections",
          "Calendar Platforms - Google Calendar, Outlook Calendar automation",
          "Data Pipeline Orchestration - ETL workflows and data processing",
          "Dashboard Creation - Performance monitoring and business intelligence",
          "Webhook Development - Real-time event-driven automation",
          "API Integration - RESTful APIs, OAuth, authentication methods",
          "Python Automation - Custom scripts and advanced integrations",
          "JavaScript/Node.js - Custom n8n nodes and functions",
          "Cloud Integration - AWS services, serverless automation",
          "Communication Tools - Slack, Microsoft Teams automation",
        ],
        pt: [
          "n8n - Desenvolvimento e orquestração de workflows nível expert",
          "Integração de Sistemas de Email - Outlook/Exchange, automação Gmail",
          "Integração CRM - HubSpot, Salesforce, conexões CRM customizadas",
          "Plataformas de Calendário - Google Calendar, automação Outlook Calendar",
          "Orquestração de Pipeline de Dados - Workflows ETL e processamento de dados",
          "Criação de Dashboards - Monitoramento de performance e business intelligence",
          "Desenvolvimento de Webhooks - Automação event-driven em tempo real",
          "Integração de API - APIs RESTful, OAuth, métodos de autenticação",
          "Automação Python - Scripts customizados e integrações avançadas",
          "JavaScript/Node.js - Nós e funções n8n customizados",
          "Integração Cloud - Serviços AWS, automação serverless",
          "Ferramentas de Comunicação - Automação Slack, Microsoft Teams",
        ],
      },
      certifications: {
        en: [
          "5+ years development experience",
          "3+ years specialized in n8n",
          "1M+ monthly users served",
        ],
        pt: [
          "5+ anos de experiência em desenvolvimento",
          "3+ anos especializado em n8n",
          "1M+ usuários mensais atendidos",
        ],
      },
    },
    frontend: {
      title: {
        en: "Frontend Development",
        pt: "Desenvolvimento Frontend",
      },
      description: {
        en: "Specialized in modern frontend technologies with focus on user experience and performance.",
        pt: "Especializado em tecnologias frontend modernas com foco em experiência do usuário e performance.",
      },
      skills: {
        en: [
          "React.js - Advanced level with hooks, context, and state management",
          "JavaScript (ES6+) - Modern JavaScript features and best practices",
          "TypeScript - Type-safe development for better code quality",
          "HTML5 & CSS3 - Semantic markup and modern styling",
          "Tailwind CSS - Utility-first CSS framework",
          "Responsive Design - Mobile-first approach and cross-browser compatibility",
          "Redux/Zustand - State management solutions",
          "Next.js - Full-stack React framework",
          "Vite - Modern build tool for faster development",
          "Git & GitHub - Version control and collaboration",
        ],
        pt: [
          "React.js - Nível avançado com hooks, context e gerenciamento de estado",
          "JavaScript (ES6+) - Recursos modernos do JavaScript e melhores práticas",
          "TypeScript - Desenvolvimento type-safe para melhor qualidade de código",
          "HTML5 & CSS3 - Marcação semântica e estilização moderna",
          "Tailwind CSS - Framework CSS utility-first",
          "Design Responsivo - Abordagem mobile-first e compatibilidade cross-browser",
          "Redux/Zustand - Soluções de gerenciamento de estado",
          "Next.js - Framework React full-stack",
          "Vite - Ferramenta de build moderna para desenvolvimento mais rápido",
          "Git & GitHub - Controle de versão e colaboração",
        ],
      },
      certifications: {
        en: [
          "Meta Frontend Developer Professional Certificate",
          "Advanced React Development Course",
        ],
        pt: [
          "Certificado Profissional de Desenvolvedor Frontend Meta",
          "Curso Avançado de Desenvolvimento React",
        ],
      },
    },
    backend: {
      title: {
        en: "Backend Development",
        pt: "Desenvolvimento Backend",
      },
      description: {
        en: "Building robust and scalable server-side applications with modern technologies.",
        pt: "Construindo aplicações server-side robustas e escaláveis com tecnologias modernas.",
      },
      skills: {
        en: [
          "Python - Backend development, automation scripting, data analysis",
          "Node.js - Server-side JavaScript runtime",
          "Express.js - Web application framework",
          "FastAPI - Modern Python web framework",
          "RESTful APIs - Design and implementation",
          "GraphQL - Query language and runtime",
          "Database Design - SQL and NoSQL databases",
          "MongoDB - Document-oriented database",
          "PostgreSQL - Relational database management",
          "Authentication & Authorization - JWT, OAuth, API keys",
          "Docker - Containerization and deployment",
          "AWS/Cloud Services - Lambda, S3, EC2, cloud infrastructure",
        ],
        pt: [
          "Python - Desenvolvimento backend, scripting de automação, análise de dados",
          "Node.js - Runtime JavaScript server-side",
          "Express.js - Framework de aplicação web",
          "FastAPI - Framework web Python moderno",
          "APIs RESTful - Design e implementação",
          "GraphQL - Linguagem de consulta e runtime",
          "Design de Banco de Dados - Bancos SQL e NoSQL",
          "MongoDB - Banco de dados orientado a documentos",
          "PostgreSQL - Gerenciamento de banco de dados relacional",
          "Autenticação e Autorização - JWT, OAuth, chaves API",
          "Docker - Containerização e deployment",
          "AWS/Serviços Cloud - Lambda, S3, EC2, infraestrutura em nuvem",
        ],
      },
      certifications: {
        en: ["AWS Cloud Practitioner", "Node.js Backend Development"],
        pt: ["AWS Cloud Practitioner", "Desenvolvimento Backend Node.js"],
      },
    },
    ml: {
      title: {
        en: "Data Analysis & Business Intelligence",
        pt: "Análise de Dados & Business Intelligence",
      },
      description: {
        en: "Advanced data analysis workflows, automated reporting systems, and business dashboard creation.",
        pt: "Workflows avançados de análise de dados, sistemas de relatórios automatizados e criação de dashboards empresariais.",
      },
      skills: {
        en: [
          "Python - Pandas, NumPy for data analysis",
          "Data Pipeline Orchestration - ETL workflows and processing",
          "Dashboard Creation - Business intelligence and KPI tracking",
          "Automated Reporting - Scheduled reports and data visualization",
          "Performance Monitoring - System reliability and optimization tools",
          "Data Visualization - Matplotlib, Seaborn, visualization platforms",
          "Excel Automation - Advanced data processing and reporting",
          "Google Sheets Integration - Automated data sync and updates",
          "Database Querying - SQL, NoSQL data extraction",
          "Statistical Analysis - Data insights and trend identification",
          "Machine Learning - TensorFlow, PyTorch, Scikit-learn",
          "Jupyter Notebooks - Interactive data analysis",
        ],
        pt: [
          "Python - Pandas, NumPy para análise de dados",
          "Orquestração de Pipeline de Dados - Workflows ETL e processamento",
          "Criação de Dashboards - Business intelligence e rastreamento de KPIs",
          "Relatórios Automatizados - Relatórios agendados e visualização de dados",
          "Monitoramento de Performance - Ferramentas de confiabilidade e otimização de sistema",
          "Visualização de Dados - Matplotlib, Seaborn, plataformas de visualização",
          "Automação Excel - Processamento avançado de dados e relatórios",
          "Integração Google Sheets - Sincronização e atualizações automatizadas de dados",
          "Consultas de Banco de Dados - Extração de dados SQL, NoSQL",
          "Análise Estatística - Insights de dados e identificação de tendências",
          "Machine Learning - TensorFlow, PyTorch, Scikit-learn",
          "Jupyter Notebooks - Análise interativa de dados",
        ],
      },
      certifications: {
        en: [
          "IBM AI Engineer Certification",
          "Data Analysis & Visualization Experience",
        ],
        pt: [
          "Certificação IBM AI Engineer",
          "Experiência em Análise de Dados & Visualização",
        ],
      },
    },
    nlp: {
      title: {
        en: "AI & Intelligent Automation",
        pt: "IA & Automação Inteligente",
      },
      description: {
        en: "Specialized in AI-powered automation workflows, chatbots, and intelligent document processing systems.",
        pt: "Especializado em workflows de automação alimentados por IA, chatbots e sistemas de processamento inteligente de documentos.",
      },
      skills: {
        en: [
          "OpenAI GPT APIs - GPT-4 integration and fine-tuning",
          "Claude API - Advanced AI automation workflows",
          "Gemini - Multi-modal AI integrations",
          "LangChain - Framework for LLM applications and agents",
          "Chatbot Development - Conversational AI systems (WhatsApp, Slack)",
          "RAG Systems - Retrieval-Augmented Generation workflows",
          "Vector Databases - Pinecone, Qdrant, ChromaDB",
          "Prompt Engineering - Optimizing AI interactions and outputs",
          "Document Processing - Intelligent form parsing and data extraction",
          "AI Workflow Orchestration - End-to-end automated pipelines",
          "Knowledge Graph Design - Structured information systems",
          "Fine-tuning - LoRA, adapters, parameter-efficient methods",
        ],
        pt: [
          "APIs OpenAI GPT - Integração GPT-4 e fine-tuning",
          "API Claude - Workflows de automação IA avançada",
          "Gemini - Integrações IA multi-modal",
          "LangChain - Framework para aplicações LLM e agentes",
          "Desenvolvimento de Chatbots - Sistemas de IA conversacional (WhatsApp, Slack)",
          "Sistemas RAG - Workflows de Geração Aumentada por Recuperação",
          "Bancos de Dados Vetoriais - Pinecone, Qdrant, ChromaDB",
          "Engenharia de Prompts - Otimização de interações e outputs de IA",
          "Processamento de Documentos - Análise inteligente de formulários e extração de dados",
          "Orquestração de Workflow IA - Pipelines automatizados end-to-end",
          "Design de Grafos de Conhecimento - Sistemas de informação estruturada",
          "Fine-tuning - LoRA, adapters, métodos eficientes de parâmetros",
        ],
      },
      certifications: {
        en: [
          "IBM AI Engineer Certification",
          "MITx Computer Science and Python Programming",
        ],
        pt: [
          "Certificação IBM AI Engineer",
          "MITx Ciência da Computação e Programação Python",
        ],
      },
    },
  };

  // Efeito para fechar o modal com a tecla 'Escape'
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!skill || !skillsData[skill]) return null;

  const currentSkill = skillsData[skill];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className={`
          relative flex flex-col
          w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw]
          max-h-[80vh]
          rounded-xl p-6
          border
          ${
            isDarkMode
              ? "bg-darkMode-200 border-darkMode-500 text-white"
              : "bg-white text-black border-lightMode-200 shadow-lg"
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover:opacity-75 transition-opacity z-10"
        >
          <HiX />
        </button>

        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center pr-8">
          {currentSkill.title[language]}
        </h2>

        {/* Descrição */}
        <p
          className={`text-center mb-6 ${
            isDarkMode ? "text-darkMode-400" : "text-lightMode-400"
          }`}
        >
          {currentSkill.description[language]}
        </p>

        {/* Conteúdo Scrollável */}
        <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
          {/* Competências Técnicas */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">
              {language === "en" ? "Technical Skills" : "Competências Técnicas"}
            </h3>
            <ul className="space-y-2">
              {currentSkill.skills[language].map((skillItem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="text-sm md:text-base">{skillItem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificações */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              {language === "en" ? "Certifications" : "Certificações"}
            </h3>
            <ul className="space-y-2">
              {currentSkill.certifications[language].map((cert, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-sm md:text-base">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;
