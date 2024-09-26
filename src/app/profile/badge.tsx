import { MdLock, MdPublic } from "react-icons/md";

interface ProfileVisibilityBadgeProps {
  isPublic: boolean;
}

const ProfileVisibilityBadge: React.FC<ProfileVisibilityBadgeProps> = ({
  isPublic,
}) => {
  const badgeConfig = {
    icon: isPublic ? MdPublic : MdLock,
    text: isPublic ? "Public" : "Private",
    gradientColors: isPublic
      ? "from-green-400 to-green-600"
      : "from-red-400 to-red-600",
  };

  return (
    <span
      className={`bg-gradient-to-r ${badgeConfig.gradientColors} text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center shadow-md`}
    >
      <badgeConfig.icon className="mr-1 md:mr-2" />
      {badgeConfig.text}
    </span>
  );
};

export default ProfileVisibilityBadge;
