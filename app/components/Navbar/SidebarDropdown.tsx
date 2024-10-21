import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Transition } from "@headlessui/react";

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
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left px-4 py-3 text-base text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 hover:text-indigo-900 dark:hover:text-white transition duration-150 ease-in-out flex items-center bg-indigo-200 dark:bg-gray-800 ${
          isOpen 
            ? 'rounded-t-md border-t border-x border-indigo-300 dark:border-indigo-500' 
            : 'rounded-md border border-transparent'
        }`}
      >
        {React.cloneElement(icon, {
          className: "mr-4 text-xl",
        })}
        {label}
        <FaChevronDown className={`ml-auto transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 max-h-0"
        enterTo="opacity-100 max-h-[500px]"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 max-h-[500px]"
        leaveTo="opacity-0 max-h-0"
      >
        <div className="bg-white dark:bg-gray-800 border-x border-b border-indigo-300 dark:border-indigo-500 rounded-b-md shadow-lg overflow-hidden">
          {options.map((option, index) => (
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
              } ${index === options.length - 1 ? 'rounded-b-md' : ''}`}
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
      </Transition>
    </div>
  );
}

export default SidebarDropdown;
