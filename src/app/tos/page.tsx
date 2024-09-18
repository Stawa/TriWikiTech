"use client";

import { FaEdit } from "react-icons/fa";
import {
  FaCheckCircle,
  FaUserShield,
  FaCopyright,
  FaUserLock,
  FaTimesCircle,
} from "react-icons/fa";
import RulesContent from "@components/rules/main";

const TermsContent = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using TriWikiTech, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
    icon: FaCheckCircle,
  },
  {
    title: "2. Use of Service",
    content:
      "You agree to use TriWikiTech for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.",
    icon: FaUserShield,
  },
  {
    title: "3. Intellectual Property",
    content:
      "The content, organization, graphics, design, and other matters related to TriWikiTech are protected under applicable copyrights and other proprietary laws.",
    icon: FaCopyright,
  },
  {
    title: "4. User Accounts",
    content:
      "You are responsible for safeguarding the password that you use to access TriWikiTech and for any activities or actions under your password.",
    icon: FaUserLock,
  },
  {
    title: "5. Termination",
    content:
      "We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever.",
    icon: FaTimesCircle,
  },
  {
    title: "6. Changes to Terms",
    content:
      "We reserve the right, at our sole discretion, to modify or replace these Terms at any time.",
    icon: FaEdit,
  },
];

export default function TermsOfService() {
  return (
    <RulesContent
      title="Terms of Service"
      description="Please read these terms carefully before using TriWikiTech. These terms are still under development and are subject to change. It's not yet finalized and not in use."
      content={TermsContent}
    />
  );
}
