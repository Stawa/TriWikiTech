import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import JavaScriptCourse from "~/components/Courses/JavaScript/Index";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const courseId = data?.courseId;
  let title = "TriWikiTech | Courses";
  let description = "Learn programming with our comprehensive courses.";

  if (courseId === "javascript") {
    title = "TriWikiTech | JavaScript Course";
    description =
      "Master JavaScript with our comprehensive course. Learn modern best practices, advanced concepts, and build real-world applications.";
  }

  return [
    { title },
    {
      name: "description",
      content: description,
    },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const courseId = params["*"];
  return { courseId };
}

export default function Course() {
  const { courseId } = useLoaderData<typeof loader>();
  return <JavaScriptCourse />;
}
