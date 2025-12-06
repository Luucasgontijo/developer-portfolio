import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Experiences = () => {
  const { isDarkMode, language } = useContext(ThemeContext);

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

  return (
    <section
      id="experience"
      className={`min-h-screen snap-start flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 py-24
        ${
          isDarkMode
            ? "bg-darkMode-100 text-darkMode-300"
            : "bg-white text-lightMode-300"
        }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={`
            text-3xl sm:text-4xl md:text-5xl
            font-bold
            mb-12
            ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
          `}
        >
          {language === "en" ? "Experiences" : "Experiências"}
        </h2>
        
        {/* Horizontal scrolling container */}
        <div className="relative">
          <div 
            className={`
              flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory
              scrollbar-hide
            `}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {experiences[language].map((exp, index) => (
              <div
                key={index}
                className={`
                  flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[60vw] lg:w-[50vw] snap-center
                  p-8 rounded-md min-h-[400px] flex flex-col justify-center
                  ${isDarkMode ? "bg-darkMode-100" : "bg-lightMode-200"}
                `}
              >
                <div className="flex items-start gap-2 mb-6">
                  {exp.international && <span className="text-xl">🇺🇸</span>}
                  <h3
                    className={`
                      text-xl font-semibold
                      ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
                    `}
                  >
                    {exp.role}
                  </h3>
                </div>
                
                <div className="mb-6">
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
                      text-xs
                      ${isDarkMode ? "text-darkMode-300 opacity-70" : "text-lightMode-300 opacity-70"}
                    `}
                  >
                    {exp.period}
                  </p>
                </div>
                
                <p
                  className={`
                    text-base text-justify
                    ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}
                  `}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p
            className={`
              text-sm
              ${isDarkMode ? "text-darkMode-300 opacity-70" : "text-lightMode-300 opacity-70"}
            `}
          >
            {language === "en" ? "← Scroll to see more →" : "← Role para ver mais →"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

