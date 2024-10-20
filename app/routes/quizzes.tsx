import { MetaFunction } from "@remix-run/react";
import ComingSoon from "~/components/ComingSoon";

export const meta: MetaFunction = () => [
  { title: "TriWikiTech | Quizzes" },
  {
    name: "description",
    content:
      "Exciting quizzes coming soon! Stay tuned for our upcoming release featuring engaging and challenging quizzes to test your knowledge.",
  },
];

export default function Quizzes() {
  return (
    <ComingSoon
      title="Quizzes Coming Soon"
      description="We're working on an exciting update for our Quiz section. Stay tuned for the upcoming release featuring engaging and challenging quizzes!"
      buttonText="Return to Home"
      buttonLink="/"
    />
  );
}
