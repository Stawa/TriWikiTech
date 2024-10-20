import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  description: string;
}

function FeatureItem({ icon, title, color, description }: FeatureItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
      initial={false}
      animate={{
        height: isOpen ? "auto" : "4.5rem",
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className={`p-4 flex items-center space-x-3 cursor-pointer ${
          isOpen ? "border-b border-gray-200 dark:border-gray-700" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${color} rounded-full p-2 text-white`}>
          <div className="text-xl">{icon}</div>
        </div>
        <h3 className="text-base font-semibold flex-grow">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-gray-50 dark:bg-gray-700"
          >
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default FeatureItem;
