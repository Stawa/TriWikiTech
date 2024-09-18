import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const HomeButton: React.FC = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-2 sm:py-2.5 px-3 sm:px-5 rounded-full transition duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm"
    >
      <FaArrowLeft className="mr-2" />
      Return to Home
    </Link>
  );
};

export default HomeButton;
