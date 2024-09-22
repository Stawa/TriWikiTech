"use client";

import CourseContainer from "@main/src/app/courses/main";
import Courses from "@components/courses/c/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@default/i18n/config";

const CCourses = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("Courses.MainPage.C");

  const header = {
    title: t("title"),
    description: t("description"),
    explanation: t("explanation"),
    whyLearn: t("whyLearn"),
  };

  const features = [];
  for (let i = 0; i < 6; i++) {
    features.push(t(`features.${i}`));
  }

  return (
    <CourseContainer
      header={header}
      features={features}
      courses={Courses(locale)}
    />
  );
};

export default CCourses;
