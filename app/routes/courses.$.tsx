import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import NotFound from "~/components/Courses/NotFound";
import {
  JavaScriptCourse,
  JavaScriptCourseMeta,
} from "~/components/Courses/JavaScript/Index";
import {
  JavaScriptSetup,
  SetupMetaData,
} from "~/components/Courses/JavaScript/Start/Setup";
import {
  FirstJavaScriptCode,
  FirstCodeMetaData,
} from "~/components/Courses/JavaScript/Start/FirstCode";
import { CourseMeta } from "~/types/course";

interface CourseData {
  courseId: string;
  coursePath: string;
}

interface CourseMetaWithPaths extends CourseMeta {
  paths: Record<string, CourseMeta>;
}

const COURSE_META: Record<string, CourseMeta | CourseMetaWithPaths> = {
  default: {
    title: "TriWikiTech | Courses",
    description: "Learn programming with our comprehensive courses.",
  },
  javascript: {
    ...JavaScriptCourseMeta,
    paths: {
      setup: SetupMetaData,
      "first-code": FirstCodeMetaData,
    },
  },
};

function getMetaData(courseId: string, coursePath: string) {
  const courseMeta = COURSE_META[courseId] || COURSE_META.default;

  if (coursePath && "paths" in courseMeta && courseMeta.paths?.[coursePath]) {
    return courseMeta.paths[coursePath];
  }

  return courseMeta;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { courseId, coursePath } = data as CourseData;
  const metaData = getMetaData(courseId, coursePath);

  return [
    { title: metaData.title },
    { name: "description", content: metaData.description },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: `https://beta.triwikitech.my.id/${metaData.url}`,
    },
    { property: "og:title", content: metaData.title },
    { property: "og:description", content: metaData.description },
    {
      property: "og:image",
      content: `https://beta.triwikitech.my.id${metaData.image}`,
    },
    {
      property: "og:published_time",
      content: metaData.published_time?.toISOString(),
    },
    {
      property: "og:modified_time",
      content: metaData.modified_time?.toISOString(),
    },
    { property: "article:section", content: metaData.section },
    ...(metaData.tag?.map((tag) => ({
      property: "article:tag",
      content: tag,
    })) || []),
    ...(metaData.author?.map((author) => ({
      property: "article:author",
      content: author,
    })) || []),
    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:url",
      content: `https://beta.triwikitech.my.id/${metaData.url}`,
    },
    { property: "twitter:title", content: metaData.title },
    { property: "twitter:description", content: metaData.description },
    {
      property: "twitter:image",
      content: `https://beta.triwikitech.my.id${metaData.image}`,
    },
  ].filter((meta) => meta.content != null);
};

export async function loader({ params }: LoaderFunctionArgs) {
  const [courseId = "", coursePath = ""] = params["*"]?.split("/") || [];
  return { courseId, coursePath };
}

const COURSE_COMPONENTS = {
  javascript: {
    default: JavaScriptCourse,
    setup: JavaScriptSetup,
    "first-code": FirstJavaScriptCode,
  },
};

function getCourseComponent(courseId: string, coursePath: string) {
  const courseGroup =
    COURSE_COMPONENTS[courseId as keyof typeof COURSE_COMPONENTS];

  if (!courseGroup) {
    return null;
  }

  if (!coursePath) {
    return courseGroup.default;
  }

  return courseGroup[coursePath as keyof typeof courseGroup] || null;
}

export default function Course() {
  const { courseId, coursePath } = useLoaderData<typeof loader>();
  const CourseComponent = getCourseComponent(courseId, coursePath);

  if (!CourseComponent) {
    return <NotFound />;
  }

  return <CourseComponent />;
}
