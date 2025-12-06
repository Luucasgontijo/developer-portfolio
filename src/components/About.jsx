import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiLightningBolt, HiCode, HiChip, HiChartBar } from "react-icons/hi";

const About = () => {
  const { isDarkMode, language } = useContext(ThemeContext);

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
      className={`min-h-screen snap-start flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 py-24
        ${
          isDarkMode
            ? "bg-darkMode-100 text-darkMode-300"
            : "bg-lightMode-100 text-lightMode-300"
        }`}
    >
      <div className="max-w-7xl mx-auto w-full">
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
            ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}
          `}
        >
          {language === "en"
            ? "AI Automation Developer & n8n Specialist building sophisticated automation systems and intelligent workflows that deliver measurable business value."
            : "Desenvolvedor de Automação com IA & Especialista em n8n construindo sistemas de automação sofisticados e workflows inteligentes que entregam valor mensurável aos negócios."}
        </p>

        {/* Core Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                  className={`text-4xl mb-3 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
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
                <span className={`text-xl ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
