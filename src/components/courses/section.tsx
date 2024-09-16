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
    className="px-4 sm:px-6 lg:px-8"
  >
    {children}
  </motion.section>
);

export default Section;
