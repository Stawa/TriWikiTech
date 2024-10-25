import { FaUser } from "react-icons/fa";
import { UserProfile } from "~/types/user";

interface UserSidebarContentProps {
  user: UserProfile;
}

function UserSidebarContent({ user }: UserSidebarContentProps) {
  return (
    <div className="flex items-center mt-4 mb-4 pb-4 border-b border-indigo-600 dark:border-indigo-600">
      <div className="flex-shrink-0 w-16 h-16 relative mr-4">
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-500 shadow-xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-full border-4 border-indigo-500 dark:border-indigo-500 shadow-xl bg-indigo-100 dark:bg-indigo-900">
            <FaUser className="text-4xl text-indigo-500 dark:text-indigo-300" />
          </div>
        )}
      </div>
      <div className="flex-grow overflow-hidden">
        <h2 className="text-xl font-semibold text-indigo-800 dark:text-purple-300 truncate">
          {user.displayName}
        </h2>
        <p className="text-sm text-indigo-600 dark:text-blue-300 truncate">
          {user.email}
        </p>
      </div>
    </div>
  );
}

export default UserSidebarContent;
