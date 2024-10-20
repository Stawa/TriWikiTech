import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface SidebarDropdownProps {
  icon: React.ReactElement;
  label: string;
  options: Array<{ value: string; label: string; icon: React.ReactElement }>;
  onSelect: (value: string) => void;
  currentLanguage?: string;
  currentValue?: string;
}

function SidebarDropdown({
  icon,
  label,
  options,
  onSelect,
  currentLanguage,
  currentValue,
}: SidebarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    currentValue || currentLanguage || options[0].value
  );

  return (
    <div className="relative mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 text-base text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 hover:text-indigo-900 dark:hover:text-white rounded-md transition duration-150 ease-in-out flex items-center bg-white dark:bg-gray-800"
      >
        {React.cloneElement(icon, {
          className: "mr-4 text-xl",
        })}
        {label}
        <FaChevronDown className="ml-auto" />
      </button>
      {isOpen && (
        <div className="mt-1 w-full bg-white dark:bg-gray-800 border border-indigo-300 dark:border-indigo-500 rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                if (
                  option.value !== currentLanguage &&
                  option.value !== currentValue
                ) {
                  onSelect(option.value);
                  setSelectedValue(option.value);
                }
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-600 hover:text-indigo-800 dark:hover:text-white transition-colors duration-150 flex items-center ${
                selectedValue === option.value ? "bg-indigo-200 dark:bg-indigo-700 text-indigo-800 dark:text-white" : ""
              } ${
                option.value === currentLanguage ||
                option.value === currentValue
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={
                option.value === currentLanguage ||
                option.value === currentValue
              }
            >
              {React.cloneElement(option.icon, {
                className: "mr-2 text-lg w-6 h-6",
              })}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SidebarDropdown;
