"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#1D2B39] text-white' : 'bg-white text-black'}`}>
      <h1 className="text-2xl dark:text-[#F2F2F2]">Hello World</h1>
      <button
        className="mt-4 p-2 bg-[#2D9CDB] dark:bg-[#1652F0] border border-[#2D9CDB] text-white dark:text-black"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <button
        className="mt-4 p-2 bg-white dark:bg-[#2D9CDB] border border-[#2D9CDB] text-black dark:text-white"
        onClick={() => {
          console.log("Hello World");
        }}
      >
        Click me
      </button>
    </div>
  );
}
