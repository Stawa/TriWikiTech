import { UserProfile } from "~/types/user";

/**
 * Converts a JsonifyObject to a UserProfile
 * @param jsonObject The JsonifyObject to convert
 * @returns UserProfile
 */
export function convertToUserProfile(
  jsonObject: Record<string, unknown> | null
): UserProfile {
  if (!jsonObject) {
    return {} as UserProfile;
  }

  const defaultDate = new Date();

  const getString = (key: string): string =>
    typeof jsonObject[key] === "string" ? (jsonObject[key] as string) : "";

  const getDate = (key: string): Date =>
    jsonObject[key] instanceof Date
      ? (jsonObject[key] as Date)
      : new Date(getString(key) || defaultDate);

  const getArray = (key: string): unknown[] =>
    Array.isArray(jsonObject[key]) ? (jsonObject[key] as unknown[]) : [];

  const getObject = (key: string): Record<string, unknown> =>
    typeof jsonObject[key] === "object" && jsonObject[key] !== null
      ? (jsonObject[key] as Record<string, unknown>)
      : {};

  return {
    badges: getArray("badges") as string[],
    bio: getString("bio"),
    createdAt: getDate("createdAt"),
    displayName: getString("displayName"),
    email: getString("email"),
    id: getString("id"),
    image: getString("image"),
    lastSignIn: getDate("lastSignIn"),
    name: getString("name"),
    progress: getObject("progress"),
    provider: getString("provider"),
    providerAccountId: getString("providerAccountId"),
    displayedBadges: getArray("displayedBadges") as string[],
  };
}
