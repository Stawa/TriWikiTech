"use client";

import { RiFileTextLine } from "react-icons/ri";
import { PiTreeStructure } from "react-icons/pi";
import { TbCpu } from "react-icons/tb";

import Courses from "@components/courses/c/navigation";
import CourseContainer from "@components/courses/container";
import {
  Multiple,
  type MultipleItem,
} from "@components/courses/template/multiple";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@default/i18n/config";
import CreateCourseItems from "@components/courses/create";

export default function CAdvanced() {
  const t = useTranslations("Component.Courses.C.Advanced");
  const locale = useLocale() as Locale;

  const topics = [
    {
      title: t("topics.structures.title"),
      description: t("topics.structures.description"),
      id: "structures",
      icon: PiTreeStructure,
    },
    {
      title: t("topics.fileIO.title"),
      description: t("topics.fileIO.description"),
      id: "file-io",
      icon: RiFileTextLine,
    },
    {
      title: t("topics.preprocessorDirectives.title"),
      description: t("topics.preprocessorDirectives.description"),
      id: "preprocessor-directives",
      icon: TbCpu,
    },
  ];

  const createCourseItems = new CreateCourseItems({ language: locale });

  const structures: MultipleItem[] = [
    createCourseItems.createMultipleItem({
      type: "Basic Structure",
      examples: [
        {
          name: {
            en: "Simple Structure",
            id: "Struktur Sederhana",
          },
          description: {
            en: "Define a basic structure with multiple data types",
            id: "Mendefinisikan struktur dasar dengan beberapa tipe data",
          },
          example: `struct Person {\n    char name[50];\n    int age;\n    float height;\n};`,
          output: "// No output (structure definition)",
          explanation: {
            en: "This example demonstrates a simple structure named 'Person' that groups related data of different types. It includes a character array for the name, an integer for age, and a float for height. This structure allows you to create variables that can store all this information about a person in a single, organized unit.",
            id: "Contoh ini menunjukkan struktur sederhana bernama 'Person' yang mengelompokkan data terkait dari berbagai tipe. Ini mencakup array karakter untuk nama, integer untuk usia, dan float untuk tinggi. Struktur ini memungkinkan Anda membuat variabel yang dapat menyimpan semua informasi tentang seseorang dalam satu unit yang terorganisir.",
          },
        },
        {
          name: {
            en: "Nested Structure",
            id: "Struktur Bersarang",
          },
          description: {
            en: "Define a structure within another structure",
            id: "Mendefinisikan struktur di dalam struktur lain",
          },
          example: `struct Address {\n    char street[100];\n    char city[50];\n    char country[50];\n};\n\nstruct Employee {\n    char name[50];\n    int id;\n    struct Address address;\n};`,
          output: "// No output (structure definition)",
          explanation: {
            en: "This example shows a nested structure where 'Address' is defined first, and then used within the 'Employee' structure. This allows for more complex data organization. An Employee now has a name, an ID, and a complete address (which itself contains street, city, and country). This demonstrates how structures can be used to create more sophisticated data representations.",
            id: "Contoh ini menunjukkan struktur bersarang di mana 'Address' didefinisikan terlebih dahulu, dan kemudian digunakan dalam struktur 'Employee'. Ini memungkinkan organisasi data yang lebih kompleks. Seorang Karyawan sekarang memiliki nama, ID, dan alamat lengkap (yang sendiri berisi jalan, kota, dan negara). Ini menunjukkan bagaimana struktur dapat digunakan untuk membuat representasi data yang lebih canggih.",
          },
        },
      ],
    }),
  ];

  const fileIO: MultipleItem[] = [
    createCourseItems.createMultipleItem({
      type: "File Operations",
      examples: [
        {
          name: {
            en: "Opening a File",
            id: "Membuka File",
          },
          description: {
            en: "Open a file for reading or writing",
            id: "Membuka file untuk dibaca atau ditulis",
          },
          example: `FILE *file = fopen("example.txt", "r");\nif (file == NULL) {\n    printf("Error opening file\\n");\n    return 1;\n}`,
          output: "// No output if file opens successfully",
          explanation: {
            en: "This example demonstrates how to open a file in C. The fopen() function is used with the filename and mode ('r' for read). It's crucial to check if the file was opened successfully by comparing the returned pointer to NULL. This error checking helps prevent issues when trying to use a file that couldn't be opened.",
            id: "Contoh ini menunjukkan cara membuka file di C. Fungsi fopen() digunakan dengan nama file dan mode ('r' untuk membaca). Penting untuk memeriksa apakah file berhasil dibuka dengan membandingkan pointer yang dikembalikan dengan NULL. Pemeriksaan kesalahan ini membantu mencegah masalah saat mencoba menggunakan file yang tidak dapat dibuka.",
          },
        },
        {
          name: {
            en: "Writing to a File",
            id: "Menulis ke File",
          },
          description: {
            en: "Write data to a file",
            id: "Menulis data ke file",
          },
          example: `FILE *file = fopen("example.txt", "w");\nif (file != NULL) {\n    fprintf(file, "Hello, World!\\n");\n    fclose(file);\n}`,
          output: "// No console output (writes to file)",
          explanation: {
            en: "This example shows how to write to a file. After opening the file in write mode ('w'), fprintf() is used to write a string to the file. Note the importance of closing the file with fclose() after writing. This ensures that all data is properly saved and system resources are released.",
            id: "Contoh ini menunjukkan cara menulis ke file. Setelah membuka file dalam mode tulis ('w'), fprintf() digunakan untuk menulis string ke file. Perhatikan pentingnya menutup file dengan fclose() setelah menulis. Ini memastikan bahwa semua data disimpan dengan benar dan sumber daya sistem dilepaskan.",
          },
        },
        {
          name: {
            en: "Reading from a File",
            id: "Membaca dari File",
          },
          description: {
            en: "Read data from a file",
            id: "Membaca data dari file",
          },
          example: `FILE *file = fopen("example.txt", "r");\nif (file != NULL) {\n    char buffer[100];\n    while (fgets(buffer, sizeof(buffer), file) != NULL) {\n        printf("%s", buffer);\n    }\n    fclose(file);\n}`,
          output: "// Outputs file contents to console",
          explanation: {
            en: "This example demonstrates reading from a file. After opening the file in read mode, it uses a while loop with fgets() to read the file line by line into a buffer. Each line is then printed to the console. The loop continues until fgets() returns NULL, indicating the end of the file. Again, the file is closed after reading.",
            id: "Contoh ini menunjukkan cara membaca dari file. Setelah membuka file dalam mode baca, ia menggunakan loop while dengan fgets() untuk membaca file baris demi baris ke dalam buffer. Setiap baris kemudian dicetak ke konsol. Loop berlanjut sampai fgets() mengembalikan NULL, menandakan akhir file. Sekali lagi, file ditutup setelah membaca.",
          },
        },
      ],
    }),
  ];

  const preprocessorDirectives: MultipleItem[] = [
    createCourseItems.createMultipleItem({
      type: "Preprocessor Directives",
      examples: [
        {
          name: {
            en: "Include Directive",
            id: "Direktif Include",
          },
          description: {
            en: "Include a header file",
            id: "Menyertakan file header",
          },
          example: `#include <stdio.h>\n#include "myheader.h"`,
          output: "// No output (preprocessor directive)",
          explanation: {
            en: 'The #include directive is used to include header files in your C program. <stdio.h> is a standard library header, included using angle brackets. "myheader.h" is a user-defined header, included using quotes. This directive tells the preprocessor to insert the contents of the specified file at the location of the #include statement.',
            id: 'Direktif #include digunakan untuk menyertakan file header dalam program C Anda. <stdio.h> adalah header pustaka standar, disertakan menggunakan tanda kurung sudut. "myheader.h" adalah header yang didefinisikan pengguna, disertakan menggunakan tanda kutip. Direktif ini memberi tahu preprosesor untuk menyisipkan isi file yang ditentukan di lokasi pernyataan #include.',
          },
        },
        {
          name: {
            en: "Define Directive",
            id: "Direktif Define",
          },
          description: {
            en: "Define a macro",
            id: "Mendefinisikan makro",
          },
          example: `#define PI 3.14159\n#define SQUARE(x) ((x) * (x))`,
          output: "// No output (preprocessor directive)",
          explanation: {
            en: "The #define directive is used to create macros. PI is defined as a constant value. SQUARE(x) is defined as a function-like macro that squares its argument. These macros are processed by the preprocessor before compilation, replacing all occurrences in the code with their defined values or expressions.",
            id: "Direktif #define digunakan untuk membuat makro. PI didefinisikan sebagai nilai konstan. SQUARE(x) didefinisikan sebagai makro seperti fungsi yang mengkuadratkan argumennya. Makro-makro ini diproses oleh preprosesor sebelum kompilasi, menggantikan semua kemunculan dalam kode dengan nilai atau ekspresi yang didefinisikan.",
          },
        },
        {
          name: {
            en: "Conditional Compilation",
            id: "Kompilasi Bersyarat",
          },
          description: {
            en: "Conditionally compile code",
            id: "Mengompilasi kode secara bersyarat",
          },
          example: `#ifdef DEBUG\n    printf("Debug mode is on\\n");\n#endif\n\n#if PLATFORM == WINDOWS\n    // Windows-specific code\n#elif PLATFORM == LINUX\n    // Linux-specific code\n#else\n    // Default code\n#endif`,
          output: "// Output depends on defined macros and conditions",
          explanation: {
            en: "Conditional compilation directives allow parts of the code to be included or excluded based on certain conditions. #ifdef checks if a macro is defined. #if, #elif, and #else work similarly to regular if-else statements, but at the preprocessor level. This is useful for creating platform-specific code or including debug statements only when needed.",
            id: "Direktif kompilasi bersyarat memungkinkan bagian-bagian kode untuk disertakan atau dikecualikan berdasarkan kondisi tertentu. #ifdef memeriksa apakah makro didefinisikan. #if, #elif, dan #else bekerja mirip dengan pernyataan if-else biasa, tetapi pada tingkat preprosesor. Ini berguna untuk membuat kode khusus platform atau menyertakan pernyataan debug hanya saat diperlukan.",
          },
        },
      ],
    }),
  ];

  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: t("title") }}
      courses={Courses(locale)}
      currentCourseLink="/courses/c/advanced"
      translations={"Component.Courses.C.Advanced"}
      topics={topics}
      whyIsItMatter={{
        translations: "Component.Courses.C.Advanced.whyAdvancedPointersMatter",
        id: "why-advanced-pointers-matter",
      }}
    >
      <Multiple
        title={t("topics.structures.title")}
        id="structures"
        delay={0.8}
        icon={PiTreeStructure}
        language="c"
        items={structures}
      />

      <Multiple
        title={t("topics.fileIO.title")}
        id="file-io"
        delay={1.0}
        icon={RiFileTextLine}
        language="c"
        items={fileIO}
      />

      <Multiple
        title={t("topics.preprocessorDirectives.title")}
        id="preprocessor-directives"
        delay={1.2}
        icon={TbCpu}
        language="c"
        items={preprocessorDirectives}
      />
    </CourseContainer>
  );
}
