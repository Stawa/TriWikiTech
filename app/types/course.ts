interface CourseMeta {
  title: string;
  description: string;
  published_time?: Date;
  modified_time?: Date;
  section?: string;
  tag?: string[];
  author?: string[];
  image?: string;
  url?: string;
}

export type { CourseMeta };
