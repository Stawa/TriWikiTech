import { motion } from "framer-motion";
import FeatureItem from "./Items";

interface FeatureMainProps {
  Index: {
    whyTriWikiTechStandsOut: string;
  };
  getFeatures: (args: { translations: any }) => any[];
}

function FeatureMain({ Index, getFeatures }: FeatureMainProps) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
      >
        {Index.whyTriWikiTechStandsOut}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {getFeatures({ translations: Index }).map((item, index) => (
          <FeatureItem key={index} {...item} />
        ))}
      </motion.div>
    </>
  );
}

export default FeatureMain;
