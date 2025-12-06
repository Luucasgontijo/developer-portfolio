import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiGit,
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
  SiOpenai,
  SiZapier,
  SiRedis,
  SiGraphql,
  SiNextdotjs,
  SiStripe,
} from "react-icons/si";

// Custom n8n Logo Component
const N8nIcon = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.667 4H5.333C4.597 4 4 4.597 4 5.333v13.334C4 19.403 4.597 20 5.333 20h13.334C19.403 20 20 19.403 20 18.667V5.333C20 4.597 19.403 4 18.667 4zm-6 12.667h-2v-2h2v2zm0-3.334h-2V8h2v5.333z" />
  </svg>
);

const FloatingIcons = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Tech stack icons with positions and animation delays
  const icons = [
    { Icon: SiPython, size: 50, top: "10%", left: "5%", delay: 0 },
    { Icon: N8nIcon, size: 52, top: "8%", left: "25%", delay: 3.8 },
    { Icon: SiJavascript, size: 40, top: "20%", left: "15%", delay: 2 },
    { Icon: SiReact, size: 55, top: "15%", left: "85%", delay: 1 },
    { Icon: SiNodedotjs, size: 45, top: "30%", left: "90%", delay: 3 },
    { Icon: SiPostgresql, size: 50, top: "40%", left: "8%", delay: 1.5 },
    { Icon: SiZapier, size: 46, top: "35%", left: "25%", delay: 4.2 },
    { Icon: SiMongodb, size: 45, top: "50%", left: "92%", delay: 2.5 },
    { Icon: SiDocker, size: 48, top: "60%", left: "10%", delay: 0.5 },
    { Icon: SiAmazon, size: 52, top: "70%", left: "88%", delay: 3.5 },
    { Icon: SiRedis, size: 44, top: "65%", left: "25%", delay: 2.2 },
    { Icon: SiGit, size: 42, top: "80%", left: "12%", delay: 1.8 },
    { Icon: SiTailwindcss, size: 48, top: "85%", left: "85%", delay: 2.8 },
    { Icon: SiGraphql, size: 46, top: "90%", left: "30%", delay: 4.5 },
    { Icon: SiTypescript, size: 44, top: "25%", left: "50%", delay: 3.2 },
    { Icon: SiFastapi, size: 46, top: "55%", left: "50%", delay: 1.2 },
    { Icon: SiNextdotjs, size: 48, top: "45%", left: "75%", delay: 3.8 },
    { Icon: SiOpenai, size: 50, top: "75%", left: "50%", delay: 0.8 },
    { Icon: SiStripe, size: 44, top: "92%", left: "60%", delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {icons.map((item, index) => (
        <div
          key={index}
          className="floating-icon absolute"
          style={{
            top: item.top,
            left: item.left,
            animationDelay: `${item.delay}s`,
          }}
        >
          <item.Icon
            size={item.size}
            className={`
              ${
                isDarkMode
                  ? "text-darkMode-300 opacity-[0.08]"
                  : "text-lightMode-400 opacity-[0.06]"
              }
            `}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;

