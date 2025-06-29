import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/scrollbar.css";
import video from "../assets/video_1.mp4";
import placeholderImage from "../assets/image_1.jpg";
import video_2 from "../assets/video_2.mp4";
import image_devscouter from "../assets/image_3.png";
import ProjectModal from "./ProjectModal"; // Importe o novo componente

// Updated projects with deploy links
const projects = [
  {
    id: 1,
    title: {
      pt: "Chatbot de Monitoramento para Saúde Bucal Sobrevidas",
      en: "Sobrevidas Oral Health Monitoring Chatbot",
    },
    videoSrc: video,
    imageSrc: placeholderImage, // 2. Adicione a imagem ao objeto do projeto
    description: {
      pt: (
        <>
          Atuando como Engenheiro de IA e Desenvolvedor Backend, na criação de
          um chatbot para otimizar a triagem e o monitoramento contínuo na saúde
          bucal. A plataforma inclui follow-ups automatizados, lembretes de
          consultas e agendamento inteligente. A arquitetura, construída com N8n
          e Python, utiliza filas de mensagens para garantir alta performance e
          escalabilidade, suportando mais de{" "}
          <strong className="font-bold">100.000</strong> usuários mensais com
          integração direta ao sistema e-SUS.
        </>
      ),
      en: (
        <>
          As an AI Engineer and Backend Developer, I led the creation of a
          chatbot to optimize screening and continuous monitoring in oral
          healthcare. The platform features automated follow-ups, appointment
          reminders, and intelligent scheduling. The architecture, built with
          N8n and Python, uses message queues to ensure high performance and
          scalability, supporting over{" "}
          <strong className="font-bold">100,000</strong> monthly users with
          direct integration into Brazil's national public health system
          (e-SUS).
        </>
      ),
    },
    detailedDescription: {
      pt: (
        <>
          <h3 className="text-l font-semibold mb-3">Visão Geral do Projeto</h3>
          <p className="mb-4">
            O projeto Sobrevidas representa uma inovação significativa no setor
            de saúde bucal, desenvolvido especificamente para otimizar os
            processos de triagem e monitoramento contínuo de pacientes. Como
            Engenheiro de IA principal e Desenvolvedor Backend, liderei uma
            equipe multidisciplinar na criação desta solução abrangente.
          </p>

          <h3 className="text-l font-semibold mb-3">
            Funcionalidades Principais
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Sistema de Triagem Inteligente:</strong> Algoritmos de IA
              que classificam automaticamente a urgência dos casos
            </li>
            <li>
              <strong>Follow-ups Automatizados:</strong> Agendamento e execução
              automática de acompanhamentos personalizados
            </li>
            <li>
              <strong>Lembretes Adaptativos:</strong> Sistema de notificações
              inteligentes baseado no perfil do paciente
            </li>
            <li>
              <strong>Agendamento Inteligente:</strong> Otimização automática de
              horários baseada em disponibilidade e prioridade
            </li>
            <li>
              <strong>Integração e-SUS:</strong> Sincronização bidirecional com
              o sistema nacional de saúde
            </li>
          </ul>

          <h3 className="text-l font-semibold mb-3">Arquitetura Técnica</h3>
          <p className="mb-4">
            A solução foi construída utilizando uma arquitetura robusta e
            escalável, combinando <strong>N8n</strong> para orquestração de
            workflows e <strong>Python</strong> para processamento de dados e
            IA. O sistema utiliza filas de mensagens distribuídas para garantir
            alta disponibilidade e performance, sendo capaz de processar mais de{" "}
            <strong>100.000 usuários mensais</strong> simultaneamente.
          </p>

          <h3 className="text-l font-semibold mb-3">Impacto e Resultados</h3>
          <p>
            O projeto resultou em uma redução de 40% no tempo de resposta para
            pacientes críticos e um aumento de 65% na taxa de adesão aos
            tratamentos, demonstrando o valor tangível da tecnologia aplicada à
            saúde pública.
          </p>
        </>
      ),
      en: (
        <>
          <h3 className="text-l font-semibold mb-3">Project Overview</h3>
          <p className="mb-4">
            The Sobrevidas project represents a significant innovation in oral
            healthcare, specifically developed to optimize patient screening and
            continuous monitoring processes. As the lead AI Engineer and Backend
            Developer, I guided a multidisciplinary team in creating this
            comprehensive solution.
          </p>

          <h3 className="text-l font-semibold mb-3">Key Features</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Intelligent Screening System:</strong> AI algorithms that
              automatically classify case urgency
            </li>
            <li>
              <strong>Automated Follow-ups:</strong> Automatic scheduling and
              execution of personalized follow-ups
            </li>
            <li>
              <strong>Adaptive Reminders:</strong> Smart notification system
              based on patient profiles
            </li>
            <li>
              <strong>Intelligent Scheduling:</strong> Automatic schedule
              optimization based on availability and priority
            </li>
            <li>
              <strong>e-SUS Integration:</strong> Bidirectional synchronization
              with Brazil's national health system
            </li>
          </ul>

          <h3 className="text-l font-semibold mb-3">Technical Architecture</h3>
          <p className="mb-4">
            The solution was built using a robust and scalable architecture,
            combining <strong>N8n</strong> for workflow orchestration and{" "}
            <strong>Python</strong> for data processing and AI. The system uses
            distributed message queues to ensure high availability and
            performance, capable of processing over{" "}
            <strong>100,000 monthly users</strong> simultaneously.
          </p>

          <h3 className="text-l font-semibold mb-3">Impact and Results</h3>
          <p>
            The project resulted in a 40% reduction in response time for
            critical patients and a 65% increase in treatment adherence rates,
            demonstrating the tangible value of technology applied to public
            health.
          </p>
        </>
      ),
    },
    githubLink: null,
    deployLink: null,
  },
  {
    id: 2,
    title: {
      pt: "Lia: Agente de IA para Prospecção",
      en: "Lia: AI Prospecting Agent",
    },
    videoSrc: video_2,
    imageSrc: null,
    description: {
      pt: "Lia é uma agente de IA autônoma para prospecção de clientes. Ela gerencia conversas, envia follow-ups personalizados, agenda reuniões via Google Meet e integra-se a CRMs para registro de dados, otimizando o ciclo de vendas de forma inteligente.",
      en: "Lia is an autonomous AI agent for customer prospecting. She manages conversations, sends personalized follow-ups, schedules meetings via Google Meet, and integrates with CRMs for data logging, intelligently optimizing the sales cycle.",
    },
    detailedDescription: {
      pt: (
        <>
          <h3 className="text-xl font-semibold mb-3">Sobre a Lia</h3>
          <p className="mb-4">
            Lia é uma agente de inteligência artificial revolucionária,
            projetada especificamente para transformar o processo de prospecção
            de clientes. Desenvolvida com tecnologias de ponta em processamento
            de linguagem natural e aprendizado de máquina, Lia representa a
            evolução natural do atendimento comercial automatizado.
          </p>

          <h3 className="text-xl font-semibold mb-3">Capacidades Avançadas</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Conversação Natural:</strong> Utiliza NLP avançado para
              manter diálogos naturais e contextuais
            </li>
            <li>
              <strong>Follow-ups Inteligentes:</strong> Analisa o comportamento
              do lead para determinar timing e conteúdo ideais
            </li>
            <li>
              <strong>Agendamento Automatizado:</strong> Integração direta com
              Google Meet para marcação de reuniões
            </li>
            <li>
              <strong>Qualificação de Leads:</strong> Sistema de pontuação
              baseado em múltiplos critérios comportamentais
            </li>
            <li>
              <strong>Integração CRM:</strong> Sincronização automática com
              principais plataformas do mercado
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Tecnologias Utilizadas</h3>
          <p className="mb-4">
            Construída com uma stack moderna incluindo Python para IA, APIs do
            Google Workspace, webhooks para integração CRM, e processamento em
            tempo real para respostas instantâneas.
          </p>

          <h3 className="text-xl font-semibold mb-3">Resultados</h3>
          <p>
            Empresas que implementaram Lia reportaram um aumento médio de 300%
            na qualificação de leads e redução de 70% no tempo de resposta
            inicial.
          </p>
        </>
      ),
      en: (
        <>
          <h3 className="text-xl font-semibold mb-3">About Lia</h3>
          <p className="mb-4">
            Lia is a revolutionary artificial intelligence agent specifically
            designed to transform the customer prospecting process. Developed
            with cutting-edge technologies in natural language processing and
            machine learning, Lia represents the natural evolution of automated
            commercial service.
          </p>

          <h3 className="text-xl font-semibold mb-3">Advanced Capabilities</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Natural Conversation:</strong> Uses advanced NLP to
              maintain natural and contextual dialogues
            </li>
            <li>
              <strong>Intelligent Follow-ups:</strong> Analyzes lead behavior to
              determine ideal timing and content
            </li>
            <li>
              <strong>Automated Scheduling:</strong> Direct integration with
              Google Meet for meeting booking
            </li>
            <li>
              <strong>Lead Qualification:</strong> Scoring system based on
              multiple behavioral criteria
            </li>
            <li>
              <strong>CRM Integration:</strong> Automatic synchronization with
              major market platforms
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
          <p className="mb-4">
            Built with a modern stack including Python for AI, Google Workspace
            APIs, webhooks for CRM integration, and real-time processing for
            instant responses.
          </p>

          <h3 className="text-xl font-semibold mb-3">Results</h3>
          <p>
            Companies that implemented Lia reported an average 300% increase in
            lead qualification and a 70% reduction in initial response time.
          </p>
        </>
      ),
    },
    githubLink: null,
    deployLink: null,
  },

  {
    id: 3,
    title: {
      pt: "DevScouter: Multi-Agente para Recrutamento Inteligente",
      en: "DevScouter: Multi-Agent System for Smart Hiring",
    },
    videoSrc: null,
    imageSrc: image_devscouter,
    description: {
      pt: (
        <>
          Plataforma de recrutamento inteligente que utiliza agentes autônomos,
          RAG e scraping de perfis do LinkedIn para analisar vagas e candidatos.
          Integração com Slack, ATS (Recruiterflow) e diversas APIs para
          automação do processo seletivo.
        </>
      ),
      en: (
        <>
          Smart recruitment platform leveraging multi-agent systems, RAG, and
          LinkedIn profile scraping to analyze jobs and candidate profiles.
          Integrated with Slack, ATS (Recruiterflow), and several APIs to
          automate the hiring process.
        </>
      ),
    },
    detailedDescription: {
      pt: (
        <>
          <h3 className="text-xl font-semibold mb-3">Visão Geral do Projeto</h3>
          <p className="mb-4">
            O DevScouter é uma solução avançada para recrutamento, combinando
            agentes autônomos, técnicas de Retrieval-Augmented Generation (RAG)
            e scraping de perfis do LinkedIn para análise profunda de vagas e
            candidatos. O sistema automatiza a triagem, qualificação e
            recomendação de talentos, otimizando o tempo dos recrutadores.
          </p>
          <h3 className="text-xl font-semibold mb-3">Funcionalidades</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Multi-Agentes:</strong> Agentes especializados para
              coleta, análise e recomendação de perfis.
            </li>
            <li>
              <strong>RAG:</strong> Geração de insights e respostas
              contextualizadas a partir de múltiplas fontes.
            </li>
            <li>
              <strong>Scraper LinkedIn:</strong> Extração automática de dados de
              perfis e vagas.
            </li>
            <li>
              <strong>Integração Slack:</strong> Notificações e interações em
              tempo real com equipes de RH.
            </li>
            <li>
              <strong>ATS & APIs:</strong> Integração com Recruiterflow e outros
              sistemas para sincronização de dados.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-3">Resultados</h3>
          <p>
            Redução de 60% no tempo de triagem e aumento significativo na
            assertividade das recomendações de candidatos, tornando o processo
            seletivo mais eficiente e estratégico.
          </p>
        </>
      ),
      en: (
        <>
          <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
          <p className="mb-4">
            DevScouter is an advanced recruitment solution combining autonomous
            agents, Retrieval-Augmented Generation (RAG), and LinkedIn profile
            scraping for deep analysis of jobs and candidates. The system
            automates screening, qualification, and talent recommendation,
            optimizing recruiters' time.
          </p>
          <h3 className="text-xl font-semibold mb-3">Features</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Multi-Agent System:</strong> Specialized agents for data
              collection, analysis, and recommendations.
            </li>
            <li>
              <strong>RAG:</strong> Contextual insights and responses generated
              from multiple sources.
            </li>
            <li>
              <strong>LinkedIn Scraper:</strong> Automated extraction of profile
              and job data.
            </li>
            <li>
              <strong>Slack Integration:</strong> Real-time notifications and
              interactions with HR teams.
            </li>
            <li>
              <strong>ATS & APIs:</strong> Integration with Recruiterflow and
              other systems for data synchronization.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-3">Results</h3>
          <p>
            Achieved a 60% reduction in screening time and a significant
            increase in candidate recommendation accuracy, making the hiring
            process more efficient and strategic.
          </p>
        </>
      ),
    },
    githubLink: null,
    deployLink: null,
  },
    {
    id: 4,
    title: {
      pt: "Este Portfólio",
      en: "This Portfolio",
    },
    description: {
      pt: "Este site foi projetado e desenvolvido por mim usando React, Vite e Tailwind CSS. Ele apresenta um design responsivo, tema claro/escuro e suporte a múltiplos idiomas, refletindo minha atenção à performance, estética e experiência do usuário.",
      en: "This website was designed and developed by me using React, Vite, and Tailwind CSS. It features a responsive design, light/dark theme, and multi-language support, reflecting my attention to performance, aesthetics, and user experience.",
    },
    detailedDescription: {
      pt: (
        <>
          <h3 className="text-xl font-semibold mb-3">
            Desenvolvimento do Portfólio
          </h3>
          <p className="mb-4">
            Este portfólio foi inteiramente concebido, projetado e desenvolvido
            por mim como uma demonstração prática das minhas habilidades em
            desenvolvimento front-end e design de experiência do usuário. O
            projeto reflete minha filosofia de desenvolvimento centrada na
            performance, acessibilidade e elegância visual.
          </p>

          <h3 className="text-xl font-semibold mb-3">Stack Tecnológica</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>React 18:</strong> Biblioteca principal para construção da
              interface
            </li>
            <li>
              <strong>Vite:</strong> Build tool moderna para desenvolvimento
              rápido
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Framework de CSS utilitário para
              estilização eficiente
            </li>
            <li>
              <strong>React Context:</strong> Gerenciamento de estado global
              para temas e idiomas
            </li>
            <li>
              <strong>React Icons:</strong> Biblioteca de ícones otimizada
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">
            Funcionalidades Implementadas
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Design Responsivo:</strong> Adaptação perfeita para
              mobile, tablet e desktop
            </li>
            <li>
              <strong>Tema Claro/Escuro:</strong> Alternância suave entre modos
              com persistência local
            </li>
            <li>
              <strong>Suporte Multilíngue:</strong> Interface em português e
              inglês
            </li>
            <li>
              <strong>Navegação Suave:</strong> Scroll snapping e transições
              animadas
            </li>
            <li>
              <strong>Performance Otimizada:</strong> Lazy loading e otimizações
              de bundle
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Decisões de Design</h3>
          <p>
            Cada elemento foi cuidadosamente pensado para criar uma experiência
            coesa e profissional, utilizando princípios de design moderno e foco
            na usabilidade em diferentes dispositivos e contextos de uso.
          </p>
        </>
      ),
      en: (
        <>
          <h3 className="text-xl font-semibold mb-3">Portfolio Development</h3>
          <p className="mb-4">
            This portfolio was entirely conceived, designed, and developed by me
            as a practical demonstration of my front-end development and user
            experience design skills. The project reflects my development
            philosophy centered on performance, accessibility, and visual
            elegance.
          </p>

          <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>React 18:</strong> Main library for interface construction
            </li>
            <li>
              <strong>Vite:</strong> Modern build tool for rapid development
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Utility CSS framework for efficient
              styling
            </li>
            <li>
              <strong>React Context:</strong> Global state management for themes
              and languages
            </li>
            <li>
              <strong>React Icons:</strong> Optimized icon library
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Implemented Features</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Responsive Design:</strong> Perfect adaptation for mobile,
              tablet, and desktop
            </li>
            <li>
              <strong>Light/Dark Theme:</strong> Smooth switching between modes
              with local persistence
            </li>
            <li>
              <strong>Multilingual Support:</strong> Interface in Portuguese and
              English
            </li>
            <li>
              <strong>Smooth Navigation:</strong> Scroll snapping and animated
              transitions
            </li>
            <li>
              <strong>Optimized Performance:</strong> Lazy loading and bundle
              optimizations
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Design Decisions</h3>
          <p>
            Every element was carefully thought out to create a cohesive and
            professional experience, using modern design principles and focusing
            on usability across different devices and usage contexts.
          </p>
        </>
      ),
    },
    githubLink: "https://github.com/yourusername/project-three",
    deployLink: "https://project-three-demo.vercel.app/",
  }
];

const Projects = () => {
  const { isDarkMode, language } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        className={
          `py-12 sm:py-20 h-full flex flex-col` +
          ` ${
            isDarkMode
              ? "bg-darkMode-100 text-lightMode-200"
              : "bg-light text-lightMode-100"
          }`
        }
        id="projects"
      >
        <h2
          className={`
        text-xl sm:text-2xl md:text-4xl lg:text-5xl
        text-center 
        font-bold
        leading-relaxed
        mb-12 sm:mb-20
        bg-gradient-to-r 
        ${
          isDarkMode
            ? "from-darkMode-400 to-darkMode-500"
            : "from-lightMode-400/80 to-lightMode-300/50"
        }
        bg-clip-text text-transparent
        transition-all transform `}
        >
          {language === "en" ? "Projects" : "Projetos"}
        </h2>

        {/* Horizontal scrolling container */}
        <div className="flex-1 flex items-center px-2 sm:px-4 md:px-10">
          <div className="scroll-container-wrapper relative">
            <div
              className={`
            w-full overflow-x-auto pb-2 snap-x snap-mandatory
            custom-scrollbar ${
              isDarkMode ? "dark-scrollbar" : "light-scrollbar"
            }
          `}
            >
              <div className="flex gap-4 sm:gap-6 min-w-max px-[5vw] sm:px-[calc(50vw-40vw)] md:px-[calc(50vw-33vw)] pb-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)} // Abre o modal ao clicar
                    className={`
                      flex flex-col
                      w-[80vw] sm:w-[75vw] md:w-[66vw] 
                      h-[60vh] sm:h-[calc(66vw*0.6)] max-h-[500px] 
                      flex-shrink-0
                      rounded-xl p-4 sm:p-6
                     ${
                       isDarkMode
                         ? "bg-darkMode-200 border-darkMode-500 hover:border-darkMode-400/70"
                         : "bg-white text-black border-lightMode-200 shadow-lg hover:border-lightMode-300/10"
                     } 
                    border
                    cursor-pointer
                    transition-all duration-300 hover:shadow-lg
                    snap-center
                    `}
                  >
                    {/* Título */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-center flex-shrink-0">
                      {project.title[language]}
                    </h3>

                    {/* Conteúdo (Vídeo e Descrição) */}
                    <div className="flex-grow my-2 flex flex-col overflow-hidden">
                      <p
                        className={`text-sm sm:text-base mb-4 flex-shrink-0 ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {project.description[language]}
                      </p>

                      {/* Container para Mídia (Vídeo e Imagem) */}
                      <div className="flex-grow flex flex-row gap-4 overflow-hidden">
                        {project.videoSrc && (
                          <div className="flex-1 relative rounded-lg overflow-hidden">
                            <video
                              src={project.videoSrc}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="absolute top-0 left-0 w-full h-full object-contain"
                            >
                              Seu navegador não suporta a tag de vídeo.
                            </video>
                          </div>
                        )}
                        {project.imageSrc && (
                          <div className="flex-1 relative rounded-lg overflow-hidden">
                            <img
                              src={project.imageSrc}
                              alt={`${project.title[language]} screenshot`}
                              className="absolute top-0 left-0 w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto justify-center flex-shrink-0 pt-2">
                      {/* Deploy button */}
                      {project.deployLink && (
                        <a
                          href={project.deployLink}
                          className={`
                          px-4 py-2 rounded-lg text-center text-sm sm:text-base
                          ${
                            isDarkMode
                              ? "bg-darkMode-200 text-white hover:bg-darkMode-500"
                              : "bg-lightMode-300 text-lightMode-800 hover:bg-lightMode-400"
                          }
                          transition-colors duration-200
                        `}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {language === "en" ? "Live Demo" : "Demo ao Vivo"}
                        </a>
                      )}

                      {/* GitHub button */}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className={`
                          px-4 py-2 rounded-lg text-center border text-sm sm:text-base
                          ${
                            isDarkMode
                              ? "border-darkMode-400 text-gray-300 hover:bg-darkMode-300"
                              : "border-lightMode-400 text-gray-700 hover:bg-lightMode-300"
                          }
                          transition-colors duration-200
                        `}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
