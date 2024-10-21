import { useState, useEffect, Fragment } from "react";
import { UserProfile } from "~/types/user";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useNavigate } from "react-router-dom";

function BadgeConfigModal({
  isOpen,
  onClose,
  user,
  badges,
  onUpdateDisplayedBadges,
}: {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  badges: { [key: string]: React.ReactNode };
  onUpdateDisplayedBadges: (displayedBadges: string[]) => Promise<void>;
}) {
  const [selectedBadges, setSelectedBadges] = useState<string[]>(
    user.displayedBadges || []
  );
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedBadges(user.displayedBadges || []);
  }, [user.displayedBadges]);

  const handleBadgeToggle = (badge: string) => {
    setSelectedBadges((prev) =>
      prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge]
    );
  };

  const handleSave = async () => {
    setIsUpdating(true);
    try {
      await onUpdateDisplayedBadges(selectedBadges);
      onClose();
      navigate(0);
    } catch (error) {
      console.error("Failed to update badges:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-4 sm:p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4"
                >
                  Configure Displayed Badges
                </DialogTitle>
                <div className="mt-2 space-y-3 sm:space-y-4 max-h-60 sm:max-h-80 overflow-y-auto">
                  {user.badges &&
                    user.badges.map((badge) => (
                      <div key={badge} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id={`badge-${badge}`}
                          checked={selectedBadges.includes(badge)}
                          onChange={() => handleBadgeToggle(badge)}
                          className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 rounded focus:ring-indigo-500 focus:ring-offset-gray-900"
                        />
                        <label
                          htmlFor={`badge-${badge}`}
                          className="flex items-center space-x-2 text-teal-300 cursor-pointer text-sm sm:text-base"
                        >
                          <span className="truncate">{badge}</span>
                          <div className="flex-shrink-0">{badges[badge]}</div>
                        </label>
                      </div>
                    ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    type="button"
                    className="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 transition-colors"
                    onClick={onClose}
                    disabled={isUpdating}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleSave}
                    disabled={isUpdating}
                  >
                    {isUpdating ? "Saving..." : "Save"}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default BadgeConfigModal;
