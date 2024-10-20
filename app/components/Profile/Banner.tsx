import { useState } from "react";
import { FaUserCircle, FaEnvelope, FaEdit, FaMedal } from "react-icons/fa";
import { UserProfile } from "~/types/user";
import BadgeConfigModal from "./BadgeConfigModal";

function ProfileBanner({
  user,
  badges,
  isOwnProfile,
  onUpdateDisplayedBadges,
}: {
  user: UserProfile;
  badges: { [key: string]: React.ReactNode };
  isOwnProfile: boolean;
  onUpdateDisplayedBadges: (displayedBadges: string[]) => Promise<void>;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-full">
      <div className="bg-indigo-900 bg-opacity-20 shadow-lg rounded-lg p-4 lg:p-6 transition-all duration-300 hover:shadow-2xl relative overflow-hidden h-full">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-50"></div>
        <div className="relative z-10">
          <ProfileHeader user={user} badges={badges} />
          <ProfileBio bio={user.bio} />
        </div>
        <ProfileContact email={user.email} />
        {isOwnProfile && <ProfileActions handleOpenModal={handleOpenModal} />}
        <BadgeConfigModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          user={user}
          badges={badges}
          onUpdateDisplayedBadges={onUpdateDisplayedBadges}
        />
      </div>
    </div>
  );
}

function ProfileHeader({
  user,
  badges,
}: {
  user: UserProfile;
  badges: { [key: string]: React.ReactNode };
}) {
  return (
    <div className="flex flex-col items-center mb-4 lg:mb-6">
      <div className="w-24 h-24 lg:w-32 lg:h-32 relative mb-2 lg:mb-4">
        <img
          alt={user.displayName}
          src={user.image || "https://via.placeholder.com/128"}
          className="rounded-full object-cover border-4 border-indigo-400 shadow-xl"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
            color: "transparent",
          }}
        />
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold text-indigo-300 mb-1 lg:mb-2">
        {user.displayName}
      </h2>
      <div className="flex flex-wrap justify-center gap-1 lg:gap-2 mt-1 lg:mt-2">
        {user.displayedBadges &&
          user.displayedBadges.map((badge: string, index: number) => (
            <span
              key={index}
              className="px-2 lg:px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full flex items-center shadow-md"
            >
              {badges[badge]}
              <span className="ml-1">{badge}</span>
            </span>
          ))}
      </div>
    </div>
  );
}

function ProfileBio({ bio }: { bio: string }) {
  return (
    <div className="bg-indigo-800 bg-opacity-30 rounded-xl p-3 lg:p-4 mb-4 lg:mb-6 shadow-inner">
      <h3 className="text-lg lg:text-xl font-semibold text-indigo-300 mb-1 lg:mb-2 flex items-center">
        <FaUserCircle className="mr-2" /> Bio
      </h3>
      <p className="text-indigo-200 text-xs lg:text-sm leading-relaxed">
        {bio || "No bio available."}
      </p>
    </div>
  );
}

function ProfileContact({ email }: { email: string }) {
  return (
    <div className="border-t border-indigo-600 pt-3 lg:pt-4">
      <p className="text-indigo-300 text-sm lg:text-base flex items-center mb-3 lg:mb-4">
        <FaEnvelope className="mr-2 text-indigo-400" /> {email}
      </p>
    </div>
  );
}

function ProfileActions({ handleOpenModal }: { handleOpenModal: () => void }) {
  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-4">
      <button className="flex-1 bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 lg:py-2 px-2 lg:px-4 rounded-md transition duration-300 flex items-center justify-center text-xs lg:text-sm">
        <FaEdit className="mr-1 lg:mr-2" /> Edit Profile
      </button>
      <button
        onClick={handleOpenModal}
        className="flex-1 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black font-bold py-1 lg:py-2 px-2 lg:px-4 rounded-md transition duration-300 flex items-center justify-center text-xs lg:text-sm"
      >
        <FaMedal className="mr-1 lg:mr-2" /> Configure Badges
      </button>
    </div>
  );
}

export default ProfileBanner;
