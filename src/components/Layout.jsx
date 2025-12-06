import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex w-full">
      {/* Mobile Header */}
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main
        className={`
                w-full md:ml-32
                flex-1
                min-h-screen
                h-screen overflow-y-scroll
                lg:snap-y lg:snap-mandatory
                ${
                  isDarkMode
                    ? "bg-darkMode-200 text-lightMode-200"
                    : "bg-white text-lightMode-100"
                }
            `}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
