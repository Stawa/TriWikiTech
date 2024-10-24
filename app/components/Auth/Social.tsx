import { motion } from "framer-motion";

interface SocialLoginButtonProps {
  loginMethod: string;
  handleSocialLogin: (loginMethod: string) => void;
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  gradientFrom: string;
  gradientTo: string;
  textColor?: string;
}

function SocialLoginButton({
  loginMethod,
  handleSocialLogin,
  icon,
  label,
  bgColor,
  gradientFrom,
  gradientTo,
  textColor = "text-white",
}: SocialLoginButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => handleSocialLogin(loginMethod)}
      className={`${bgColor} ${textColor} font-bold py-3 px-4 rounded-lg transition duration-300 text-sm inline-flex items-center justify-center shadow-lg group relative overflow-hidden`}
    >
      <span className="relative z-10 flex items-center">
        {icon}
        <span className="ml-2 hidden sm:inline">{label}</span>
      </span>
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}
      ></div>
    </motion.button>
  );
}

export default SocialLoginButton;
