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
    <div className="relative mb-3 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left px-5 py-3.5 text-base
          transition-all duration-300 ease-in-out flex items-center
          rounded-xl
          ${
            isOpen
              ? "bg-gradient-to-r from-indigo-100/90 to-purple-100/90 dark:from-indigo-900/60 dark:to-purple-900/60 shadow-lg ring-2 ring-indigo-400/30 dark:ring-indigo-500/40"
              : "bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/30 dark:to-purple-900/30 hover:ring-1 hover:ring-indigo-400/20 dark:hover:ring-indigo-500/30"
          }
          hover:shadow-md hover:scale-[1.01] active:scale-[0.99]
          text-indigo-800 dark:text-indigo-200`}
        aria-expanded={isOpen}
        aria-controls="dropdown-options"
      >
        <span
          className="mr-4 text-xl p-2.5 rounded-xl bg-gradient-to-br from-indigo-200/70 to-purple-200/70 
          dark:from-indigo-800/40 dark:to-purple-800/40
          text-indigo-700 dark:text-indigo-300 group-hover:from-indigo-300/70 group-hover:to-purple-300/70
          dark:group-hover:from-indigo-700/40 dark:group-hover:to-purple-700/40 
          transition-all duration-300 shadow-sm"
        >
          {icon}
        </span>
        <span className="font-medium tracking-wide">{label}</span>
        <FaChevronDown
          className={`ml-auto transform transition-all duration-300 text-indigo-600 dark:text-indigo-400
            ${
              isOpen ? "rotate-180" : ""
            } group-hover:text-indigo-800 dark:group-hover:text-indigo-200`}
        />
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        <div
          className="relative w-full mt-2.5 bg-gradient-to-br from-white to-indigo-50/50 
          dark:from-gray-800 dark:to-indigo-900/30 rounded-xl
          shadow-xl ring-1 ring-indigo-300/30 dark:ring-indigo-500/20
          overflow-hidden transform origin-top"
        >
          {options.map((option, index) => {
            const isSelected = selectedValue === option.value;
            const isDisabled =
              option.value === currentLanguage || option.value === currentValue;

            return (
              <button
                key={option.value}
                onClick={() => {
                  if (!isDisabled) {
                    onSelect(option.value);
                    setSelectedValue(option.value);
                    setIsOpen(false);
                  }
                }}
                className={`block w-full text-left px-5 py-3.5 text-sm
                  transition-all duration-300 flex items-center
                  ${
                    isSelected
                      ? "bg-gradient-to-r from-indigo-100/90 to-purple-100/90 dark:from-indigo-800/60 dark:to-purple-800/60 text-indigo-900 dark:text-white font-medium"
                      : "text-indigo-700 dark:text-indigo-200 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 dark:hover:from-indigo-700/30 dark:hover:to-purple-700/30"
                  }
                  ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
                  first:rounded-t-xl last:rounded-b-xl`}
                disabled={isDisabled}
              >
                <span
                  className="p-2 rounded-lg bg-gradient-to-br from-indigo-100/70 to-purple-100/70 
                  dark:from-indigo-800/40 dark:to-purple-800/40 mr-3 shadow-sm"
                >
                  {React.cloneElement(option.icon, {
                    className: "w-5 h-5 text-indigo-700 dark:text-indigo-300",
                  })}
                </span>
                {option.label}
              </button>
            );
          })}
        </div>
      </Transition>
    </div>
  );
}

export default SidebarDropdown;
