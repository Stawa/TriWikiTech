import { motion } from "framer-motion";
import LanguageCard from "./Card";

interface LanguageProps {
  languages: Array<{
    name: string;
    description: string;
    image: string;
    courseLink: string;
    compilerLink: string;
    color: string;
  }>;
  translations: {
    featuredProgrammingLanguages: string;
  };
}

export function Language({ languages, translations }: LanguageProps) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
      >
        {translations.featuredProgrammingLanguages}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {languages.map((lang, index) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <LanguageCard {...lang} translations={translations} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Language;
