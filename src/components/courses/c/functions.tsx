"use client";

import { FaCode, FaExchangeAlt, FaLightbulb, FaRocket } from "react-icons/fa";

import Courses from "@components/courses/c/navigation";
import CourseContainer from "@components/courses/container";
import {
  Single,
  type SingleItemProps,
} from "@components/courses/template/single";
import CreateCourseItems from "@components/courses/create";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@default/i18n/config";

export default function CFunctions() {
  const t = useTranslations("Component.Courses.C.Functions");
  const locale = useLocale() as Locale;
  const createCourseItems = new CreateCourseItems({ language: locale });

  const topics = [
    {
      title: t("topics.functionBasics.title"),
      description: t("topics.functionBasics.description"),
      id: "function-basics",
      icon: FaCode,
    },
    {
      title: t("topics.functionParameters.title"),
      description: t("topics.functionParameters.description"),
      id: "function-parameters",
      icon: FaExchangeAlt,
    },
    {
      title: t("topics.returnValues.title"),
      description: t("topics.returnValues.description"),
      id: "return-values",
      icon: FaRocket,
    },
    {
      title: t("topics.functionPrototypes.title"),
      description: t("topics.functionPrototypes.description"),
      id: "function-prototypes",
      icon: FaLightbulb,
    },
  ];

  const functionExamples: SingleItemProps[] = [
    createCourseItems.createSingleItem({
      title: {
        en: "Function Definition",
        id: "Definisi Fungsi",
      },
      description: {
        en: "A function definition in C provides the complete implementation of the function, including its body. This is where you specify the actual behavior of the function.",
        id: "Definisi fungsi dalam C memberikan implementasi lengkap dari fungsi, termasuk tubuhnya. Di sinilah Anda menentukan perilaku sebenarnya dari fungsi.",
      },
      example: `int add(int a, int b) {\n  return a + b;\n}`,
      explanation: {
        en: "Use function definitions in .c source files when you're ready to implement the function's behavior. This is where you write the code that will be executed when the function is called.",
        id: "Gunakan definisi fungsi dalam file sumber .c ketika Anda siap untuk mengimplementasikan perilaku fungsi. Di sinilah Anda menulis kode yang akan dieksekusi ketika fungsi dipanggil.",
      },
      output: "No direct output. This is just a function definition.",
      bestUseCase: {
        en: "Use function definitions when implementing the actual behavior of functions in your C program.",
        id: "Gunakan definisi fungsi ketika mengimplementasikan perilaku sebenarnya dari fungsi dalam program C Anda.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Function Call", id: "Pemanggilan Fungsi" },
      description: {
        en: "A function call in C executes the function's code with the provided arguments. It may return a value that can be used in expressions or assigned to variables.",
        id: "Pemanggilan fungsi dalam C mengeksekusi kode fungsi dengan argumen yang diberikan. Ini mungkin mengembalikan nilai yang dapat digunakan dalam ekspresi atau ditetapkan ke variabel.",
      },
      example: `int result = add(5, 3);\nprintf("Sum: %d", result);`,
      explanation: {
        en: "Use function calls whenever you need to execute the function's code. This allows for code reuse and helps in breaking down complex problems into smaller, manageable parts.",
        id: "Gunakan pemanggilan fungsi setiap kali Anda perlu mengeksekusi kode fungsi. Ini memungkinkan penggunaan kembali kode dan membantu dalam memecah masalah kompleks menjadi bagian-bagian yang lebih kecil dan dapat dikelola.",
      },
      output: "Sum: 8",
      bestUseCase: {
        en: "Use function calls when you need to execute a specific function's code and potentially use its return value.",
        id: "Gunakan pemanggilan fungsi ketika Anda perlu mengeksekusi kode fungsi tertentu dan berpotensi menggunakan nilai kembaliannya.",
      },
    }),
  ];

  const parameterExamples: SingleItemProps[] = [
    createCourseItems.createSingleItem({
      title: {
        en: "Pass by Value",
        id: "Lewat Nilai",
      },
      description: {
        en: "In C, passing arguments by value creates a copy of the argument within the function. Any modifications to the parameter inside the function do not affect the original variable in the calling code.",
        id: "Dalam C, melewatkan argumen dengan nilai membuat salinan argumen dalam fungsi. Setiap modifikasi pada parameter di dalam fungsi tidak mempengaruhi variabel asli dalam kode pemanggil.",
      },
      example: `void increment(int x) {\n  x++;\n}\n\nint main() {\n  int num = 5;\n  increment(num);\n  printf("%d", num); // Output: 5\n}`,
      explanation: {
        en: "Use pass by value when you want to work with a copy of the data and ensure that the original value remains unchanged. This is the default behavior for most data types in C and is useful for maintaining data integrity.",
        id: "Gunakan lewat nilai ketika Anda ingin bekerja dengan salinan data dan memastikan bahwa nilai asli tetap tidak berubah. Ini adalah perilaku default untuk sebagian besar tipe data dalam C dan berguna untuk menjaga integritas data.",
      },
      output: "5",
      bestUseCase: {
        en: "Use pass by value when you want to work with a copy of the data and ensure that the original value remains unchanged.",
        id: "Gunakan lewat nilai ketika Anda ingin bekerja dengan salinan data dan memastikan bahwa nilai asli tetap tidak berubah.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Pass by Reference",
        id: "Lewat Referensi",
      },
      description: {
        en: "Passing arguments by reference in C involves using pointers. This method allows the function to directly access and modify the original variable's memory location.",
        id: "Melewatkan argumen dengan referensi dalam C melibatkan penggunaan pointer. Metode ini memungkinkan fungsi untuk langsung mengakses dan memodifikasi lokasi memori variabel asli.",
      },
      example: `void increment(int *x) {\n  (*x)++;\n}\n\nint main() {\n  int num = 5;\n  increment(&num);\n  printf("%d", num); // Output: 6\n}`,
      explanation: {
        en: "Use pass by reference when you need to modify the original variable inside the function or when dealing with large data structures to avoid the overhead of copying. It's also useful for returning multiple values from a function.",
        id: "Gunakan lewat referensi ketika Anda perlu memodifikasi variabel asli di dalam fungsi atau ketika berurusan dengan struktur data besar untuk menghindari overhead penyalinan. Ini juga berguna untuk mengembalikan beberapa nilai dari fungsi.",
      },
      output: "6",
      bestUseCase: {
        en: "Use pass by reference when you need to modify the original variable or work with large data structures efficiently.",
        id: "Gunakan lewat referensi ketika Anda perlu memodifikasi variabel asli atau bekerja dengan struktur data besar secara efisien.",
      },
    }),
  ];

  const returnValueExamples: SingleItemProps[] = [
    createCourseItems.createSingleItem({
      title: {
        en: "Returning a Value",
        id: "Mengembalikan Nilai",
      },
      description: {
        en: "Functions in C can return a single value of any data type. The returned value can be used in expressions, assigned to variables, or passed as an argument to other functions.",
        id: "Fungsi dalam C dapat mengembalikan satu nilai dari tipe data apa pun. Nilai yang dikembalikan dapat digunakan dalam ekspresi, ditetapkan ke variabel, atau dilewatkan sebagai argumen ke fungsi lain.",
      },
      example: `int square(int x) {\n  return x * x;\n}\n\nint result = square(5);\nprintf("%d", result); // Output: 25`,
      explanation: {
        en: "Use return values when your function needs to compute and provide a result back to the calling code. This is essential for functions that perform calculations, data processing, or any task that produces a specific output.",
        id: "Gunakan nilai kembali ketika fungsi Anda perlu menghitung dan memberikan hasil kembali ke kode pemanggil. Ini penting untuk fungsi yang melakukan perhitungan, pemrosesan data, atau tugas apa pun yang menghasilkan output tertentu.",
      },
      output: "25",
      bestUseCase: {
        en: "Use return values when your function needs to compute and provide a result back to the calling code.",
        id: "Gunakan nilai kembali ketika fungsi Anda perlu menghitung dan memberikan hasil kembali ke kode pemanggil.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Void Function",
        id: "Fungsi Void",
      },
      description: {
        en: "Functions declared with the 'void' return type in C do not return a value. They are typically used for their side effects, such as modifying global variables, printing output, or performing I/O operations.",
        id: "Fungsi yang dideklarasikan dengan tipe pengembalian 'void' dalam C tidak mengembalikan nilai. Mereka biasanya digunakan untuk efek sampingnya, seperti memodifikasi variabel global, mencetak output, atau melakukan operasi I/O.",
      },
      example: `void greet(char *name) {\n  printf("Hello, %s!", name);\n}\n\ngreet("Alice"); // Output: Hello, Alice!`,
      explanation: {
        en: "Use void functions when your function doesn't need to return a value but instead performs some action or modifies state. This is common for functions that handle output, modify global data, or carry out specific tasks without producing a direct result.",
        id: "Gunakan fungsi void ketika fungsi Anda tidak perlu mengembalikan nilai tetapi sebaliknya melakukan beberapa tindakan atau memodifikasi keadaan. Ini umum untuk fungsi yang menangani output, memodifikasi data global, atau melakukan tugas tertentu tanpa menghasilkan hasil langsung.",
      },
      output: "Hello, Alice!",
      bestUseCase: {
        en: "Use void functions when your function doesn't need to return a value but instead performs some action or modifies state.",
        id: "Gunakan fungsi void ketika fungsi Anda tidak perlu mengembalikan nilai tetapi sebaliknya melakukan beberapa tindakan atau memodifikasi keadaan.",
      },
    }),
  ];

  const prototypeExamples: SingleItemProps[] = [
    createCourseItems.createSingleItem({
      title: {
        en: "Function Declaration vs Definition vs Prototype",
        id: "Deklarasi Fungsi vs Definisi vs Prototipe",
      },
      description: {
        en: "In C, there are three related but distinct concepts: function declaration, function definition, and function prototype. Understanding their differences is crucial for effective C programming.",
        id: "Dalam C, ada tiga konsep yang terkait tetapi berbeda: deklarasi fungsi, definisi fungsi, dan prototipe fungsi. Memahami perbedaan mereka sangat penting untuk pemrograman C yang efektif.",
      },
      example: `// Function declaration (also serves as a prototype)\nint add(int a, int b);\n\n// Function definition\nint add(int a, int b) {\n  return a + b;\n}\n\nint main() {\n  int result = add(5, 3);\n  printf("%d", result);\n  return 0;\n}`,
      explanation: {
        en: "Use function declarations (prototypes) in header files or at the top of your source file to declare a function's interface. Use function definitions in .c files to implement the full behavior of the function.",
        id: "Gunakan deklarasi fungsi (prototipe) dalam file header atau di bagian atas file sumber Anda untuk mendeklarasikan antarmuka fungsi. Gunakan definisi fungsi dalam file .c untuk mengimplementasikan perilaku lengkap fungsi.",
      },
      output: "8",
      bestUseCase: {
        en: "Use function declarations (prototypes) in header files or at the top of your source file, and function definitions in .c files for implementation.",
        id: "Gunakan deklarasi fungsi (prototipe) dalam file header atau di bagian atas file sumber Anda, dan definisi fungsi dalam file .c untuk implementasi.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Function Declaration",
        id: "Deklarasi Fungsi",
      },
      description: {
        en: "A function declaration specifies the function's name, return type, and parameters without providing the function's body. It informs the compiler about the function's existence and interface.",
        id: "Deklarasi fungsi menentukan nama fungsi, tipe pengembalian, dan parameter tanpa menyediakan tubuh fungsi. Ini memberi tahu kompiler tentang keberadaan dan antarmuka fungsi.",
      },
      example: `// Function declaration\nint multiply(int x, int y);`,
      explanation: {
        en: "Use function declarations when you want to inform the compiler about a function's existence without providing its implementation. This is often done in header files.",
        id: "Gunakan deklarasi fungsi ketika Anda ingin memberi tahu kompiler tentang keberadaan fungsi tanpa menyediakan implementasinya. Ini sering dilakukan dalam file header.",
      },
      output: "No direct output. This is just a function declaration.",
      bestUseCase: {
        en: "Use function declarations in header files or at the top of source files to declare a function's interface without implementation.",
        id: "Gunakan deklarasi fungsi dalam file header atau di bagian atas file sumber untuk mendeklarasikan antarmuka fungsi tanpa implementasi.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Function Definition",
        id: "Definisi Fungsi",
      },
      description: {
        en: "A function definition includes both the function's declaration and its implementation (body). It specifies the actual code that executes when the function is called.",
        id: "Definisi fungsi mencakup baik deklarasi fungsi maupun implementasinya (tubuh). Ini menentukan kode sebenarnya yang dieksekusi ketika fungsi dipanggil.",
      },
      example: `// Function definition\nint multiply(int x, int y) {\n  return x * y;\n}`,
      explanation: {
        en: "Use function definitions in .c source files to implement the full behavior of the function. This is where you write the actual code that will be executed when the function is called.",
        id: "Gunakan definisi fungsi dalam file sumber .c untuk mengimplementasikan perilaku lengkap fungsi. Di sinilah Anda menulis kode sebenarnya yang akan dieksekusi ketika fungsi dipanggil.",
      },
      output: "No direct output. This is just a function definition.",
      bestUseCase: {
        en: "Use function definitions in .c source files to implement the full behavior of functions.",
        id: "Gunakan definisi fungsi dalam file sumber .c untuk mengimplementasikan perilaku lengkap fungsi.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Function Prototype",
        id: "Prototipe Fungsi",
      },
      description: {
        en: "A function prototype is a declaration of a function that includes its return type, name, and parameter types, typically ending with a semicolon. It's identical to a function declaration and is used for type checking and to allow calling the function before its full definition.",
        id: "Prototipe fungsi adalah deklarasi fungsi yang mencakup tipe pengembalian, nama, dan tipe parameter, biasanya diakhiri dengan titik koma. Ini identik dengan deklarasi fungsi dan digunakan untuk pemeriksaan tipe dan untuk memungkinkan pemanggilan fungsi sebelum definisi lengkapnya.",
      },
      example: `// Function prototype\nint divide(int numerator, int denominator);`,
      explanation: {
        en: "Use function prototypes when you need to declare a function before its full definition, especially in header files or at the top of your source file. This is crucial for larger projects and helps with code organization and compilation efficiency.",
        id: "Gunakan prototipe fungsi ketika Anda perlu mendeklarasikan fungsi sebelum definisi lengkapnya, terutama dalam file header atau di bagian atas file sumber Anda. Ini sangat penting untuk proyek yang lebih besar dan membantu dalam organisasi kode dan efisiensi kompilasi.",
      },
      output: "No direct output. This is just a function prototype.",
      bestUseCase: {
        en: "Use function prototypes to declare functions before their full definition, especially in header files or at the top of source files.",
        id: "Gunakan prototipe fungsi untuk mendeklarasikan fungsi sebelum definisi lengkapnya, terutama dalam file header atau di bagian atas file sumber.",
      },
    }),
  ];

  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: t("title") }}
      courses={Courses(locale)}
      currentCourseLink="/courses/c/functions"
      translations={"Component.Courses.C.Functions"}
      topics={topics}
      whyIsItMatter={{
        translations: "Component.Courses.C.Functions.whyFunctionsMatter",
        id: "why-functions-matter",
      }}
    >
      <Single
        title={t("topics.functionBasics.title")}
        id="function-basics"
        delay={0.8}
        components={functionExamples}
        language="c"
        icon={FaCode}
      />

      <Single
        title={t("topics.functionParameters.title")}
        id="function-parameters"
        delay={1.0}
        components={parameterExamples}
        language="c"
        icon={FaExchangeAlt}
      />

      <Single
        title={t("topics.returnValues.title")}
        id="return-values"
        delay={1.2}
        components={returnValueExamples}
        language="c"
        icon={FaRocket}
      />

      <Single
        title={t("topics.functionPrototypes.title")}
        id="function-prototypes"
        delay={1.4}
        components={prototypeExamples}
        language="c"
        icon={FaLightbulb}
      />
    </CourseContainer>
  );
}
