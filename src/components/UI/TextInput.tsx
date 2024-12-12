import React from "react";

const TextInput: React.FC<{
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}> = ({ id, value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 rounded-md border 
        bg-light-background2 dark:bg-dark-background2
        text-light-text dark:text-dark-text
        border-gray-400 dark:border-gray-400
        focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-600"
    />
  );
};

export default TextInput;
