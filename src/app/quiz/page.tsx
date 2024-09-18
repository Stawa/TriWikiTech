"use client";

import ComingSoonScreen from "@components/upcoming";
import { FaQuestionCircle } from "react-icons/fa";

export default function Quiz() {
  return (
    <ComingSoonScreen
      title="Quiz"
      description="We're working on an exciting online quiz feature. Stay tuned for the upcoming update!"
      icon={FaQuestionCircle}
    />
  );
}
