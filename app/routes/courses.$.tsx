import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import JavaScriptCourse from "~/components/Courses/JavaScript/Index";

export async function loader({ params }: LoaderFunctionArgs) {
  const courseId = params["*"];
  return { courseId };
}

export default function Course() {
  const { courseId } = useLoaderData<typeof loader>();
  return <JavaScriptCourse />;
}
