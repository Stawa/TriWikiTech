import { FaCode } from "react-icons/fa";
import { PiBracketsCurlyDuotone } from "react-icons/pi";
import { TbLambda } from "react-icons/tb";
import { VscOutput } from "react-icons/vsc";
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
        id: "Console.log, variabel, dan tipe data",
        en: "Console.log, variables, and data types",
      },
      link: `/courses/javascript/basics`,
      icon: (
        <VscOutput className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Struktur Kontrol",
        en: "Control Structures",
      },
      description: {
        id: "Kondisional dan perulangan",
        en: "Conditionals and loops",
      },
      link: `/courses/javascript/control-structures`,
      icon: (
        <FaCode className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Fungsi",
        en: "Functions",
      },
      description: {
        id: "Mendefinisikan dan menggunakan fungsi secara efektif",
        en: "Defining and using functions effectively",
      },
      link: `/courses/javascript/functions`,
      icon: (
        <TbLambda className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Objek & Array",
        en: "Objects & Arrays",
      },
      description: {
        id: "Bekerja dengan struktur data kompleks",
        en: "Working with complex data structures",
      },
      link: `/courses/javascript/objects-arrays`,
      icon: (
        <PiBracketsCurlyDuotone className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
      ),
    }),
    createCourseItems.createNavigationItem({
      title: {
        id: "Kembali ke Beranda",
        en: "Back to Home",
      },
      description: {
        id: "Ikhtisar semua kursus JavaScript",
        en: "Overview of all JavaScript courses",
      },
      link: `/courses/javascript`,
      icon: (
        <FaCode className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
      ),
    }),
  ];

  return courses;
};

export default Courses;
