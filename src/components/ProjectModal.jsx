import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiX } from "react-icons/hi";

const ProjectModal = ({ project, onClose }) => {
  const { isDarkMode, language } = useContext(ThemeContext);

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

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Fecha ao clicar no overlay
    >
      <div
        className={`
          relative flex flex-col
          w-[80vw] sm:w-[75vw] md:w-[66vw] 
          h-[60vh] sm:h-[calc(66vw*0.8)] max-h-[800px] 
          rounded-xl p-4 sm:p-6
          border
          ${
            isDarkMode
              ? "bg-darkMode-200 border-darkMode-500 text-white"
              : "bg-white text-black border-lightMode-200 shadow-lg"
          }
        `}
        onClick={(e) => e.stopPropagation()} // Impede que o clique no modal feche-o
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover:opacity-75 transition-opacity z-10"
        >
          <HiX />
        </button>

        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center flex-shrink-0">
          {project.title[language]}
        </h2>

        {/* Conteúdo */}
        <div className="flex-grow overflow-hidden">
          {/* Descrição */}
          <div className="text-lg md:text-xl leading-relaxed">
            {project.detailedDescription
              ? project.detailedDescription[language]
              : project.description[language]}
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex justify-center gap-4 mt-6 pt-4 flex-shrink-0">
          {project.deployLink && (
            <a
              href={project.deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {language === "en" ? "Live Demo" : "Demo ao Vivo"}
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
