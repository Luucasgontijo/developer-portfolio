import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { isDarkMode, language } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`py-12 sm:py-20 flex flex-col
        ${
          isDarkMode
            ? "bg-darkMode-100 text-darkMode-300"
            : "bg-lightMode-100 text-lightMode-300"
        }`}
    >
      <div className="w-full">
        <h2
          className={`
            text-xl sm:text-2xl md:text-4xl lg:text-5xl
            text-center 
            font-bold
            leading-relaxed
            mb-12 sm:mb-20
            ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
            transition-all transform `}
        >
          {language === "en" ? "About Me" : "Sobre Mim"}
        </h2>

        {/* Horizontal scrolling container */}
        <div className="flex-1 flex items-start">
          <div className="scroll-container-wrapper relative w-full">
            <div
              className={`
                w-full overflow-x-auto pb-2 snap-x snap-mandatory
                custom-scrollbar ${
                  isDarkMode ? "dark-scrollbar" : "light-scrollbar"
                }
              `}
            >
              <div className="flex gap-8 sm:gap-12 min-w-max px-[5vw] sm:px-[calc(50vw-40vw)] md:px-[calc(50vw-33vw)] pb-4">
                {/* Part 1: Main Description */}
                <div
                  className={`
                    w-[80vw] sm:w-[75vw] md:w-[66vw] 
                    flex-shrink-0 snap-center
                  `}
                >
                  <p
                    className={`text-base sm:text-lg leading-relaxed
                      ${
                        isDarkMode ? "text-darkMode-300" : "text-lightMode-300"
                      }`}
                  >
                    {language === "en" ? (
                      <>
                        Experienced in AI automation and low-code development, I
                        specialize in building scalable workflow automations and
                        AI assistants using tools like <strong>n8n</strong>,{" "}
                        <strong>LangChain</strong>, and custom AI pipelines.
                        Currently leading intelligent automation efforts in a
                        nationwide digital health project in Brazil, I
                        streamline operations across customer support, HR, and
                        finance with AI-driven systems.
                        <br />
                        <br />I design and deploy chatbots and LLM-powered
                        agents (<strong>GPT-4</strong>, <strong>Claude</strong>,{" "}
                        <strong>Gemini</strong>) integrated with CRMs, forms,
                        and internal databases to automate tasks like email
                        generation, form parsing, and service inquiries. My work
                        often involves vector database optimization, knowledge
                        graph design, and parameter-efficient fine-tuning (
                        <strong>LoRA</strong>, adapters), ensuring high
                        performance at low compute cost.
                        <br />
                        <br />
                        Skilled in API integrations, webhooks, and
                        authentication methods (<strong>OAuth</strong>, API
                        keys), I ensure seamless connectivity between AI tools
                        and platforms like <strong>HubSpot</strong>,{" "}
                        <strong>Gmail</strong>, <strong>Slack</strong>, and{" "}
                        <strong>Google Sheets</strong>. I’m also comfortable
                        with <strong>JavaScript</strong>,{" "}
                        <strong>Python</strong>, and <strong>Node.js</strong>{" "}
                        for advanced customization inside n8n and other RPA
                        tools.
                      </>
                    ) : (
                      <>
                        Experiente em automação de IA e desenvolvimento
                        low-code, sou especializado em criar automações de
                        workflow escaláveis e assistentes de IA usando
                        ferramentas como <strong>n8n</strong>,{" "}
                        <strong>LangChain</strong> e pipelines de IA
                        customizados. Atualmente lidero iniciativas de automação
                        inteligente em um projeto nacional de saúde digital no
                        Brasil, otimizando operações em atendimento ao cliente,
                        RH e financeiro com sistemas orientados por IA.
                        <br />
                        <br />
                        Projeto e implemento chatbots e agentes baseados em LLMs
                        (<strong>GPT-4</strong>, <strong>Claude</strong>,{" "}
                        <strong>Gemini</strong>) integrados a CRMs, formulários
                        e bancos de dados internos para automatizar tarefas como
                        geração de e-mails, análise de formulários e atendimento
                        a solicitações. Meu trabalho frequentemente envolve
                        otimização de bancos de dados vetoriais, design de
                        grafos de conhecimento e fine-tuning eficiente (
                        <strong>LoRA</strong>, adapters), garantindo alta
                        performance com baixo custo computacional.
                        <br />
                        <br />
                        Com domínio em integrações de APIs, webhooks e métodos
                        de autenticação (<strong>OAuth</strong>, chaves de API),
                        garanto conectividade fluida entre ferramentas de IA e
                        plataformas como <strong>HubSpot</strong>,{" "}
                        <strong>Gmail</strong>, <strong>Slack</strong> e{" "}
                        <strong>Google Sheets</strong>. Também atuo com{" "}
                        <strong>JavaScript</strong>, <strong>Python</strong> e{" "}
                        <strong>Node.js</strong> para customizações avançadas em
                        n8n e outras ferramentas de RPA.
                      </>
                    )}
                  </p>
                </div>

                {/* Part 2: Quick Facts & Approach */}
                <div
                  className={`
                    w-[80vw] sm:w-[75vw] md:w-[66vw] 
                    flex-shrink-0 snap-center
                  `}
                >
                  <div
                    className={`p-4 sm:p-6 rounded-lg mb-8
                    ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}
                  >
                    <h3
                      className={`text-lg sm:text-xl font-semibold mb-4
                      ${
                        isDarkMode ? "text-darkMode-400" : "text-lightMode-400"
                      }`}
                    >
                      {language === "en" ? "Quick Facts" : "Fatos Rápidos"}
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <span>
                          {language === "en"
                            ? "• Based in Brazil"
                            : "• Localizado no Brasil"}
                        </span>
                      </li>
                      <li>
                        <span>
                          {language === "en"
                            ? "• Graduating in Software Engineering"
                            : "• Graduando em Engenharia de Software"}
                        </span>
                      </li>
                      <li>
                        <span>
                          {language === "en"
                            ? "• 2+ years of experience"
                            : "• 2+ anos de experiência"}
                        </span>
                      </li>
                      <li>
                        <span>
                          {language === "en"
                            ? "• Remote work enthusiast"
                            : "• Entusiasta do trabalho remoto"}
                        </span>
                      </li>
                      <li>
                        <span>
                          {language === "en"
                            ? "• English fluent"
                            : "• Fluente em inglês"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`p-4 sm:p-6 rounded-lg
                    ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}
                  >
                    <h3
                      className={`text-lg sm:text-2xl font-semibold mb-4
                      ${
                        isDarkMode ? "text-darkMode-400" : "text-lightMode-400"
                      }`}
                    >
                      {language === "en" ? "My Approach" : "Minha Abordagem"}
                    </h3>
                    <p
                      className={`text-base sm:text-lg leading-relaxed
                      ${
                        isDarkMode ? "text-darkMode-300" : "text-lightMode-300"
                      }`}
                    >
                      {language === "en"
                        ? "My focus is on delivering measurable business value through low-code AI automations, intelligent SDR workflows, and conversational systems (e.g., WhatsApp bots) that operate reliably at scale."
                        : "Meu foco é entregar valor de negócio mensurável por meio de automações de IA low-code, fluxos inteligentes de SDR e sistemas conversacionais (ex: bots para WhatsApp) que operam de forma confiável em larga escala."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
