import {
  FaLightbulb,
  FaMemory,
  FaFileAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { TbPointer } from "react-icons/tb";
import { GiProcessor } from "react-icons/gi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { Locale } from "@default/i18n/config";
import CreateCourseItems from "@components/courses/create";

const Courses = (locale: Locale) => {
  const createCourseItems = new CreateCourseItems({ language: locale });

  const courses = [
    createCourseItems.createNavigationItem({
      title: {
        id: "Dasar-dasar",
        en: "Basics",
      },
      description: {
        id: "Variabel, tipe data, dan operasi input/output dasar",
        en: "Variables, data types, and basic input/output operations",
      },
      link: "/courses/c/basics",
      icon: (
        <TbHeartRateMonitor className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Struktur Kontrol",
        en: "Control Structures",
      },
      description: {
        id: "Kondisional dan perulangan dalam C",
        en: "Conditionals and loops in C",
      },
      link: "/courses/c/control-structures",
      icon: (
        <FaProjectDiagram className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Fungsi",
        en: "Functions",
      },
      description: {
        id: "Mendefinisikan dan menggunakan fungsi dalam C",
        en: "Defining and using functions in C",
      },
      link: "/courses/c/functions",
      icon: (
        <FaFileAlt className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Pointer",
        en: "Pointers",
      },
      description: {
        id: "Memahami dan bekerja dengan pointer dalam C",
        en: "Understanding and working with pointers in C",
      },
      link: "/courses/c/pointers",
      icon: (
        <TbPointer className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Manajemen Memori",
        en: "Memory Management",
      },
      description: {
        id: "Alokasi dan manajemen memori dinamis dalam C",
        en: "Dynamic memory allocation and management in C",
      },
      link: "/courses/c/memory-management",
      icon: (
        <FaMemory className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Topik Lanjutan",
        en: "Advanced Topics",
      },
      description: {
        id: "Struct, I/O file, dan direktif preprosesor",
        en: "Structs, file I/O, and preprocessor directives",
      },
      link: "/courses/c/advanced",
      icon: (
        <GiProcessor className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Kembali ke Beranda",
        en: "Back to Home",
      },
      description: {
        id: "Ikhtisar semua kursus C",
        en: "Overview of all C courses",
      },
      link: "/courses/c",
      icon: (
        <FaLightbulb className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
      ),
    }),
  ];

  return courses;
};

export default Courses;
