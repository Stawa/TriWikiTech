import ErrorLayout from "~/components/Profile/Error";
import { FaSearch } from "react-icons/fa";

function UserNotFound() {
  return (
    <ErrorLayout
      title="User Not Found"
      message="The user you're looking for doesn't exist."
      linkTo="/"
      linkText="Go to Home"
      icon={
        <FaSearch className="mx-auto h-12 lg:h-16 w-12 lg:w-16 text-indigo-400 dark:text-indigo-300" />
      }
    />
  );
}

export default UserNotFound;
