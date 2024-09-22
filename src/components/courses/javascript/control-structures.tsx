"use client";

import Courses from "@components/courses/javascript/navigation";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Topics from "@components/courses/template/topics";
import CreateCourseItems from "@components/courses/create";
import { Single } from "@components/courses/template/single";
import { useTranslations, useLocale } from "next-intl";
import { Locale } from "@default/i18n/config";

import { FaCode, FaExchangeAlt, FaSyncAlt } from "react-icons/fa";
import { PiLightbulbFilamentFill } from "react-icons/pi";

export default function JavaScriptControlStructures() {
  const t = useTranslations("Component.Courses.JavaScript.ControlStructures");
  const locale = useLocale() as Locale;

  const topics = [
    {
      title: t("topics.conditionals.title"),
      description: t("topics.conditionals.description"),
      id: "conditionals",
      icon: FaCode,
    },
    {
      title: t("topics.loops.title"),
      description: t("topics.loops.description"),
      id: "loops",
      icon: FaSyncAlt,
    },
    {
      title: t("topics.switch.title"),
      description: t("topics.switch.description"),
      id: "switch",
      icon: FaExchangeAlt,
    },
  ];

  const createCourseItems = new CreateCourseItems({ language: locale });

  const conditionalExamples = [
    createCourseItems.createSingleItem({
      title: { en: "if-else Statement", id: "Pernyataan if-else" },
      description: {
        en: "The if-else statement allows you to execute different blocks of code based on a condition.",
        id: "Pernyataan if-else memungkinkan Anda menjalankan blok kode yang berbeda berdasarkan suatu kondisi.",
      },
      example: `let age = 18;\n\nif (age >= 18) {\n  console.log("You are eligible to vote.");\n} else {\n  console.log("You are not eligible to vote yet.");\n}`,
      output: `You are eligible to vote.`,
      explanation: {
        en: "In this example, since the age is 18, which is greater than or equal to 18, the first condition is true, so the first console.log statement is executed.",
        id: "Dalam contoh ini, karena usia adalah 18, yang lebih besar atau sama dengan 18, kondisi pertama benar, sehingga pernyataan console.log pertama dijalankan.",
      },
      bestUseCase: {
        en: "Use if-else statements when you need to execute different code blocks based on a single condition. It's particularly useful for binary decisions or simple branching logic.",
        id: "Gunakan pernyataan if-else ketika Anda perlu menjalankan blok kode yang berbeda berdasarkan satu kondisi. Ini sangat berguna untuk keputusan biner atau logika percabangan sederhana.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "else-if Statement", id: "Pernyataan else-if" },
      description: {
        en: "The else-if statement allows you to check multiple conditions in sequence.",
        id: "Pernyataan else-if memungkinkan Anda memeriksa beberapa kondisi secara berurutan.",
      },
      example: `let score = 85;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else if (score >= 70) {\n  console.log("Grade: C");\n} else {\n  console.log("Grade: F");\n}`,
      output: `Grade: B`,
      explanation: {
        en: "Here, the score is 85. It's not greater than or equal to 90, but it is greater than or equal to 80, so the second condition is true and 'Grade: B' is logged.",
        id: "Di sini, skor adalah 85. Ini tidak lebih besar atau sama dengan 90, tetapi lebih besar atau sama dengan 80, sehingga kondisi kedua benar dan 'Grade: B' dicatat.",
      },
      bestUseCase: {
        en: "Use else-if statements when you need to check multiple conditions in a specific order. It's ideal for scenarios where you have multiple possible outcomes based on different conditions, such as grading systems or categorization tasks.",
        id: "Gunakan pernyataan else-if ketika Anda perlu memeriksa beberapa kondisi dalam urutan tertentu. Ini ideal untuk skenario di mana Anda memiliki beberapa kemungkinan hasil berdasarkan kondisi yang berbeda, seperti sistem penilaian atau tugas kategorisasi.",
      },
    }),
  ];

  const loopExamples = [
    createCourseItems.createSingleItem({
      title: { en: "for Loop", id: "Loop for" },
      description: {
        en: "The for loop repeats a block of code a specified number of times.",
        id: "Loop for mengulang blok kode sejumlah waktu tertentu.",
      },
      example: `for (let i = 0; i < 5; i++) {\n  console.log("Iteration: " + i);\n}`,
      output: `Iteration: 0\nIteration: 1\nIteration: 2\nIteration: 3\nIteration: 4`,
      explanation: {
        en: "This for loop runs 5 times, with i starting at 0 and incrementing by 1 each time until it reaches 4.",
        id: "Loop for ini berjalan 5 kali, dengan i dimulai dari 0 dan bertambah 1 setiap kali hingga mencapai 4.",
      },
      bestUseCase: {
        en: "Use for loops when you know the exact number of iterations needed. They're ideal for iterating over arrays or performing a task a specific number of times.",
        id: "Gunakan loop for ketika Anda tahu jumlah iterasi yang diperlukan. Mereka ideal untuk mengiterasi array atau melakukan tugas sejumlah waktu tertentu.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "while Loop", id: "Loop while" },
      description: {
        en: "The while loop repeats a block of code as long as a specified condition is true.",
        id: "Loop while mengulang blok kode selama kondisi tertentu benar.",
      },
      example: `let count = 0;\nwhile (count < 5) {\n  console.log("Count: " + count);\n  count++;\n}`,
      output: `Count: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4`,
      explanation: {
        en: "This while loop continues to execute as long as count is less than 5. It increments count each time, so it will run 5 times.",
        id: "Loop while ini terus dijalankan selama count kurang dari 5. Ia menambah count setiap kali, sehingga akan berjalan 5 kali.",
      },
      bestUseCase: {
        en: "Use while loops when you don't know in advance how many times the loop should run. They're great for situations where you need to continue a process until a certain condition is met.",
        id: "Gunakan loop while ketika Anda tidak tahu sebelumnya berapa kali loop harus berjalan. Mereka bagus untuk situasi di mana Anda perlu melanjutkan proses sampai kondisi tertentu terpenuhi.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "do-while Loop", id: "Loop do-while" },
      description: {
        en: "The do-while loop is similar to the while loop, but it always executes the code block at least once before checking the condition.",
        id: "Loop do-while mirip dengan loop while, tetapi selalu menjalankan blok kode setidaknya satu kali sebelum memeriksa kondisi.",
      },
      example: `let num = 0;\ndo {\n  console.log("Number: " + num);\n  num++;\n} while (num < 5);`,
      output: `Number: 0\nNumber: 1\nNumber: 2\nNumber: 3\nNumber: 4`,
      explanation: {
        en: "This do-while loop works similarly to the while loop, but it would execute at least once even if the initial condition was false.",
        id: "Loop do-while ini bekerja mirip dengan loop while, tetapi akan dijalankan setidaknya satu kali bahkan jika kondisi awal salah.",
      },
      bestUseCase: {
        en: "Use do-while loops when you want to ensure that the code block is executed at least once, regardless of the condition. This is useful for scenarios where you need to perform an action before checking if it should be repeated.",
        id: "Gunakan loop do-while ketika Anda ingin memastikan bahwa blok kode dijalankan setidaknya satu kali, terlepas dari kondisinya. Ini berguna untuk skenario di mana Anda perlu melakukan tindakan sebelum memeriksa apakah itu harus diulang.",
      },
    }),
  ];

  const switchExample = [
    createCourseItems.createSingleItem({
      title: { en: "Switch Statement", id: "Pernyataan Switch" },
      description: {
        en: "The switch statement is used to perform different actions based on different conditions.",
        id: "Pernyataan switch digunakan untuk melakukan tindakan berbeda berdasarkan kondisi yang berbeda.",
      },
      example: `let day = 3;\nlet dayName;\n\nswitch (day) {\n  case 1:\n    dayName = "Monday";\n    break;\n  case 2:\n    dayName = "Tuesday";\n    break;\n  case 3:\n    dayName = "Wednesday";\n    break;\n  case 4:\n    dayName = "Thursday";\n    break;\n  case 5:\n    dayName = "Friday";\n    break;\n  default:\n    dayName = "Weekend";\n}\n\nconsole.log("Today is " + dayName);`,
      output: `Today is Wednesday`,
      explanation: {
        en: "In this switch statement, the value of day is 3, so it matches the case 3, and dayName is set to 'Wednesday'.",
        id: "Dalam pernyataan switch ini, nilai day adalah 3, sehingga cocok dengan case 3, dan dayName diatur menjadi 'Wednesday'.",
      },
      bestUseCase: {
        en: "Use switch statements when you have multiple conditions to check against a single variable. It's especially useful for menu systems, state machines, or when mapping numeric values to string representations (like in this day of the week example).",
        id: "Gunakan pernyataan switch ketika Anda memiliki beberapa kondisi untuk diperiksa terhadap satu variabel. Ini sangat berguna untuk sistem menu, mesin status, atau ketika memetakan nilai numerik ke representasi string (seperti dalam contoh hari dalam seminggu ini).",
      },
    }),
  ];

  return (
    <CourseContainer
      authorInfo={{
        date: "2024-09-15",
        title: t("title"),
      }}
      courses={Courses(locale)}
      currentCourseLink="/courses/javascript/control-structures"
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
        id="conditionals"
        delay={0.8}
        title={t("topics.conditionals.title")}
        language="javascript"
        components={conditionalExamples}
        icon={FaCode}
      />

      <Single
        id="loops"
        delay={0.9}
        title={t("topics.loops.title")}
        language="javascript"
        components={loopExamples}
        icon={FaSyncAlt}
      />

      <Single
        id="switch"
        delay={1.0}
        title={t("topics.switch.title")}
        language="javascript"
        components={switchExample}
        icon={FaExchangeAlt}
      />
    </CourseContainer>
  );
}
