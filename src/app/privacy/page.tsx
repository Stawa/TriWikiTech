"use client";

import { FaEdit } from "react-icons/fa";
import {
  FaUserSecret,
  FaDatabase,
  FaCookie,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import RulesContent from "@components/rules/main";

const PrivacyContent = [
  {
    title: "1. Information Collection",
    content:
      "We collect personal information that you voluntarily provide when using TriWikiTech, such as your name and email address.",
    icon: FaUserSecret,
  },
  {
    title: "2. Data Usage",
    content:
      "We use your information to provide and improve our services, communicate with you, and ensure the security of our platform.",
    icon: FaDatabase,
  },
  {
    title: "3. Cookies",
    content:
      "We use cookies to enhance your experience, understand site usage, and assist in our marketing efforts.",
    icon: FaCookie,
  },
  {
    title: "4. Communication",
    content:
      "We may use your email address to send you updates about our services, respond to inquiries, or send promotional materials.",
    icon: FaEnvelope,
  },
  {
    title: "5. Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure.",
    icon: FaLock,
  },
  {
    title: "6. Changes to Privacy Policy",
    content:
      "We reserve the right, at our sole discretion, to modify or replace this Privacy Policy at any time.",
    icon: FaEdit,
  },
];

export default function PrivacyPolicy() {
  return (
    <RulesContent
      title="Privacy Policy"
      description="Your privacy is important to us. Please read our policy carefully. This policy is still under development and is subject to change. It's not yet finalized and not in use."
      content={PrivacyContent}
    />
  );
}
