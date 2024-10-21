interface UserProfile {
  id: string;
  name: string;
  displayName: string;
  email: string;
  image: string;
  bio: string;
  provider: string;
  providerAccountId: string;
  createdAt: Date;
  lastSignIn: Date;
  badges: string[];
  progress: object;
  displayedBadges: string[];
}

export { type UserProfile };
