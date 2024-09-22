"use client";

import {
  FaCode,
  FaCube,
  FaLightbulb,
  FaRocket,
  FaTerminal,
} from "react-icons/fa";

import {
  Single,
  type SingleItemProps,
} from "@components/courses/template/single";
import CourseContainer from "@components/courses/container";
import Courses from "@components/courses/c/navigation";
import {
  InputOutput,
  InputOutputType,
} from "@components/courses/template/input";
import {
  Variables,
  type VariableItem,
} from "@components/courses/template/variable";
import {
  DataTypes,
  type DataTypeCategory,
} from "@components/courses/template/types";
import CreateCourseItems from "@components/courses/create";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@default/i18n/config";

export default function CBasics() {
  const t = useTranslations("Component.Courses.C.Basics");
  const locale = useLocale() as Locale;
  const createCourseItems = new CreateCourseItems({ language: locale });

  const topics = [
    {
      title: t("topics.basicPrinting.title"),
      description: t("topics.basicPrinting.description"),
      id: "basic-printing",
      icon: FaCode,
    },
    {
      title: t("topics.variables.title"),
      description: t("topics.variables.description"),
      id: "variables",
      icon: FaLightbulb,
    },
    {
      title: t("topics.dataTypes.title"),
      description: t("topics.dataTypes.description"),
      id: "data-types",
      icon: FaRocket,
    },
    {
      title: t("topics.inputOutput.title"),
      description: t("topics.inputOutput.description"),
      id: "input-output",
      icon: FaTerminal,
    },
  ];

  const dataTypes: DataTypeCategory[] = [
    {
      type: "Basic",
      examples: [
        createCourseItems.createDataTypeItem({
          title: { en: "Integer", id: "Bilangan Bulat" },
          description: {
            en: "Used for whole numbers without decimal points.",
            id: "Digunakan untuk bilangan bulat tanpa titik desimal.",
          },
          example: `int age = 25;\nint count = -10;\nprintf("Age: %d, Count: %d\\n", age, count);`,
          formatSpecifier: "%d or %i",
          dataType: "int",
          range: "-2147483648 to 2147483647",
          size: "4 bytes",
          explanation: {
            en: "Integers are ideal for counting, indexing, or representing discrete quantities. Use them when you need whole numbers and don't require decimal precision, such as for ages, counts, or array indices.",
            id: "Bilangan bulat ideal untuk menghitung, mengindeks, atau merepresentasikan kuantitas diskrit. Gunakan ketika Anda membutuhkan bilangan bulat dan tidak memerlukan presisi desimal, seperti untuk usia, hitungan, atau indeks array.",
          },
          bestUseCase: {
            en: "Best used for loop counters, array indices, or any whole number calculations where fractional parts are not needed.",
            id: "Paling baik digunakan untuk penghitung loop, indeks array, atau perhitungan bilangan bulat apa pun di mana bagian pecahan tidak diperlukan.",
          },
          output: "Age: 25, Count: -10",
        }),
        createCourseItems.createDataTypeItem({
          title: { en: "Float", id: "Bilangan Pecahan" },
          description: {
            en: "Used for numbers with decimal points (single precision).",
            id: "Digunakan untuk angka dengan titik desimal (presisi tunggal).",
          },
          example: `float price = 9.99f;\nfloat temperature = -2.5f;\nprintf("Price: %.2f, Temperature: %.1f\\n", price, temperature);`,
          formatSpecifier: "%f",
          dataType: "float",
          range: "1.2E-38 to 3.4E+38",
          size: "4 bytes",
          explanation: {
            en: "Floats are used for representing real numbers with decimal points. They offer a good balance between precision and memory usage.",
            id: "Float digunakan untuk merepresentasikan bilangan real dengan titik desimal. Mereka menawarkan keseimbangan yang baik antara presisi dan penggunaan memori.",
          },
          bestUseCase: {
            en: "Ideal for scientific calculations, graphics, or any situation where you need decimal precision but don't require the extended precision of a double.",
            id: "Ideal untuk perhitungan ilmiah, grafik, atau situasi apa pun di mana Anda membutuhkan presisi desimal tetapi tidak memerlukan presisi yang diperluas dari double.",
          },
          output: "Price: 9.99, Temperature: -2.5",
        }),
        createCourseItems.createDataTypeItem({
          title: { en: "Character", id: "Karakter" },
          description: {
            en: "Used for single characters.",
            id: "Digunakan untuk karakter tunggal.",
          },
          example: `char grade = 'A';\nchar symbol = '*';\nprintf("Grade: %c, Symbol: %c\\n", grade, symbol);`,
          formatSpecifier: "%c",
          dataType: "char",
          range: "-128 to 127",
          size: "1 byte",
          explanation: {
            en: "Characters in C are actually small integers, each representing a single ASCII character. They're useful for storing individual letters, digits, or symbols.",
            id: "Karakter dalam C sebenarnya adalah bilangan bulat kecil, masing-masing mewakili satu karakter ASCII. Mereka berguna untuk menyimpan huruf, angka, atau simbol individual.",
          },
          bestUseCase: {
            en: "Best used when working with individual characters, such as processing text one character at a time, or when memory efficiency is crucial and you only need to store single characters.",
            id: "Paling baik digunakan saat bekerja dengan karakter individual, seperti memproses teks satu karakter pada satu waktu, atau ketika efisiensi memori sangat penting dan Anda hanya perlu menyimpan karakter tunggal.",
          },
          output: "Grade: A, Symbol: *",
        }),
      ],
    },
  ];

  const variables: VariableItem[] = [
    createCourseItems.createVariableItem({
      title: { en: "Creating Variables", id: "Membuat Variabel" },
      description: {
        en: "To create a variable in C, you need to specify its data type and give it a name.",
        id: "Untuk membuat variabel di C, Anda perlu menentukan tipe datanya dan memberinya nama.",
      },
      steps: [
        {
          en: "Choose a data type (e.g., int, float, char)",
          id: "Pilih tipe data (misalnya, int, float, char)",
        },
        {
          en: "Decide on a descriptive variable name",
          id: "Tentukan nama variabel yang deskriptif",
        },
        {
          en: "Declare the variable using the syntax: dataType variableName;",
          id: "Deklarasikan variabel menggunakan sintaks: tipeData NamaVariabel;",
        },
        {
          en: "Optionally, initialize the variable with a value",
          id: "Opsional, inisialisasi variabel dengan nilai",
        },
      ],
      example: `int age;           // Declaration\nint score = 100;    // Declaration with initialization\nfloat price = 9.99; // Float variable\nchar grade = 'A';   // Character variable`,
      wrongExample: `int a;           // Poor variable name\nfloat 2ndPrice = 19.99; // Invalid: starts with a number\nchar longVariableName123456789 = 'X'; // Excessively long name\nint temp = 98.6;    // Wrong data type for temperature`,
      tips: [
        {
          en: "Use meaningful variable names",
          id: "Gunakan nama variabel yang bermakna",
        },
        {
          en: "Follow C naming conventions (start with a letter or underscore, use only letters, numbers, and underscores)",
          id: "Ikuti konvensi penamaan C (mulai dengan huruf atau garis bawah, gunakan hanya huruf, angka, dan garis bawah)",
        },
        {
          en: "Initialize variables when possible to avoid using uninitialized values",
          id: "Inisialisasi variabel jika memungkinkan untuk menghindari penggunaan nilai yang tidak diinisialisasi",
        },
        {
          en: "Avoid using reserved keywords as variable names",
          id: "Hindari menggunakan kata kunci yang sudah dipesan sebagai nama variabel",
        },
      ],
      syntax: {
        en: "[DATA_TYPE] [VARIABLE_NAME] = [VALUE]",
        id: "[TIPE_DATA] [NAMA_VARIABEL] = [NILAI]",
      },
      explanation: {
        en: "Variables are essential for storing and manipulating data in your programs. They act as containers that hold values which can be changed during program execution. However, it's crucial to create variables correctly and follow best practices to ensure code readability and prevent errors.",
        id: "Variabel sangat penting untuk menyimpan dan memanipulasi data dalam program Anda. Mereka bertindak sebagai wadah yang menyimpan nilai yang dapat diubah selama eksekusi program. Namun, penting untuk membuat variabel dengan benar dan mengikuti praktik terbaik untuk memastikan keterbacaan kode dan mencegah kesalahan.",
      },
      wrongExplanation: {
        en: "In the wrong examples, 'a' is a poor variable name as it's not descriptive. '2ndPrice' is invalid because variable names can't start with numbers. 'longVariableName123456789' is excessively long, making the code hard to read. Using 'int' for a temperature (98.6) is incorrect as it would truncate the decimal part.",
        id: "Dalam contoh yang salah, 'a' adalah nama variabel yang buruk karena tidak deskriptif. '2ndPrice' tidak valid karena nama variabel tidak boleh dimulai dengan angka. 'longVariableName123456789' terlalu panjang, membuat kode sulit dibaca. Menggunakan 'int' untuk suhu (98.6) tidak tepat karena akan memotong bagian desimalnya.",
      },
    }),
  ];

  const inputOutputExamples: InputOutputType[] = [
    createCourseItems.createInputOutputItem({
      type: "Input",
      examples: [
        {
          function: "scanf()",
          description: {
            en: "Used to read formatted input from the standard input stream",
            id: "Digunakan untuk membaca input terformat dari aliran input standar",
          },
          example: `int age;\nprintf("Enter your age: ");\nscanf("%d", &age);`,
          formatSpecifier: "%d",
          safetyNote:
            "Always check the return value of scanf() to ensure successful input.",
          explanation: {
            en: "scanf() is a powerful function for reading formatted input. It allows you to read various data types directly into variables.",
            id: "scanf() adalah fungsi yang kuat untuk membaca input terformat. Ini memungkinkan Anda membaca berbagai tipe data langsung ke dalam variabel.",
          },
          bestUseCase: {
            en: "Best used when you need to read specific data types from user input, especially for simple programs or when performance is a priority. However, be cautious with string inputs due to potential buffer overflow issues.",
            id: "Paling baik digunakan ketika Anda perlu membaca tipe data tertentu dari input pengguna, terutama untuk program sederhana atau ketika kinerja adalah prioritas. Namun, berhati-hatilah dengan input string karena potensi masalah buffer overflow.",
          },
        },
        {
          function: "fgets()",
          description: {
            en: "Safely reads a line of text from stdin, including spaces",
            id: "Membaca baris teks dari stdin dengan aman, termasuk spasi",
          },
          example: `char name[50];\nprintf("Enter your name: ");\nfgets(name, sizeof(name), stdin);`,
          safetyNote:
            "Preferred for string input as it prevents buffer overflow.",
          explanation: {
            en: "fgets() is a safer alternative to gets() for reading string input. It allows you to specify a maximum number of characters to read, preventing buffer overflows.",
            id: "fgets() adalah alternatif yang lebih aman daripada gets() untuk membaca input string. Ini memungkinkan Anda menentukan jumlah maksimum karakter yang akan dibaca, mencegah buffer overflow.",
          },
          bestUseCase: {
            en: "Ideal for reading string input, especially when you need to include spaces or when security is a concern. It's the preferred method for reading lines of text in modern C programming.",
            id: "Ideal untuk membaca input string, terutama ketika Anda perlu menyertakan spasi atau ketika keamanan menjadi perhatian. Ini adalah metode yang disukai untuk membaca baris teks dalam pemrograman C modern.",
          },
        },
        {
          function: "gets()",
          description: {
            en: "Reads a line from stdin into a buffer until a newline is found",
            id: "Membaca baris dari stdin ke dalam buffer sampai ditemukan baris baru",
          },
          example: `char input[100];\nprintf("Enter some text: ");\ngets(input);`,
          safetyNote:
            "Deprecated and unsafe. Use fgets() instead as gets() can cause buffer overflow.",
          explanation: {
            en: "gets() is an older function for reading string input. It's simple to use but doesn't provide any way to limit the input size, making it vulnerable to buffer overflows.",
            id: "gets() adalah fungsi lama untuk membaca input string. Ini sederhana untuk digunakan tetapi tidak menyediakan cara untuk membatasi ukuran input, membuatnya rentan terhadap buffer overflow.",
          },
          bestUseCase: {
            en: "Not recommended for use in any new code due to security vulnerabilities. Always prefer fgets() or other safer alternatives for string input.",
            id: "Tidak direkomendasikan untuk digunakan dalam kode baru karena kerentanan keamanan. Selalu lebih baik menggunakan fgets() atau alternatif yang lebih aman lainnya untuk input string.",
          },
        },
      ],
    }),
    createCourseItems.createInputOutputItem({
      type: "Output",
      examples: [
        {
          function: "printf()",
          description: {
            en: "Used to print formatted output to the standard output stream",
            id: "Digunakan untuk mencetak output terformat ke aliran output standar",
          },
          example: `int num = 42;\nprintf("The answer is: %d\\n", num);`,
          formatSpecifier: "%d, %f, %c, %s",
          tip: "Use \\n for newline in printf() for better formatting.",
          explanation: {
            en: "printf() is a versatile function for formatted output. It allows you to combine text and variable values in a single output statement, with fine control over the formatting.",
            id: "printf() adalah fungsi serbaguna untuk output terformat. Ini memungkinkan Anda menggabungkan teks dan nilai variabel dalam satu pernyataan output, dengan kontrol yang baik atas pemformatan.",
          },
          bestUseCase: {
            en: "Ideal for most output needs, especially when you need to format the output or combine text with variable values. It's the go-to function for complex or formatted output in C.",
            id: "Ideal untuk sebagian besar kebutuhan output, terutama ketika Anda perlu memformat output atau menggabungkan teks dengan nilai variabel. Ini adalah fungsi utama untuk output kompleks atau terformat dalam C.",
          },
        },
        {
          function: "puts()",
          description: {
            en: "Outputs a string followed by a newline to stdout",
            id: "Mengeluarkan string diikuti oleh baris baru ke stdout",
          },
          example: `char *message = "Hello, World!";\nputs(message);`,
          tip: "Simpler than printf() for outputting whole strings.",
          explanation: {
            en: "puts() is a simpler alternative to printf() when you just need to output a string. It automatically adds a newline at the end of the output.",
            id: "puts() adalah alternatif yang lebih sederhana daripada printf() ketika Anda hanya perlu mengeluarkan string. Ini secara otomatis menambahkan baris baru di akhir output.",
          },
          bestUseCase: {
            en: "Best used when you need to output a simple string without any formatting. It's more concise than printf() for this specific use case and can be slightly more efficient.",
            id: "Paling baik digunakan ketika Anda perlu mengeluarkan string sederhana tanpa pemformatan. Ini lebih ringkas daripada printf() untuk kasus penggunaan spesifik ini dan bisa sedikit lebih efisien.",
          },
        },
      ],
    }),
  ];

  const basicPrinting: SingleItemProps[] = [
    createCourseItems.createSingleItem({
      title: { en: "Basic Printing", id: "Pencetakan Dasar" },
      description: {
        en: "Learn how to display text in C programs",
        id: "Pelajari cara menampilkan teks dalam program C",
      },
      explanation: {
        en: "The printf() function is a powerful tool for outputting formatted text. It's part of the stdio.h library and allows for precise control over what's displayed. The '\\n' escape sequence adds a newline, ensuring the next output starts on a fresh line.",
        id: "Fungsi printf() adalah alat yang kuat untuk mengeluarkan teks terformat. Ini adalah bagian dari pustaka stdio.h dan memungkinkan kontrol yang tepat atas apa yang ditampilkan. Urutan escape '\\n' menambahkan baris baru, memastikan output berikutnya dimulai pada baris baru.",
      },
      example: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    printf("C programming is powerful!\\n");\n    return 0;\n}`,
      output: `Hello, World!\nC programming is powerful!`,
      bestUseCase: {
        en: "Use printf() for most of your output needs, especially when you need to format the output or combine text with variable values. It's versatile and allows for complex formatting.",
        id: "Gunakan printf() untuk sebagian besar kebutuhan output Anda, terutama ketika Anda perlu memformat output atau menggabungkan teks dengan nilai variabel. Ini serbaguna dan memungkinkan pemformatan yang kompleks.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Format Specifiers", id: "Penentu Format" },
      description: {
        en: "Explore how to integrate variables into your output seamlessly",
        id: "Jelajahi cara mengintegrasikan variabel ke dalam output Anda dengan mulus",
      },
      explanation: {
        en: "Format specifiers act as placeholders for variable values in printf() statements. The %d specifier is used for integers, but C offers a wide range of specifiers for different data types. This allows for flexible and dynamic output formatting.",
        id: "Penentu format bertindak sebagai placeholder untuk nilai variabel dalam pernyataan printf(). Penentu %d digunakan untuk bilangan bulat, tetapi C menawarkan berbagai penentu untuk tipe data yang berbeda. Ini memungkinkan pemformatan output yang fleksibel dan dinamis.",
      },
      example: `#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float height = 1.75;\n    char grade = 'A';\n    printf("Age: %d years\\n", age);\n    printf("Height: %.2f meters\\n", height);\n    printf("Grade: %c\\n", grade);\n    return 0;\n}`,
      output: `Age: 25 years\nHeight: 1.75 meters\nGrade: A`,
      bestUseCase: {
        en: "Format specifiers are crucial when you need to output variable values alongside text. They're particularly useful for creating readable, formatted output that includes different data types.",
        id: "Penentu format sangat penting ketika Anda perlu mengeluarkan nilai variabel bersama dengan teks. Mereka sangat berguna untuk membuat output yang dapat dibaca dan diformat yang mencakup berbagai tipe data.",
      },
    }),
  ];

  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: t("title") }}
      courses={Courses(locale)}
      currentCourseLink="/courses/c/basics"
      translations={t}
      topics={topics}
      whyIsItMatter={{
        translations: "whyBasicsMatter",
        id: "why-basics-matter",
      }}
    >
      <Single
        title={t("topics.basicPrinting.title")}
        id="basic-printing"
        delay={0.8}
        components={basicPrinting}
        language="c"
        icon={FaTerminal}
      />

      <Variables
        id="variables"
        delay={1.0}
        title={t("topics.variables.title")}
        icon={FaLightbulb}
        variables={variables}
      />

      <DataTypes
        id="data-types"
        delay={1.0}
        title={t("topics.dataTypes.title")}
        icon={FaCube}
        language="c"
        content={dataTypes}
      />

      <InputOutput
        id="input-output"
        delay={1.0}
        title={t("topics.inputOutput.title")}
        icon={FaTerminal}
        inputOutputExamples={inputOutputExamples}
      />
    </CourseContainer>
  );
}
