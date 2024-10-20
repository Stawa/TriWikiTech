import { FaUser } from "react-icons/fa";
import { UserProfile } from "~/types/user";

interface UserMenuButtonProps {
  toggleSidebar: () => void;
  user: UserProfile | null;
}

function UserMenuButton({ toggleSidebar, user }: UserMenuButtonProps) {
  return (
    <button
      onClick={toggleSidebar}
      className="p-2 rounded-full bg-indigo-700 hover:bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white transition-colors duration-200 shadow-md"
      aria-label="Open User Menu"
    >
      {user ? (
        Object.keys(user).length > 0 ? (
          <img
            src={user.image}
            alt={user.name}
            className="w-8 h-8 rounded-full border-2 border-indigo-300 dark:border-indigo-300"
          />
        ) : (
          <FaUser className="md:text-lg" />
        )
      ) : (
        <FaUser className="md:text-lg" />
      )}
    </button>
  );
}

export default UserMenuButton;
