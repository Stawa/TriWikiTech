import { FaUser, FaEnvelope } from "react-icons/fa";
import { UserProfile } from "~/types/user";
import { motion } from "framer-motion";

interface UserSidebarContentProps {
  user: UserProfile;
}

function UserSidebarContent({ user }: UserSidebarContentProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative p-8 mb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/90 via-purple-50/80 to-pink-50/90 dark:from-indigo-900/30 dark:via-purple-900/25 dark:to-pink-900/30 rounded-2xl shadow-lg backdrop-blur-sm" />
      
      <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 w-24 h-24 relative group"
        >
          {user.image ? (
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 shadow-xl hover:shadow-indigo-500/40 dark:hover:shadow-indigo-400/40 transition-all duration-300">
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ) : (
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 shadow-xl hover:shadow-indigo-500/40 dark:hover:shadow-indigo-400/40 transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center rounded-full bg-white dark:bg-gray-800">
                <FaUser className="text-4xl text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          )}
        </motion.div>

        <div className="flex-grow text-center sm:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent truncate"
          >
            {user.displayName}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-300"
          >
            <FaEnvelope className="text-indigo-500 dark:text-indigo-400" />
            <span className="text-sm truncate hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
              {user.email}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default UserSidebarContent;
