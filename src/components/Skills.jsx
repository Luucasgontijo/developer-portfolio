import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Skills = () => {
  const { isDarkMode, language } = useContext(ThemeContext);

  return (
    <section
      id="skills"
      className={`min-h-screen snap-start flex flex-col px-6 sm:px-12 md:px-20 lg:px-32 py-24
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
            mb-12
            ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
          `}
        >
          {language === "en" ? "Skills" : "Habilidades"}
        </h2>

        {/* Horizontal scrolling container for skills */}
        <div className="relative">
          <div 
            className="flex gap-12 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
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
            
            {/* n8n & Automation */}
            <div id="automation" className="flex-shrink-0 w-[90%] snap-center relative">
              {/* Certified Badge */}
              <div className={`absolute top-0 right-0 px-4 py-2 rounded-lg border-2 ${isDarkMode ? "border-darkMode-400 bg-darkMode-200 text-darkMode-400" : "border-lightMode-400 bg-lightMode-200 text-lightMode-400"}`}>
                <p className="text-xs font-semibold">
                  {language === "en" ? "✓ CERTIFIED N8N DEVELOPER" : "✓ DESENVOLVEDOR N8N CERTIFICADO"}
                </p>
              </div>
              
              <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                {language === "en" ? "n8n & Automation Expertise" : "Expertise em n8n & Automação"}
              </h3>
              <p className={`text-lg mb-8 ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}>
                {language === "en" 
                  ? "Senior n8n Developer with 3+ years specialized in building enterprise-grade automation systems using n8n and low-code platforms. Expert in orchestrating complex workflows that integrate multiple systems and deliver measurable business value."
                  : "Desenvolvedor n8n Sênior com 3+ anos especializado em construir sistemas de automação de nível empresarial usando n8n e plataformas low-code. Expert em orquestrar workflows complexos que integram múltiplos sistemas e entregam valor mensurável aos negócios."}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                    {language === "en" ? "Workflow Orchestration" : "Orquestração de Workflows"}
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Senior-level n8n workflow development with 1M+ monthly users served"
                        : "Desenvolvimento de workflows n8n nível sênior com 1M+ usuários mensais atendidos"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Complex automation orchestration across healthcare, real estate, and e-commerce"
                        : "Orquestração de automação complexa em saúde, imóveis e e-commerce"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Enterprise workflow architecture design and implementation"
                        : "Design e implementação de arquitetura de workflow empresarial"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Automated pipeline monitoring and performance optimization"
                        : "Monitoramento de pipeline automatizado e otimização de performance"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Business process automation with measurable ROI"
                        : "Automação de processos de negócio com ROI mensurável"}</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                    {language === "en" ? "System Integration" : "Integração de Sistemas"}
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Email platform integration: Outlook/Exchange, Gmail automation workflows"
                        : "Integração de plataformas de email: Outlook/Exchange, workflows de automação Gmail"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "CRM platform orchestration: HubSpot, Salesforce, custom CRM connections"
                        : "Orquestração de plataformas CRM: HubSpot, Salesforce, conexões CRM customizadas"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Calendar system automation: Google Calendar, Outlook Calendar integration"
                        : "Automação de sistemas de calendário: Google Calendar, integração Outlook Calendar"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Communication tool workflows: Slack, Microsoft Teams, real-time notifications"
                        : "Workflows de ferramentas de comunicação: Slack, Microsoft Teams, notificações em tempo real"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Payment system integration: Stripe, PayPal automated payment processing"
                        : "Integração de sistemas de pagamento: Stripe, PayPal processamento automatizado"}</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                    {language === "en" ? "API Development & Integration" : "Desenvolvimento & Integração de API"}
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "RESTful API integration with OAuth, API keys, and JWT authentication"
                        : "Integração de API RESTful com OAuth, chaves API e autenticação JWT"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Webhook development for event-driven automation workflows"
                        : "Desenvolvimento de webhooks para workflows de automação event-driven"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Python automation scripting for custom integrations and data processing"
                        : "Scripting de automação Python para integrações customizadas e processamento de dados"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "JavaScript/Node.js custom nodes and advanced n8n functions"
                        : "Nós customizados JavaScript/Node.js e funções n8n avançadas"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Error handling, retry logic, and fault-tolerant workflow design"
                        : "Tratamento de erros, lógica de retry e design de workflow tolerante a falhas"}</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                    {language === "en" ? "Data & Analytics" : "Dados & Analytics"}
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Automated dashboard creation for pipeline reliability monitoring"
                        : "Criação de dashboards automatizados para monitoramento de confiabilidade de pipeline"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Performance tracking systems with real-time KPI monitoring"
                        : "Sistemas de rastreamento de performance com monitoramento de KPI em tempo real"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Data pipeline orchestration and ETL workflow automation"
                        : "Orquestração de pipeline de dados e automação de workflow ETL"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Automated reporting with Google Sheets, Excel integration"
                        : "Relatórios automatizados com integração Google Sheets, Excel"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Cloud integration with AWS services (Lambda, S3, CloudWatch)"
                        : "Integração cloud com serviços AWS (Lambda, S3, CloudWatch)"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Full-Stack Development */}
            <div id="fullstack" className="flex-shrink-0 w-[90%] snap-center">
              <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                {language === "en" ? "Full-Stack Development" : "Desenvolvimento Full-Stack"}
              </h3>
              <p className={`text-lg mb-8 ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}>
                {language === "en" 
                  ? "5+ years building scalable web applications with modern technologies. Proficient in both frontend and backend development with a focus on clean architecture and performance optimization."
                  : "5+ anos construindo aplicações web escaláveis com tecnologias modernas. Proficiente em desenvolvimento frontend e backend com foco em arquitetura limpa e otimização de performance."}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                    {language === "en" ? "Frontend Technologies" : "Tecnologias Frontend"}
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "React.js with advanced hooks, context API, and state management patterns"
                        : "React.js com hooks avançados, context API e padrões de gerenciamento de estado"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Next.js for SSR, SSG, and full-stack React applications"
                        : "Next.js para SSR, SSG e aplicações React full-stack"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "TypeScript for type-safe development and better code quality"
                        : "TypeScript para desenvolvimento type-safe e melhor qualidade de código"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Tailwind CSS, modern styling frameworks, and responsive design"
                        : "Tailwind CSS, frameworks de estilização modernos e design responsivo"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Redux, Zustand for complex state management solutions"
                        : "Redux, Zustand para soluções complexas de gerenciamento de estado"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Vite, modern build tools for optimized development experience"
                        : "Vite, ferramentas de build modernas para experiência de desenvolvimento otimizada"}</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                    {language === "en" ? "Backend & Infrastructure" : "Backend & Infraestrutura"}
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Node.js with Express.js for scalable REST API development"
                        : "Node.js com Express.js para desenvolvimento de API REST escalável"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Python with FastAPI for high-performance backend services"
                        : "Python com FastAPI para serviços backend de alta performance"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "RESTful API design, GraphQL, and microservices architecture"
                        : "Design de API RESTful, GraphQL e arquitetura de microsserviços"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Database design: PostgreSQL, MongoDB, MySQL with optimization"
                        : "Design de banco de dados: PostgreSQL, MongoDB, MySQL com otimização"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "AWS cloud services: Lambda, S3, EC2, CloudWatch for serverless solutions"
                        : "Serviços AWS cloud: Lambda, S3, EC2, CloudWatch para soluções serverless"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Docker containerization, CI/CD pipelines, and deployment automation"
                        : "Containerização Docker, pipelines CI/CD e automação de deployment"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI & Data Analysis */}
            <div id="ai" className="flex-shrink-0 w-[90%] snap-center">
              <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                {language === "en" ? "AI & Data Analysis" : "IA & Análise de Dados"}
              </h3>
              <p className={`text-lg mb-8 ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}>
                {language === "en" 
                  ? "IBM AI Engineer Certified with extensive experience in AI integration, intelligent automation, and data analytics. Specialized in building AI-powered systems that transform business operations."
                  : "Certificado IBM AI Engineer com extensa experiência em integração de IA, automação inteligente e análise de dados. Especializado em construir sistemas alimentados por IA que transformam operações de negócio."}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                    {language === "en" ? "AI Integration & Development" : "Integração & Desenvolvimento IA"}
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "OpenAI GPT-4, Claude, Gemini API integration for intelligent automation"
                        : "Integração de APIs OpenAI GPT-4, Claude, Gemini para automação inteligente"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "LangChain framework for building complex LLM applications and agents"
                        : "Framework LangChain para construir aplicações LLM complexas e agentes"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "RAG (Retrieval-Augmented Generation) systems with vector databases"
                        : "Sistemas RAG (Geração Aumentada por Recuperação) com bancos de dados vetoriais"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Conversational AI: Chatbot development for WhatsApp, Slack, web platforms"
                        : "IA Conversacional: Desenvolvimento de chatbots para WhatsApp, Slack, plataformas web"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Prompt engineering and optimization for production AI systems"
                        : "Engenharia de prompts e otimização para sistemas IA em produção"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "AI-powered document processing and intelligent data extraction"
                        : "Processamento de documentos alimentado por IA e extração inteligente de dados"}</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>
                    {language === "en" ? "Data Analytics & Intelligence" : "Análise de Dados & Inteligência"}
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Python data analysis with Pandas, NumPy for large-scale data processing"
                        : "Análise de dados Python com Pandas, NumPy para processamento de dados em larga escala"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Business intelligence dashboard creation with real-time KPI tracking"
                        : "Criação de dashboards de business intelligence com rastreamento de KPI em tempo real"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "ETL pipeline orchestration and data transformation workflows"
                        : "Orquestração de pipeline ETL e workflows de transformação de dados"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Automated reporting systems with scheduled data updates"
                        : "Sistemas de relatórios automatizados com atualizações de dados agendadas"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
                      <span>{language === "en" 
                        ? "Vector databases: Pinecone, Qdrant, ChromaDB for semantic search"
                        : "Bancos de dados vetoriais: Pinecone, Qdrant, ChromaDB para busca semântica"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 mt-1 ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}>✓</span>
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

export default Skills;
