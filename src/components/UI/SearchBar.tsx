import React, { useState } from "react";

interface SearchUIProps {
  onSearch?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const SearchBar = ({ onSearch, className = "w-96" , placeholder = "Search..."}: SearchUIProps) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="h-5 w-5 text-light-text2 dark:text-dark-text2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-3 text-sm rounded-lg border 
      bg-light-background2 dark:bg-dark-background2
      text-light-text dark:text-dark-text
      border-gray-400 dark:border-gray-400
      focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-600"
      />
    </div>
  );
};

export default SearchBar;
