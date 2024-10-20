import { lazy, Suspense } from "react";
import { UserProfile } from "~/types/user";

const NavLink = lazy(() => import("~/components/Navbar/NavLink"));
const UserMenuButton = lazy(() => import("~/components/Navbar/UserMenuButton"));

interface DesktopMenuProps {
  navigationItems: Array<{ to: string; label: string }>;
  toggleSidebar: () => void;
  user: UserProfile | null;
  translations: Record<string, string>;
}

function DesktopMenu({
  navigationItems,
  toggleSidebar,
  user,
  translations,
}: DesktopMenuProps) {
  return (
    <div className="hidden md:flex space-x-4 items-center">
      <Suspense fallback={<div>Loading...</div>}>
        {navigationItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {translations[item.label]}
          </NavLink>
        ))}
        <UserMenuButton toggleSidebar={toggleSidebar} user={user} />
      </Suspense>
    </div>
  );
}

export default DesktopMenu;
