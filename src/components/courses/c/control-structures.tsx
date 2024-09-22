"use client";

import {
  FaCode,
  FaExchangeAlt,
  FaQuestionCircle,
  FaRedoAlt,
  FaSyncAlt,
} from "react-icons/fa";
import { PiLightbulbFilamentFill } from "react-icons/pi";

import {
  Single,
  type SingleItemProps,
} from "@components/courses/template/single";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Courses from "@components/courses/c/navigation";
import Topics from "@components/courses/template/topics";
import CreateCourseItems from "@components/courses/create";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@default/i18n/config";

export default function CControlStructures() {
  const t = useTranslations("Component.Courses.C.ControlStructures");
  const locale = useLocale() as Locale;
  const createCourseItems = new CreateCourseItems({ language: locale });

  const topics = [
    {
      title: t("topics.ifStatements.title"),
      description: t("topics.ifStatements.description"),
      id: "if-statements",
      icon: FaQuestionCircle,
    },
    {
      title: t("topics.switchStatements.title"),
      description: t("topics.switchStatements.description"),
      id: "switch-statements",
      icon: FaExchangeAlt,
    },
    {
      title: t("topics.forLoops.title"),
      description: t("topics.forLoops.description"),
      id: "for-loops",
      icon: FaSyncAlt,
    },
    {
      title: t("topics.whileLoops.title"),
      description: t("topics.whileLoops.description"),
      id: "while-loops",
      icon: FaRedoAlt,
    },
  ];

  const ifStatements: SingleItemProps[] = [
    createCourseItems.createSingleItem({
      title: { en: "Basic If Statement", id: "Pernyataan If Dasar" },
      description: {
        en: "The simplest form of decision making in C",
        id: "Bentuk paling sederhana dari pengambilan keputusan di C",
      },
      explanation: {
        en: "An if statement allows you to execute a block of code only if a certain condition is true.",
        id: "Pernyataan if memungkinkan Anda untuk mengeksekusi blok kode hanya jika kondisi tertentu benar.",
      },
      example: `#include <stdio.h>\n\nint main() {\n    int x = 10;\n    if (x > 5) {\n        printf("x is greater than 5\\n");\n    }\n    return 0;\n}`,
      output: "x is greater than 5",
      bestUseCase: {
        en: "Use when you need to execute code conditionally based on a single condition.",
        id: "Gunakan ketika Anda perlu mengeksekusi kode secara kondisional berdasarkan satu kondisi.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "If-Else Statement", id: "Pernyataan If-Else" },
      description: {
        en: "Make decisions between two alternatives",
        id: "Membuat keputusan antara dua alternatif",
      },
      explanation: {
        en: "An if-else statement allows you to execute one block of code if the condition is true, and another if it's false.",
        id: "Pernyataan if-else memungkinkan Anda untuk mengeksekusi satu blok kode jika kondisinya benar, dan yang lain jika salah.",
      },
      example: `#include <stdio.h>\n\nint main() {\n    int age = 20;\n    if (age >= 18) {\n        printf("You are an adult\\n");\n    } else {\n        printf("You are a minor\\n");\n    }\n    return 0;\n}`,
      output: "You are an adult",
      bestUseCase: {
        en: "Use when you need to choose between two different actions based on a condition.",
        id: "Gunakan ketika Anda perlu memilih antara dua tindakan berbeda berdasarkan kondisi.",
      },
    }),
  ];

  const switchStatements: SingleItemProps[] = [
    createCourseItems.createSingleItem({
      title: {
        en: "Basic Switch Statement",
        id: "Pernyataan Switch Dasar",
      },
      description: {
        en: "Multi-way decision making using switch",
        id: "Pengambilan keputusan multi-arah menggunakan switch",
      },
      explanation: {
        en: "A switch statement allows you to select one of many code blocks to be executed.",
        id: "Pernyataan switch memungkinkan Anda untuk memilih salah satu dari banyak blok kode untuk dieksekusi.",
      },
      example: `#include <stdio.h>\n\nint main() {\n    int day = 4;\n    switch (day) {\n        case 1:\n            printf("Monday");\n            break;\n        case 2:\n            printf("Tuesday");\n            break;\n        case 3:\n            printf("Wednesday");\n            break;\n        case 4:\n            printf("Thursday");\n            break;\n        case 5:\n            printf("Friday");\n            break;\n        default:\n            printf("Weekend");\n    }\n    return 0;\n}`,
      output: "Thursday",
      bestUseCase: {
        en: "Use when you have multiple conditions based on a single variable or expression.",
        id: "Gunakan ketika Anda memiliki beberapa kondisi berdasarkan satu variabel atau ekspresi.",
      },
    }),
  ];

  const forLoops: SingleItemProps[] = [
    createCourseItems.createSingleItem({
      title: { en: "Basic For Loop", id: "Loop For Dasar" },
      description: {
        en: "Iterate a specific number of times",
        id: "Mengulang sejumlah kali tertentu",
      },
      explanation: {
        en: "A for loop repeats a block of code a specified number of times.",
        id: "Loop for mengulang blok kode sejumlah kali yang ditentukan.",
      },
      example: `#include <stdio.h>\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", i);\n    }\n    return 0;\n}`,
      output: "0 1 2 3 4",
      bestUseCase: {
        en: "Use when you know in advance how many times you want to execute a block of code.",
        id: "Gunakan ketika Anda tahu sebelumnya berapa kali Anda ingin mengeksekusi blok kode.",
      },
    }),
  ];

  const whileLoops: SingleItemProps[] = [
    createCourseItems.createSingleItem({
      title: { en: "While Loop", id: "Loop While" },
      description: {
        en: "Repeat a block of code while a condition is true",
        id: "Mengulang blok kode selama kondisi benar",
      },
      explanation: {
        en: "A while loop continues to execute a block of code as long as a specified condition is true.",
        id: "Loop while terus mengeksekusi blok kode selama kondisi yang ditentukan benar.",
      },
      example: `#include <stdio.h>\n\nint main() {\n    int i = 0;\n    while (i < 5) {\n        printf("%d ", i);\n        i++;\n    }\n    return 0;\n}`,
      output: "0 1 2 3 4",
      bestUseCase: {
        en: "Use when you want to repeat a block of code as long as a condition is true, and you don't know in advance how many iterations will be needed.",
        id: "Gunakan ketika Anda ingin mengulang blok kode selama kondisi benar, dan Anda tidak tahu sebelumnya berapa banyak iterasi yang akan diperlukan.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Do-While Loop", id: "Loop Do-While" },
      description: {
        en: "Execute a block of code at least once, then repeat while a condition is true",
        id: "Mengeksekusi blok kode setidaknya sekali, kemudian mengulang selama kondisi benar",
      },
      explanation: {
        en: "A do-while loop is similar to a while loop, but it executes the code block at least once before checking the condition.",
        id: "Loop do-while mirip dengan loop while, tetapi mengeksekusi blok kode setidaknya sekali sebelum memeriksa kondisi.",
      },
      example: `#include <stdio.h>\n\nint main() {\n    int i = 0;\n    do {\n        printf("%d ", i);\n        i++;\n    } while (i < 5);\n    return 0;\n}`,
      output: "0 1 2 3 4",
      bestUseCase: {
        en: "Use when you want to ensure that a block of code executes at least once, regardless of the condition.",
        id: "Gunakan ketika Anda ingin memastikan bahwa blok kode dieksekusi setidaknya sekali, terlepas dari kondisinya.",
      },
    }),
  ];

  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: t("title") }}
      courses={Courses(locale)}
      currentCourseLink="/courses/c/control-structures"
    >
      <CourseInfo
        title={t("courseOverview.title")}
        id="course-overview"
        delay={0.3}
        description={t("courseOverview.description")}
        icon={FaCode}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title={t("whyControlStructuresMatter.title")}
        id="why-control-structures-matter"
        delay={0.7}
        description={t("whyControlStructuresMatter.description")}
        icon={PiLightbulbFilamentFill}
      />

      <Single
        title={t("topics.ifStatements.title")}
        id="if-statements"
        delay={0.8}
        components={ifStatements}
        language="c"
        icon={FaQuestionCircle}
      />

      <Single
        title={t("topics.switchStatements.title")}
        id="switch-statements"
        delay={1.0}
        components={switchStatements}
        language="c"
        icon={FaExchangeAlt}
      />

      <Single
        title={t("topics.forLoops.title")}
        id="for-loops"
        delay={1.2}
        components={forLoops}
        language="c"
        icon={FaSyncAlt}
      />

      <Single
        title={t("topics.whileLoops.title")}
        id="while-loops"
        delay={1.4}
        components={whileLoops}
        language="c"
        icon={FaRedoAlt}
      />
    </CourseContainer>
  );
}
