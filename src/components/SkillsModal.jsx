import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiX } from "react-icons/hi";

const SkillsModal = ({ skill, onClose }) => {
  const { isDarkMode, language } = useContext(ThemeContext);

  // Dados das competências para cada área
  const skillsData = {
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
          "Node.js - Server-side JavaScript runtime",
          "Express.js - Web application framework",
          "Python - Backend development and scripting",
          "FastAPI - Modern Python web framework",
          "RESTful APIs - Design and implementation",
          "GraphQL - Query language and runtime",
          "Database Design - SQL and NoSQL databases",
          "MongoDB - Document-oriented database",
          "PostgreSQL - Relational database management",
          "Authentication & Authorization - JWT, OAuth",
          "Docker - Containerization and deployment",
          "AWS/Cloud Services - Cloud infrastructure",
        ],
        pt: [
          "Node.js - Runtime JavaScript server-side",
          "Express.js - Framework de aplicação web",
          "Python - Desenvolvimento backend e scripting",
          "FastAPI - Framework web Python moderno",
          "APIs RESTful - Design e implementação",
          "GraphQL - Linguagem de consulta e runtime",
          "Design de Banco de Dados - Bancos SQL e NoSQL",
          "MongoDB - Banco de dados orientado a documentos",
          "PostgreSQL - Gerenciamento de banco de dados relacional",
          "Autenticação e Autorização - JWT, OAuth",
          "Docker - Containerização e deployment",
          "AWS/Serviços Cloud - Infraestrutura em nuvem",
        ],
      },
      certifications: {
        en: ["AWS Cloud Practitioner", "Node.js Backend Development"],
        pt: ["AWS Cloud Practitioner", "Desenvolvimento Backend Node.js"],
      },
    },
    ml: {
      title: {
        en: "Machine Learning",
        pt: "Machine Learning",
      },
      description: {
        en: "Developing intelligent systems using machine learning algorithms and data science techniques.",
        pt: "Desenvolvendo sistemas inteligentes usando algoritmos de machine learning e técnicas de ciência de dados.",
      },
      skills: {
        en: [
          "Python - Primary language for ML development",
          "TensorFlow - Deep learning framework",
          "PyTorch - Machine learning library",
          "Scikit-learn - Machine learning library",
          "Pandas - Data manipulation and analysis",
          "NumPy - Numerical computing",
          "Matplotlib/Seaborn - Data visualization",
          "Jupyter Notebooks - Interactive development",
          "Data Preprocessing - Cleaning and feature engineering",
          "Model Training & Evaluation - Performance metrics",
          "Computer Vision - Image processing and analysis",
          "Time Series Analysis - Forecasting and predictions",
        ],
        pt: [
          "Python - Linguagem principal para desenvolvimento ML",
          "TensorFlow - Framework de deep learning",
          "PyTorch - Biblioteca de machine learning",
          "Scikit-learn - Biblioteca de machine learning",
          "Pandas - Manipulação e análise de dados",
          "NumPy - Computação numérica",
          "Matplotlib/Seaborn - Visualização de dados",
          "Jupyter Notebooks - Desenvolvimento interativo",
          "Pré-processamento de Dados - Limpeza e engenharia de features",
          "Treinamento e Avaliação de Modelos - Métricas de performance",
          "Visão Computacional - Processamento e análise de imagens",
          "Análise de Séries Temporais - Previsões e predições",
        ],
      },
      certifications: {
        en: ["Google AI/ML Certification", "Deep Learning Specialization"],
        pt: ["Certificação Google AI/ML", "Especialização em Deep Learning"],
      },
    },
    nlp: {
      title: {
        en: "Natural Language Processing",
        pt: "Processamento de Linguagem Natural",
      },
      description: {
        en: "Specialized in developing chatbots and natural language understanding systems.",
        pt: "Especializado em desenvolvimento de chatbots e sistemas de compreensão de linguagem natural.",
      },
      skills: {
        en: [
          "OpenAI GPT APIs - Integration and fine-tuning",
          "LangChain - Framework for LLM applications",
          "Chatbot Development - Conversational AI systems",
          "Intent Recognition - Understanding user intentions",
          "Entity Extraction - Named entity recognition",
          "Sentiment Analysis - Emotion and opinion mining",
          "Text Classification - Document categorization",
          "NLTK/spaCy - Natural language processing libraries",
          "Transformers - Hugging Face transformers",
          "Prompt Engineering - Optimizing AI interactions",
          "RAG Systems - Retrieval-Augmented Generation",
          "Vector Databases - Embedding storage and retrieval",
        ],
        pt: [
          "APIs OpenAI GPT - Integração e fine-tuning",
          "LangChain - Framework para aplicações LLM",
          "Desenvolvimento de Chatbots - Sistemas de IA conversacional",
          "Reconhecimento de Intenções - Compreensão de intenções do usuário",
          "Extração de Entidades - Reconhecimento de entidades nomeadas",
          "Análise de Sentimentos - Mineração de emoções e opiniões",
          "Classificação de Texto - Categorização de documentos",
          "NLTK/spaCy - Bibliotecas de processamento de linguagem natural",
          "Transformers - Transformers da Hugging Face",
          "Engenharia de Prompts - Otimização de interações com IA",
          "Sistemas RAG - Geração Aumentada por Recuperação",
          "Bancos de Dados Vetoriais - Armazenamento e recuperação de embeddings",
        ],
      },
      certifications: {
        en: ["NLP Specialization Certificate", "Chatbot Development Course"],
        pt: [
          "Certificado de Especialização em PLN",
          "Curso de Desenvolvimento de Chatbots",
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
