import { MetaFunction } from "@remix-run/react";
import ComingSoon from "~/components/ComingSoon";

export const meta: MetaFunction = () => [
  { title: "TriWikiTech | Compiler" },
  {
    name: "description",
    content:
      "Exciting compiler feature coming soon! Stay tuned for our upcoming release featuring a powerful and interactive code compiler.",
  },
];

export default function Compiler() {
  return (
    <ComingSoon
      title="Compiler Coming Soon"
      description="We're working on an exciting compiler feature to enhance your coding experience. Stay tuned for our upcoming release featuring a powerful and interactive code compiler!"
      buttonText="Return to Home"
      buttonLink="/"
    />
  );
}
