import { UserProfile } from "~/types/user";

interface UserSidebarContentProps {
  user: UserProfile;
}

function UserSidebarContent({ user }: UserSidebarContentProps) {
  return (
    <div className="flex items-center mt-4 mb-4 pb-4 border-b border-indigo-600 dark:border-indigo-600">
      <div className="flex-shrink-0 w-16 h-16 relative mr-4">
        <img
          src={user.image}
          alt={user.name}
          className="rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-500 shadow-xl"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold text-indigo-800 dark:text-purple-300 break-words">
          {user.displayName}
        </h2>
        <p className="text-sm text-indigo-600 dark:text-blue-300 break-words">{user.email}</p>
      </div>
    </div>
  );
}

export default UserSidebarContent;
