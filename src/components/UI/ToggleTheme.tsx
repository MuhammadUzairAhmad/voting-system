"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <div
        className="py-2 w-full px-4 flex items-center justify-between rounded-md text-light-text2 font-semibold text-md dark:text-dark-text2 hover:bg-light-background2 dark:hover:bg-dark-background2"
        onClick={toggleTheme}
      >
        <div>Dark Mode</div>
        <div>
          <div
            className={`bg-gray-500 w-10 mx-auto cursor-pointer rounded-xl toggler ${
              isDarkMode ? "dark:bg-dark-bluetext" : ""
            }`}
          >
            <div
              className={`bg-white w-5 h-5 scale-75 rounded-xl transition-transform ${
                isDarkMode ? "translate-x-5 " : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
