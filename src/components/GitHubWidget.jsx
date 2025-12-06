import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const GitHubWidget = () => {
  const { isDarkMode, language } = useContext(ThemeContext);
  const githubUsername = "Luucasgontijo";
  const [contributionData, setContributionData] = useState(null);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isHoveringTitle, setIsHoveringTitle] = useState(false);

  useEffect(() => {
    fetchContributions();
  }, []);

  const fetchContributions = async () => {
    try {
      const response = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`
      );
      const data = await response.json();
      
      if (data && data.contributions) {
        setContributionData(data.contributions);
        const total = data.contributions.reduce(
          (sum, day) => sum + day.count,
          0
        );
        setTotalContributions(total);
      }
    } catch (error) {
      console.error("Error fetching GitHub contributions:", error);
    }
  };

  const getColorForCount = (count) => {
    if (count === 0) {
      return isDarkMode ? "#161b22" : "#ebedf0";
    } else if (count < 3) {
      return isDarkMode ? "#0e4429" : "#9be9a8";
    } else if (count < 6) {
      return isDarkMode ? "#006d32" : "#40c463";
    } else if (count < 9) {
      return isDarkMode ? "#26a641" : "#30a14e";
    } else {
      return isDarkMode ? "#39d353" : "#216e39";
    }
  };

  const groupByWeeks = (contributions) => {
    if (!contributions) return [];
    
    // Get the last 53 weeks (1 year)
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setDate(today.getDate() - 364); // 52 weeks + current week
    
    // Create a map of dates to contributions
    const contribMap = {};
    contributions.forEach(day => {
      contribMap[day.date] = day.count;
    });
    
    const weeks = [];
    let currentDate = new Date(oneYearAgo);
    
    // Start from Sunday of the first week
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());
    
    for (let week = 0; week < 53; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const count = contribMap[dateStr] || 0;
        weekData.push({
          date: dateStr,
          count: count,
          day: day
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(weekData);
    }
    
    return weeks;
  };

  const weeks = contributionData ? groupByWeeks(contributionData) : [];
  
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayLabelsShort = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <div className="px-2 py-4">
      <a
        href={`https://github.com/${githubUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHoveringTitle(true)}
        onMouseLeave={() => setIsHoveringTitle(false)}
        className="block"
      >
        <h3
          className={`text-sm font-light mb-3 px-2 tracking-wider transition-all duration-300
          ${isDarkMode ? "text-darkMode-400 hover:text-darkMode-300" : "text-lightMode-400 hover:text-lightMode-300"}
          `}
        >
          {isHoveringTitle 
            ? (language === "en" ? "VIEW FULL PROFILE →" : "VER PERFIL COMPLETO →")
            : (language === "en" ? "GITHUB ACTIVITY" : "ATIVIDADE GITHUB")
          }
        </h3>
      </a>
      
      <div
        className={`
          rounded-lg p-3
          ${isDarkMode ? "bg-darkMode-100" : "bg-lightMode-100"}
        `}
      >
        {contributionData ? (
          <>
            <div className="mb-2">
              <span
                className={`text-xs ${
                  isDarkMode ? "text-darkMode-300" : "text-lightMode-300"
                }`}
              >
                {totalContributions} {language === "en" ? "contributions in the last year" : "contribuições no último ano"}
              </span>
            </div>
            
            <div className="overflow-x-auto scrollbar-hide">
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
              <div className="flex gap-[2px]" style={{ minWidth: 'fit-content' }}>
                {/* Day labels */}
                <div className="flex flex-col gap-[2px] mr-1">
                  {dayLabelsShort.map((label, index) => (
                    <div
                      key={index}
                      className={`h-[10px] text-[8px] flex items-center ${
                        isDarkMode ? "text-darkMode-300" : "text-lightMode-300"
                      }`}
                      style={{ width: '20px' }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
                
                {/* Contribution squares */}
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[2px]">
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="w-[10px] h-[10px] rounded-sm hover:ring-1 hover:ring-gray-400 transition-all cursor-pointer"
                        style={{
                          backgroundColor: getColorForCount(day.count),
                        }}
                        title={`${day.date}: ${day.count} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-end gap-1">
              <span className={`text-xs ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}>
                {language === "en" ? "Less" : "Menos"}
              </span>
              <div className="flex gap-[2px]">
                {[0, 1, 4, 7, 10].map((count) => (
                  <div
                    key={count}
                    className="w-[10px] h-[10px] rounded-sm"
                    style={{ backgroundColor: getColorForCount(count) }}
                  />
                ))}
              </div>
              <span className={`text-xs ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}>
                {language === "en" ? "More" : "Mais"}
              </span>
            </div>
          </>
        ) : (
          <div className={`text-xs ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}>
            {language === "en" ? "Loading contributions..." : "Carregando contribuições..."}
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubWidget;

