import { UserProfile } from "~/types/user";

/**
 * Converts a JsonifyObject to a UserProfile
 * @param jsonObject The JsonifyObject to convert
 * @returns UserProfile
 */
export function convertToUserProfile(
  jsonObject: Record<string, any> | null
): UserProfile {
  if (!jsonObject) {
    return {} as UserProfile;
  }

  return {
    badges: Array.isArray(jsonObject.badges) ? jsonObject.badges : [],
    bio: jsonObject.bio || "",
    createdAt: jsonObject.createdAt ?? new Date(),
    displayName: jsonObject.displayName || "",
    email: jsonObject.email || "",
    id: jsonObject.id || "",
    image: jsonObject.image || "",
    lastSignIn: jsonObject.lastSignIn ?? new Date(),
    name: jsonObject.name || "",
    progress: jsonObject.progress || 0,
    provider: jsonObject.provider || "",
    providerAccountId: jsonObject.providerAccountId || "",
    displayedBadges: jsonObject.displayedBadges || [],
  };
}
