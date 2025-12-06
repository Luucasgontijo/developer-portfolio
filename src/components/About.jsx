import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiLightningBolt, HiCode, HiChip, HiChartBar } from "react-icons/hi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const About = () => {
  const { isDarkMode, language } = useContext(ThemeContext);
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const coreCompetencies = {
    en: [
      {
        icon: HiLightningBolt,
        title: "n8n & Automation",
        description: "Expert-level workflow orchestration, email/CRM integration, and enterprise automation systems serving 1M+ users"
      },
      {
        icon: HiCode,
        title: "Full-Stack Development",
        description: "React, Node.js, Python, and cloud-native solutions with focus on scalable architecture"
      },
      {
        icon: HiChip,
        title: "AI Integration",
        description: "OpenAI/Claude APIs, LangChain, RAG systems, and intelligent automation workflows"
      },
      {
        icon: HiChartBar,
        title: "Data Analysis",
        description: "Advanced dashboards, ETL pipelines, and business intelligence solutions"
      }
    ],
    pt: [
      {
        icon: HiLightningBolt,
        title: "n8n & Automação",
        description: "Orquestração de workflow nível expert, integração email/CRM e sistemas de automação empresarial servindo 1M+ usuários"
      },
      {
        icon: HiCode,
        title: "Desenvolvimento Full-Stack",
        description: "React, Node.js, Python e soluções cloud-native com foco em arquitetura escalável"
      },
      {
        icon: HiChip,
        title: "Integração IA",
        description: "APIs OpenAI/Claude, LangChain, sistemas RAG e workflows de automação inteligente"
      },
      {
        icon: HiChartBar,
        title: "Análise de Dados",
        description: "Dashboards avançados, pipelines ETL e soluções de business intelligence"
      }
    ]
  };

  const experiences = {
    en: [
      {
        role: "Lead Data Analyst & Low-Code Orchestration Engineer",
        company: "WarriorBabe",
        location: "United States (Remote)",
        period: "Sep 2025 - Present",
        description: "Leading development of advanced n8n automation orchestrations integrating email systems, CRMs, and calendar platforms for enterprise clients. Building comprehensive data analysis workflows using Python and low-code tools, creating automated dashboards and monitoring systems for pipeline reliability and performance tracking.",
        international: true
      },
      {
        role: "Full-Stack AI & Automation Developer",
        company: "Harmony",
        location: "Tennessee, United States (Remote)",
        period: "Jul 2025 - Sep 2025",
        description: "Built sophisticated n8n workflow automation systems with API integrations connecting Stripe, Slack, Gmail, and Google Calendar. Implemented AI-powered processes using OpenAI/Claude APIs for payment automation and intelligent document processing. Created custom business dashboards and automated reporting solutions.",
        international: true
      },
      {
        role: "Automation & Data Engineer",
        company: "DevScouter",
        location: "Los Angeles, California (Remote)",
        period: "May 2025 - Present",
        description: "Designed complex n8n automation workflows for enterprise clients across healthcare, real estate, and e-commerce. Built comprehensive systems connecting CRM platforms, payment systems, and communication tools through API integrations. Implemented AI tool integration using OpenAI/Claude APIs for document processing and automated business reporting.",
        international: true
      },
      {
        role: "Co-Founder & Full-Stack Automation Lead",
        company: "Veridian",
        location: "Brazil (Remote)",
        period: "Jan 2025 - Aug 2025",
        description: "Led prompt engineering strategy and AI integration for business automation, specializing in legal AI systems and intelligent document generation. Architected custom prompt chains and RAG systems for automated SDR agents and nurturing workflows. Built comprehensive prompt libraries with optimization for professional legal communication.",
        international: false
      },
      {
        role: "AI & Automation Consultant",
        company: "Apollo Company",
        location: "Brazil (Remote)",
        period: "Mar 2025 - May 2025",
        description: "Prototyped AI-driven automation workflows with advanced prompt engineering using GPT-4 and Claude APIs. Built custom prompt chains for document processing and intelligent response generation. Implemented Microsoft Copilot integration across enterprise environments with SOP automation.",
        international: false
      },
      {
        role: "Process Automation & Data Analyst",
        company: "UFG Institute of Informatics",
        location: "Brazil (Remote)",
        period: "2022 - 2025",
        description: "Deployed AI-powered automation tools and prompt engineering systems for enterprise workflow optimization. Built advanced LLM integration systems with custom prompt libraries and intelligent response generation. Implemented Microsoft Copilot training systems across Teams, SharePoint, and Outlook with SOP automation.",
        international: false
      }
    ],
    pt: [
      {
        role: "Lead Analista de Dados & Engenheiro de Orquestração Low-Code",
        company: "WarriorBabe",
        location: "Estados Unidos (Remoto)",
        period: "Set 2025 - Presente",
        description: "Liderando desenvolvimento de orquestrações de automação n8n avançadas integrando sistemas de email, CRMs e plataformas de calendário para clientes empresariais. Construindo workflows de análise de dados abrangentes usando Python e ferramentas low-code, criando dashboards automatizados e sistemas de monitoramento para confiabilidade de pipeline e rastreamento de performance.",
        international: true
      },
      {
        role: "Desenvolvedor Full-Stack de IA & Automação",
        company: "Harmony",
        location: "Tennessee, Estados Unidos (Remoto)",
        period: "Jul 2025 - Set 2025",
        description: "Construí sistemas sofisticados de automação de workflow n8n com integrações de API conectando Stripe, Slack, Gmail e Google Calendar. Implementei processos alimentados por IA usando APIs OpenAI/Claude para automação de pagamento e processamento inteligente de documentos. Criei dashboards empresariais customizados e soluções de relatórios automatizados.",
        international: true
      },
      {
        role: "Engenheiro de Automação & Dados",
        company: "DevScouter",
        location: "Los Angeles, Califórnia (Remoto)",
        period: "Mai 2025 - Presente",
        description: "Projetei workflows de automação n8n complexos para clientes empresariais em saúde, imóveis e e-commerce. Construí sistemas abrangentes conectando plataformas CRM, sistemas de pagamento e ferramentas de comunicação através de integrações de API. Implementei integração de ferramentas IA usando APIs OpenAI/Claude para processamento de documentos e relatórios empresariais automatizados.",
        international: true
      },
      {
        role: "Co-Fundador & Lead de Automação Full-Stack",
        company: "Veridian",
        location: "Brasil (Remoto)",
        period: "Jan 2025 - Ago 2025",
        description: "Liderei estratégia de engenharia de prompts e integração de IA para automação empresarial, especializando em sistemas de IA jurídica e geração inteligente de documentos. Arquitetei cadeias de prompts customizadas e sistemas RAG para agentes SDR automatizados e workflows de nutrição. Construí bibliotecas de prompts abrangentes com otimização para comunicação jurídica profissional.",
        international: false
      },
      {
        role: "Consultor de IA & Automação",
        company: "Apollo Company",
        location: "Brasil (Remoto)",
        period: "Mar 2025 - Mai 2025",
        description: "Prototipei workflows de automação orientados por IA com engenharia de prompts avançada usando APIs GPT-4 e Claude. Construí cadeias de prompts customizadas para processamento de documentos e geração de resposta inteligente. Implementei integração Microsoft Copilot em ambientes empresariais com automação SOP.",
        international: false
      },
      {
        role: "Analista de Automação de Processos & Dados",
        company: "Instituto de Informática UFG",
        location: "Brasil (Remoto)",
        period: "2022 - 2025",
        description: "Implantei ferramentas de automação alimentadas por IA e sistemas de engenharia de prompts para otimização de workflow empresarial. Construí sistemas avançados de integração LLM com bibliotecas de prompts customizadas e geração de resposta inteligente. Implementei sistemas de treinamento Microsoft Copilot em Teams, SharePoint e Outlook com automação SOP.",
        international: false
      }
    ]
  };

  const highlights = {
    en: [
      "5+ years development experience",
      "3+ years specialized in n8n",
      "1M+ monthly users served",
      "IBM AI Engineer Certified",
      "English fluent, Spanish proficient"
    ],
    pt: [
      "5+ anos de experiência",
      "3+ anos especializado em n8n",
      "1M+ usuários mensais",
      "Certificado IBM AI Engineer",
      "Inglês fluente, Espanhol proficiente"
    ]
  };

  return (
    <section
      id="about"
      className={`py-16 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-32
        ${
          isDarkMode
            ? "bg-darkMode-100 text-darkMode-300"
            : "bg-lightMode-100 text-lightMode-300"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`
            text-3xl sm:text-4xl md:text-5xl
            font-bold
            mb-4
            ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
          `}
        >
          {language === "en" ? "About Me" : "Sobre Mim"}
        </h2>

        <p
          className={`
            text-lg sm:text-xl mb-12 max-w-3xl
            ${isDarkMode ? "text-darkMode-300 opacity-80" : "text-lightMode-300 opacity-80"}
          `}
        >
          {language === "en"
            ? "AI Automation Developer & n8n Specialist building sophisticated automation systems and intelligent workflows that deliver measurable business value."
            : "Desenvolvedor de Automação com IA & Especialista em n8n construindo sistemas de automação sofisticados e workflows inteligentes que entregam valor mensurável aos negócios."}
        </p>

        {/* Core Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {coreCompetencies[language].map((competency, index) => {
            const IconComponent = competency.icon;
            return (
              <div
                key={index}
                className={`
                  p-6 rounded-xl
                  ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}
                `}
              >
                <IconComponent 
                  className={`text-4xl mb-3 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-500"}`}
                />
                <h3
                  className={`
                    text-xl font-semibold mb-2
                    ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
                  `}
                >
                  {competency.title}
                </h3>
                <p
                  className={`
                    text-sm
                    ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}
                  `}
                >
                  {competency.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Experience Section */}
        <div className="mb-16" id="experience">
          <h3
            className={`
              text-2xl font-bold mb-8
              ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
            `}
          >
            {language === "en" ? "Experience" : "Experiência"}
          </h3>
          
          <div className="space-y-6">
            {(showAllExperiences ? experiences[language] : experiences[language].slice(0, 3)).map((exp, index) => (
              <div
                key={index}
                className={`
                  p-6 rounded-xl
                  ${isDarkMode ? "bg-darkMode-200" : "bg-white shadow-md"}
                `}
              >
                <div className="flex items-start gap-2 mb-2">
                  {exp.international && <span className="text-xl">🇺🇸</span>}
                  <h4
                    className={`
                      text-xl font-semibold
                      ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
                    `}
                  >
                    {exp.role}
                  </h4>
                </div>
                <p
                  className={`
                    text-sm font-medium mb-1
                    ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}
                  `}
                >
                  {exp.company} • {exp.location}
                </p>
                <p
                  className={`
                    text-xs mb-3
                    ${isDarkMode ? "text-darkMode-300 opacity-70" : "text-lightMode-300 opacity-70"}
                  `}
                >
                  {exp.period}
                </p>
                <p
                  className={`
                    text-base
                    ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}
                  `}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {experiences[language].length > 3 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                className={`
                  inline-flex items-center gap-2 px-6 py-2 text-base
                  transition-colors duration-200
                  ${
                    isDarkMode
                      ? "text-darkMode-300 hover:text-darkMode-400"
                      : "text-lightMode-300 hover:text-lightMode-400"
                  }
                `}
              >
                {showAllExperiences 
                  ? (language === "en" ? "Show Less" : "Mostrar Menos")
                  : (language === "en" ? "Show All Experience" : "Mostrar Toda Experiência")
                }
                {showAllExperiences ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
              </button>
            </div>
          )}
        </div>

        {/* Highlights */}
        <div
          className={`
            p-8 rounded-xl
            ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}
          `}
        >
          <h3
            className={`
              text-2xl font-bold mb-6
              ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
            `}
          >
            {language === "en" ? "Highlights" : "Destaques"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights[language].map((highlight, index) => (
              <div
                key={index}
                className={`
                  flex items-center space-x-2
                  ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}
                `}
              >
                <span className="text-green-500 text-xl">✓</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`
              inline-block px-8 py-3 rounded-lg font-semibold
              transition-colors duration-200
              ${
                isDarkMode
                  ? "bg-darkMode-400 text-darkMode-100 hover:text-darkMode-200"
                  : "bg-lightMode-500 text-white hover:text-gray-100"
              }
            `}
          >
            {language === "en" ? "Let's Work Together" : "Vamos Trabalhar Juntos"}
          </a>
        </div>

        {/* Skill Detail Sections */}
        <div className="mt-24 space-y-16">
          {/* n8n & Automation */}
          <div id="automation" className="scroll-mt-24">
            <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
              {language === "en" ? "n8n & Automation Expertise" : "Expertise em n8n & Automação"}
            </h3>
            <p className={`text-lg mb-8 ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}>
              {language === "en" 
                ? "3+ years specialized in building enterprise-grade automation systems using n8n and low-code platforms. Expert in orchestrating complex workflows that integrate multiple systems and deliver measurable business value."
                : "3+ anos especializado em construir sistemas de automação de nível empresarial usando n8n e plataformas low-code. Expert em orquestrar workflows complexos que integram múltiplos sistemas e entregam valor mensurável aos negócios."}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-white shadow-md"}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                  {language === "en" ? "Workflow Orchestration" : "Orquestração de Workflows"}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Expert-level n8n workflow development with 1M+ monthly users served"
                      : "Desenvolvimento de workflows n8n nível expert com 1M+ usuários mensais atendidos"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Complex automation orchestration across healthcare, real estate, and e-commerce"
                      : "Orquestração de automação complexa em saúde, imóveis e e-commerce"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Enterprise workflow architecture design and implementation"
                      : "Design e implementação de arquitetura de workflow empresarial"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Automated pipeline monitoring and performance optimization"
                      : "Monitoramento de pipeline automatizado e otimização de performance"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Business process automation with measurable ROI"
                      : "Automação de processos de negócio com ROI mensurável"}</span>
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-white shadow-md"}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                  {language === "en" ? "System Integration" : "Integração de Sistemas"}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Email platform integration: Outlook/Exchange, Gmail automation workflows"
                      : "Integração de plataformas de email: Outlook/Exchange, workflows de automação Gmail"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "CRM platform orchestration: HubSpot, Salesforce, custom CRM connections"
                      : "Orquestração de plataformas CRM: HubSpot, Salesforce, conexões CRM customizadas"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Calendar system automation: Google Calendar, Outlook Calendar integration"
                      : "Automação de sistemas de calendário: Google Calendar, integração Outlook Calendar"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Communication tool workflows: Slack, Microsoft Teams, real-time notifications"
                      : "Workflows de ferramentas de comunicação: Slack, Microsoft Teams, notificações em tempo real"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Payment system integration: Stripe, PayPal automated payment processing"
                      : "Integração de sistemas de pagamento: Stripe, PayPal processamento automatizado"}</span>
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-white shadow-md"}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                  {language === "en" ? "API Development & Integration" : "Desenvolvimento & Integração de API"}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "RESTful API integration with OAuth, API keys, and JWT authentication"
                      : "Integração de API RESTful com OAuth, chaves API e autenticação JWT"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Webhook development for event-driven automation workflows"
                      : "Desenvolvimento de webhooks para workflows de automação event-driven"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Python automation scripting for custom integrations and data processing"
                      : "Scripting de automação Python para integrações customizadas e processamento de dados"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "JavaScript/Node.js custom nodes and advanced n8n functions"
                      : "Nós customizados JavaScript/Node.js e funções n8n avançadas"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Error handling, retry logic, and fault-tolerant workflow design"
                      : "Tratamento de erros, lógica de retry e design de workflow tolerante a falhas"}</span>
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-white shadow-md"}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                  {language === "en" ? "Data & Analytics" : "Dados & Analytics"}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Automated dashboard creation for pipeline reliability monitoring"
                      : "Criação de dashboards automatizados para monitoramento de confiabilidade de pipeline"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Performance tracking systems with real-time KPI monitoring"
                      : "Sistemas de rastreamento de performance com monitoramento de KPI em tempo real"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Data pipeline orchestration and ETL workflow automation"
                      : "Orquestração de pipeline de dados e automação de workflow ETL"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Automated reporting with Google Sheets, Excel integration"
                      : "Relatórios automatizados com integração Google Sheets, Excel"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Cloud integration with AWS services (Lambda, S3, CloudWatch)"
                      : "Integração cloud com serviços AWS (Lambda, S3, CloudWatch)"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full-Stack Development */}
          <div id="fullstack" className="scroll-mt-24">
            <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
              {language === "en" ? "Full-Stack Development" : "Desenvolvimento Full-Stack"}
            </h3>
            <p className={`text-lg mb-8 ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}>
              {language === "en" 
                ? "5+ years building scalable web applications with modern technologies. Proficient in both frontend and backend development with a focus on clean architecture and performance optimization."
                : "5+ anos construindo aplicações web escaláveis com tecnologias modernas. Proficiente em desenvolvimento frontend e backend com foco em arquitetura limpa e otimização de performance."}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-white shadow-md"}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                  {language === "en" ? "Frontend Technologies" : "Tecnologias Frontend"}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "React.js with advanced hooks, context API, and state management patterns"
                      : "React.js com hooks avançados, context API e padrões de gerenciamento de estado"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Next.js for SSR, SSG, and full-stack React applications"
                      : "Next.js para SSR, SSG e aplicações React full-stack"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "TypeScript for type-safe development and better code quality"
                      : "TypeScript para desenvolvimento type-safe e melhor qualidade de código"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Tailwind CSS, modern styling frameworks, and responsive design"
                      : "Tailwind CSS, frameworks de estilização modernos e design responsivo"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Redux, Zustand for complex state management solutions"
                      : "Redux, Zustand para soluções complexas de gerenciamento de estado"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Vite, modern build tools for optimized development experience"
                      : "Vite, ferramentas de build modernas para experiência de desenvolvimento otimizada"}</span>
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-white shadow-md"}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                  {language === "en" ? "Backend & Infrastructure" : "Backend & Infraestrutura"}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Node.js with Express.js for scalable REST API development"
                      : "Node.js com Express.js para desenvolvimento de API REST escalável"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Python with FastAPI for high-performance backend services"
                      : "Python com FastAPI para serviços backend de alta performance"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "RESTful API design, GraphQL, and microservices architecture"
                      : "Design de API RESTful, GraphQL e arquitetura de microsserviços"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Database design: PostgreSQL, MongoDB, MySQL with optimization"
                      : "Design de banco de dados: PostgreSQL, MongoDB, MySQL com otimização"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "AWS cloud services: Lambda, S3, EC2, CloudWatch for serverless solutions"
                      : "Serviços AWS cloud: Lambda, S3, EC2, CloudWatch para soluções serverless"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Docker containerization, CI/CD pipelines, and deployment automation"
                      : "Containerização Docker, pipelines CI/CD e automação de deployment"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI & Data Analysis */}
          <div id="ai" className="scroll-mt-24">
            <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
              {language === "en" ? "AI & Data Analysis" : "IA & Análise de Dados"}
            </h3>
            <p className={`text-lg mb-8 ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}>
              {language === "en" 
                ? "IBM AI Engineer Certified with extensive experience in AI integration, intelligent automation, and data analytics. Specialized in building AI-powered systems that transform business operations."
                : "Certificado IBM AI Engineer com extensa experiência em integração de IA, automação inteligente e análise de dados. Especializado em construir sistemas alimentados por IA que transformam operações de negócio."}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-white shadow-md"}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                  {language === "en" ? "AI Integration & Development" : "Integração & Desenvolvimento IA"}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "OpenAI GPT-4, Claude, Gemini API integration for intelligent automation"
                      : "Integração de APIs OpenAI GPT-4, Claude, Gemini para automação inteligente"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "LangChain framework for building complex LLM applications and agents"
                      : "Framework LangChain para construir aplicações LLM complexas e agentes"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "RAG (Retrieval-Augmented Generation) systems with vector databases"
                      : "Sistemas RAG (Geração Aumentada por Recuperação) com bancos de dados vetoriais"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Conversational AI: Chatbot development for WhatsApp, Slack, web platforms"
                      : "IA Conversacional: Desenvolvimento de chatbots para WhatsApp, Slack, plataformas web"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Prompt engineering and optimization for production AI systems"
                      : "Engenharia de prompts e otimização para sistemas IA em produção"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "AI-powered document processing and intelligent data extraction"
                      : "Processamento de documentos alimentado por IA e extração inteligente de dados"}</span>
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-white shadow-md"}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                  {language === "en" ? "Data Analytics & Intelligence" : "Análise de Dados & Inteligência"}
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Python data analysis with Pandas, NumPy for large-scale data processing"
                      : "Análise de dados Python com Pandas, NumPy para processamento de dados em larga escala"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Business intelligence dashboard creation with real-time KPI tracking"
                      : "Criação de dashboards de business intelligence com rastreamento de KPI em tempo real"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "ETL pipeline orchestration and data transformation workflows"
                      : "Orquestração de pipeline ETL e workflows de transformação de dados"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Automated reporting systems with scheduled data updates"
                      : "Sistemas de relatórios automatizados com atualizações de dados agendadas"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Vector databases: Pinecone, Qdrant, ChromaDB for semantic search"
                      : "Bancos de dados vetoriais: Pinecone, Qdrant, ChromaDB para busca semântica"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{language === "en" 
                      ? "Machine learning with TensorFlow, PyTorch, Scikit-learn"
                      : "Machine learning com TensorFlow, PyTorch, Scikit-learn"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
