import { MetaFunction } from "@remix-run/react";
import ComingSoon from "~/components/ComingSoon";

export const meta: MetaFunction = () => [
  { title: "TriWikiTech | Courses" },
  {
    name: "description",
    content:
      "Exciting courses coming soon! Stay tuned for our upcoming release featuring engaging and comprehensive courses to enhance your skills and knowledge.",
  },
];

export default function Courses() {
  return (
    <ComingSoon
      title="Courses Coming Soon"
      description="We're crafting an exciting lineup of courses to enhance your learning journey. Stay tuned for our upcoming release!"
      buttonText="Return to Home"
      buttonLink="/"
    />
  );
}
