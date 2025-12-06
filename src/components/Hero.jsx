import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import profilePhoto from "../assets/profile-photo.png";

const Hero = () => {
  const { isDarkMode, language } = useContext(ThemeContext);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [buttonVisible, setButtonVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Animation for text and button appearance with different timing
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 300); // Show text first

    // Animation for button appearance
    const animationTimer = setTimeout(() => {
      setButtonVisible(true);
    }, 1600);

    // Clean up intervals on unmount
    return () => {
      clearInterval(timer);
      clearTimeout(textTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  // Format date based on language
  const formatDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return currentTime.toLocaleDateString(
      language === "en" ? "en-US" : "pt-BR",
      options
    );
  };

  // Format time
  const formatTime = () => {
    return currentTime.toLocaleTimeString(
      language === "en" ? "en-US" : "pt-BR"
    );
  };

  return (
    <section
      className={`
            min-h-screen
            w-full
            flex
            justify-center
            items-center
            relative
            px-4 sm:px-8 md:px-16 lg:px-24
            pt-16 md:pt-0
            snap-start
            ${
              isDarkMode
                ? "bg-darkMode-100 text-lightMode-200"
                : "bg-white text-lightMode-100"
            }
        `}
      id="hero"
    >
      <div className="absolute top-4 sm:top-8 right-4 sm:right-10 text-right select-none text-lightMode-300">
        <p className="text-xs sm:text-sm opacity-75">{formatDate()}</p>
        <p className="text-lg sm:text-2xl font-light">{formatTime()}</p>
      </div>

      <div className="flex flex-col items-center justify-center max-w-6xl">
        {/* Profile Photo */}
        <div
          className={`
            mb-8 overflow-hidden rounded-full border-4
            ${isDarkMode ? "border-darkMode-400" : "border-lightMode-400"}
            transition-all transform 
            ${
              textVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }
          `}
          style={{ transitionDuration: "1200ms" }}
        >
          <img
            src={profilePhoto}
            alt="Lucas Gontijo"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover"
          />
        </div>

        <p
          className={`
                    text-2xl sm:text-2xl md:text-4xl lg:text-5xl /* Changed base size to text-2xl */
                    text-center font-bold leading-relaxed mb-8
                    ${isDarkMode ? "text-darkMode-400" : "text-lightMode-300"}
                    transition-all transform 
                    ${
                      textVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-12"
                    }
                `}
          style={{ transitionDuration: "1800ms" }}
        >
          {language === "en"
            ? "Lucas is an AI Automation Developer & n8n Specialist with expertise in full-stack development, artificial intelligence, and low-code orchestration platforms. He specializes in building sophisticated automation systems and intelligent workflows that deliver measurable business value."
            : "Lucas é um Desenvolvedor de Automação com IA e Especialista em n8n com expertise em desenvolvimento full-stack, inteligência artificial e plataformas de orquestração low-code. Ele é especializado em construir sistemas de automação sofisticados e fluxos de trabalho inteligentes que entregam valor mensurável aos negócios."}
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              // Find the next section that's a snap point
              const sections = document.querySelectorAll("section");
              const currentSection = e.target.closest("section");
              let nextSection = null;

              // Find the current section's index
              let foundCurrent = false;
              for (const section of sections) {
                if (foundCurrent) {
                  nextSection = section;
                  break;
                }
                if (section === currentSection) {
                  foundCurrent = true;
                }
              }

              // Scroll to the next section
              if (nextSection) {
                nextSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className={`
                            px-6 sm:px-8 py-2 sm:py-3 
                            font-extralight text-sm sm:text-base
                            bg-lightMode-500 
                            text-white 
                            rounded-md 
                            transition-all 
                            transform
                            ${buttonVisible ? "opacity-100" : "opacity-0"}
                            hover:opacity-80 
                        `}
            style={{ transitionDuration: "2300ms" }}
          >
            {language === "en" ? "Get to know me" : "Conheça-me"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
