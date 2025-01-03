interface UserProfile {
  userId: string;
  username: string;
  fullName: string;
  emailAddress: string;
  avatarUrl: string;
  userBio: string;
  authProvider: string;
  authId: string;
  joinedAt: Date;
  lastActive: Date;
  earnedBadges: string[];
  activeBadges: string[];
  isVerified: boolean;
  stats: {
    completedLessons: number;
    totalAchievements: number;
    totalScore: number;
    rankTitle: string;
    enrolledCourses: {
      [courseId: string]: {
        title: string;
        completion: number;
        themeColor: string;
        summary: string;
      };
    };
    activityFeed: {
      id: string;
      title: string;
      lesson: string;
      experiencePoints: number;
      timestamp: Date;
    }[];
  };
  links: {
    github?: string;
    twitter?: string;
  };
}

export { type UserProfile };
