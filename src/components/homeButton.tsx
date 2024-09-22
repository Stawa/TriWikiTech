import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface HomeButtonProps {
  size: "sm" | "md";
}

const HomeButton: React.FC<HomeButtonProps> = ({ size }) => {
  const t = useTranslations("Component.HomeButton");
  const sizeClasses = {
    sm: "py-2 sm:py-2.5 px-3 sm:px-5 text-xs sm:text-sm",
    md: "py-3 sm:py-3.5 px-4 sm:px-6 text-sm sm:text-base",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-full transition duration-300 transform hover:scale-105 shadow-lg ${sizeClasses[size]}`}
    >
      <FaArrowLeft className="mr-2" />
      {t("returnToHome")}
    </Link>
  );
};

export default HomeButton;
