import Navigation from "~/components/Courses/Navigation";
import { useEffect, useState } from "react";

import HeroSection from "~/components/Courses/Hero";
import TableOfContents from "~/components/Courses/ToC";

export const JavaScriptVariableTypesMetaData = {
  title: "TriWikiTech | JavaScript Variables & Data Types",
  description:
    "Learn about JavaScript variables and different data types available in the language.",
  image: "/courses/og/javascript_variables_hero.png",
  url: "/courses/javascript/variables",
  published_time: new Date("2024-12-07"),
  modified_time: new Date("2024-12-07"),
  section: "JavaScript Basics",
  tag: ["JavaScript", "Variables", "Data Types", "Programming"],
  author: ["Stawa"],
};

export function JavaScriptVariableTypes() {
  const [readTime, setReadTime] = useState<number>(0);

  useEffect(() => {
    const pageText = document.body.innerText;
    setReadTime(pageText.length);
  }, []);

  const HeroSectionItems = {
    badge: {
      chapter: 2,
      title: "Variables & Data Types",
    },
    title: {
      main: "Variables &",
      sub: "Data Types in JavaScript",
    },
    description:
      "In this course, you'll explore the fundamental concepts of variables and data types in JavaScript. Variables allow you to store and manipulate data, while data types specify the type of data stored in a variable.",
    readTime: readTime,
    modified_time: JavaScriptVariableTypesMetaData.modified_time,
  };

  const navigation = {
    previous: {
      href: "/courses/javascript/first-code",
      title: "First Code",
    },
  };

  const ToCNavigation = [
    {
      id: "XX",
      title: "XX",
      number: "XX",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection {...HeroSectionItems} />
      {/* Main Section */}
      <section className="w-full bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <TableOfContents navigation={ToCNavigation} />
            {/* Main Content */}
            <div className="mt-8 lg:mt-0 lg:col-span-9">
              <div className="pb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Coming Soon
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We're working hard to bring you content on Variables & Data
                  Types in JavaScript. Check back soon for updates!
                </p>
              </div>
              {/* Navigation */}
              <Navigation navigation={navigation} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
