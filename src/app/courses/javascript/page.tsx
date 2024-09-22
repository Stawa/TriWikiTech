"use client";

import Courses from "@components/courses/javascript/navigation";
import { CourseContainer, getPageContent } from "@main/src/app/courses/main";
import { Locale } from "@default/i18n/config";

import { useLocale, useTranslations } from "next-intl";

const JavaScriptCourses = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("Courses.MainPage.JavaScript");

  const { header, features } = getPageContent({
    locale,
    translations: t,
    length: 6,
  });

  return (
    <CourseContainer
      header={header}
      features={features}
      courses={Courses(locale)}
    />
  );
};

export default JavaScriptCourses;
