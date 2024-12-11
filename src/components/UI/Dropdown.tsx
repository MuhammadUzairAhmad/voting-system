import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  options: {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  }[];
  label?: string;
  onSelect?: (label: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label = "Options",
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options[0] || { label, icon: null }
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Call onSelect with first option when component mounts
    if (options.length > 0) {
      onSelect?.(options[0].label);
    }
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex w-56 justify-between items-center gap-x-1.5 rounded-lg bg-light-background dark:bg-dark-background px-3 py-2 text-sm font-semibold text-light-text dark:text-dark-text shadow-sm  hover:bg-light-background2 dark:hover:bg-dark-background2 border-gray-400 dark:border-gray-400 border focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <div className="flex items-center gap-2">
            <span className="bg-light-background2 dark:bg-white  rounded-md p-1">
              {selectedOption.icon && selectedOption.icon}
            </span>
            {selectedOption.label}
          </div>
          <FaChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute border border-gray-400 dark:border-gray-400 left-0 z-10 mt-2 w-56 origin-top-left rounded-lg bg-light-background dark:bg-dark-background shadow-lg  focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {options.map((option, groupIndex) => (
            <div key={groupIndex} className="py-1" role="none">
              <div
                className={`block px-4 py-2 text-sm hover:bg-light-background2 dark:hover:bg-dark-background2 ${
                  selectedOption.label === option.label
                    ? "bg-light-background2 dark:bg-dark-background2 text-light-text dark:text-dark-text"
                    : "text-light-text dark:text-dark-text"
                }`}
                role="menuitem"
                tabIndex={-1}
                onClick={(e) => {
                  e.preventDefault();
                  option.onClick?.();
                  onSelect?.(option.label);
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="bg-light-background2 dark:bg-white  rounded-md p-1">
                    {/* {selectedOption.icon && selectedOption.icon} */}
                    {option.icon && option.icon}
                  </span>
                  {option.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
