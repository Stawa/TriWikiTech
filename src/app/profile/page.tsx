import { redirect } from "next/navigation";
import { getUserData } from "@components/user";

export default async function ProfilePage() {
  const userData = await getUserData();

  if (!userData) {
    redirect("/login");
  }

  if (!userData.name || !userData.displayName) {
    redirect(`/complete-profile`);
  }

  redirect(`/profile/${userData.name}`);
}
