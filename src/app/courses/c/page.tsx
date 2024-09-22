"use client";

import Courses from "@components/courses/c/navigation";
import { CourseContainer, getPageContent } from "@main/src/app/courses/main";
import { Locale } from "@default/i18n/config";

import { useLocale, useTranslations } from "next-intl";

const CCourses = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("Courses.MainPage.C");

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

export default CCourses;
