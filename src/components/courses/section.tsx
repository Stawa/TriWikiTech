import { motion } from "framer-motion";

const Section = ({
  children,
  id,
  delay = 0,
}: {
  children: React.ReactNode;
  id: string;
  delay?: number;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    className="mx-2 sm:mx-4 lg:mx-6 mb-8 sm:mb-12 lg:mb-16"
  >
    {children}
  </motion.section>
);

export default Section;
