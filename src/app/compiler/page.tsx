"use client";

import ComingSoonScreen from "@default/components/upcoming";
import { FaLaptopCode } from "react-icons/fa";

export default function Compiler() {
  return (
    <ComingSoonScreen
      title="Compiler"
      description="We're working on an exciting online compiler feature. Stay tuned for the upcoming update!"
      icon={FaLaptopCode}
    />
  );
}
