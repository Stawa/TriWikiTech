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

  const getNumber = (key: string): number =>
    typeof jsonObject[key] === "number" ? (jsonObject[key] as number) : 0;

  return {
    userId: getString("id"),
    username: getString("username"),
    fullName: getString("fullName"),
    emailAddress: getString("emailAddress"),
    avatarUrl: getString("avatarUrl"),
    userBio: getString("userBio"),
    authProvider: getString("authProvider"),
    authId: getString("authId"),
    joinedAt: getDate("joinedAt"),
    lastActive: getDate("lastActive"),
    earnedBadges: getArray("earnedBadges") as string[],
    activeBadges: getArray("activeBadges") as string[],
    stats: {
      completedLessons: getNumber("completedLessons"),
      totalAchievements: getNumber("totalAchievements"),
      totalScore: getNumber("totalScore"),
      rankTitle: getString("rankTitle"),
      enrolledCourses: Object.entries(getObject("enrolledCourses")).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            title: ((value as Record<string, unknown>)?.title as string) || "",
            completion:
              ((value as Record<string, unknown>)?.completion as number) || 0,
            themeColor:
              ((value as Record<string, unknown>)?.themeColor as string) || "",
            summary:
              ((value as Record<string, unknown>)?.summary as string) || "",
          },
        }),
        {}
      ),
      activityFeed: getArray("activityFeed").map((item) => ({
        id: ((item as Record<string, unknown>)?.id as string) || "",
        title: ((item as Record<string, unknown>)?.title as string) || "",
        lesson: ((item as Record<string, unknown>)?.lesson as string) || "",
        experiencePoints:
          ((item as Record<string, unknown>)?.experiencePoints as number) || 0,
        timestamp: new Date(
          ((item as Record<string, unknown>)?.timestamp as string) ||
            defaultDate
        ),
      })),
    },
    links: {
      github: getString("github"),
      twitter: getString("twitter"),
    },
  };
}
