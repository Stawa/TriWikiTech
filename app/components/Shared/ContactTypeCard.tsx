import { type IconType } from "react-icons";
import { motion } from "framer-motion";

interface ContactTypeCardProps {
  id: string;
  label: string;
  description: string;
  icon: IconType;
  isSelected: boolean;
  onClick: () => void;
}

export function ContactTypeCard({
  id,
  label,
  description,
  icon: Icon,
  isSelected,
  onClick,
}: ContactTypeCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative w-full p-8 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 ${
        isSelected
          ? "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800"
          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20"
      }`}
      role="radio"
      aria-checked={isSelected}
      aria-labelledby={`${id}-label`}
      aria-describedby={`${id}-description`}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center transition-colors duration-300 ${
            isSelected
              ? "bg-indigo-500 text-white"
              : "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white"
          }`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3
          id={`${id}-label`}
          className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
            isSelected
              ? "text-indigo-600 dark:text-indigo-400"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {label}
        </h3>
        <p
          id={`${id}-description`}
          className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"
        >
          {description}
        </p>
      </div>
    </motion.button>
  );
}
