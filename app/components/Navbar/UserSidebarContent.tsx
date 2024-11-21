import { FaUser } from "react-icons/fa";
import { UserProfile } from "~/types/user";

interface UserSidebarContentProps {
  user: UserProfile;
}

function UserSidebarContent({ user }: UserSidebarContentProps) {
  return (
    <div className="relative p-6 mb-6">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/90 to-purple-50/90 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl" />
      
      <div className="relative flex items-center gap-5">
        <div className="flex-shrink-0 w-20 h-20 relative group">
          {user.image ? (
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-indigo-400/30 transition-all duration-300">
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
              />
            </div>
          ) : (
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-indigo-400/30 transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center rounded-full bg-white dark:bg-gray-800">
                <FaUser className="text-3xl text-indigo-500 dark:text-indigo-400" />
              </div>
            </div>
          )}
        </div>

        <div className="flex-grow overflow-hidden">
          <h2 className="text-xl font-bold mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent truncate">
            {user.displayName}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
            {user.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserSidebarContent;
