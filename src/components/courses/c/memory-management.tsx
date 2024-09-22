"use client";

import { FaLightbulb, FaMemory, FaRocket, FaShieldAlt } from "react-icons/fa";

import CourseContainer from "@components/courses/container";
import Courses from "@components/courses/c/navigation";
import {
  Multiple,
  type MultipleItem,
} from "@components/courses/template/multiple";
import CreateCourseItems from "@components/courses/create";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@default/i18n/config";

export default function CMemoryManagement() {
  const t = useTranslations("Component.Courses.C.MemoryManagement");
  const locale = useLocale() as Locale;
  const createCourseItems = new CreateCourseItems({ language: locale });

  const topics = [
    {
      title: t("topics.dynamicAllocation.title"),
      description: t("topics.dynamicAllocation.description"),
      id: "dynamic-allocation",
      icon: FaMemory,
    },
    {
      title: t("topics.memoryDeallocation.title"),
      description: t("topics.memoryDeallocation.description"),
      id: "memory-deallocation",
      icon: FaRocket,
    },
    {
      title: t("topics.memoryIssues.title"),
      description: t("topics.memoryIssues.description"),
      id: "memory-issues",
      icon: FaShieldAlt,
    },
    {
      title: t("topics.bestPractices.title"),
      description: t("topics.bestPractices.description"),
      id: "best-practices",
      icon: FaLightbulb,
    },
  ];

  const memoryAllocation: MultipleItem[] = [
    createCourseItems.createMultipleItem({
      type: "malloc()",
      examples: [
        {
          name: {
            en: "Allocating Memory with malloc()",
            id: "Mengalokasikan Memori dengan malloc()",
          },
          description: {
            en: "Allocates a block of uninitialized memory",
            id: "Mengalokasikan blok memori yang belum diinisialisasi",
          },
          example: `int *ptr = (int*) malloc(5 * sizeof(int));\nif (ptr == NULL) {\n    printf("Memory allocation failed\\n");\n    return 1;\n}\n// Use the allocated memory\nfor (int i = 0; i < 5; i++) {\n    ptr[i] = i + 1;\n}\n// Print the values\nfor (int i = 0; i < 5; i++) {\n    printf("%d ", ptr[i]);\n}\n// Don't forget to free the memory when done\nfree(ptr);`,
          output: "1 2 3 4 5",
          explanation: {
            en: "This example demonstrates the use of malloc() to allocate memory for 5 integers. We check if the allocation was successful, then use the memory to store and print values. Finally, we free the allocated memory to prevent leaks. malloc() is useful when you need a block of memory without initialization.",
            id: "Contoh ini menunjukkan penggunaan malloc() untuk mengalokasikan memori untuk 5 bilangan bulat. Kita memeriksa apakah alokasi berhasil, kemudian menggunakan memori untuk menyimpan dan mencetak nilai. Akhirnya, kita membebaskan memori yang dialokasikan untuk mencegah kebocoran. malloc() berguna ketika Anda membutuhkan blok memori tanpa inisialisasi.",
          },
        },
      ],
    }),
    createCourseItems.createMultipleItem({
      type: "calloc()",
      examples: [
        {
          name: {
            en: "Allocating and Initializing Memory with calloc()",
            id: "Mengalokasikan dan Menginisialisasi Memori dengan calloc()",
          },
          description: {
            en: "Allocates a block of memory and initializes it to zero",
            id: "Mengalokasikan blok memori dan menginisialisasinya ke nol",
          },
          example: `int *ptr = (int*) calloc(5, sizeof(int));\nif (ptr == NULL) {\n    printf("Memory allocation failed\\n");\n    return 1;\n}\n// The memory is already initialized to zero\nfor (int i = 0; i < 5; i++) {\n    printf("%d ", ptr[i]);  // Will print "0 0 0 0 0"\n}\nfree(ptr);`,
          output: "0 0 0 0 0",
          explanation: {
            en: "This example shows how calloc() allocates memory for 5 integers and initializes them to zero. We verify the allocation's success and then print the values, which are all zeros. calloc() is particularly useful when you need memory initialized to zero, saving you the step of manual initialization.",
            id: "Contoh ini menunjukkan bagaimana calloc() mengalokasikan memori untuk 5 bilangan bulat dan menginisialisasinya ke nol. Kita memverifikasi keberhasilan alokasi dan kemudian mencetak nilai-nilainya, yang semuanya nol. calloc() sangat berguna ketika Anda membutuhkan memori yang diinisialisasi ke nol, menghemat langkah inisialisasi manual.",
          },
        },
      ],
    }),
    createCourseItems.createMultipleItem({
      type: "realloc()",
      examples: [
        {
          name: {
            en: "Resizing Memory with realloc()",
            id: "Mengubah Ukuran Memori dengan realloc()",
          },
          description: {
            en: "Resizes a previously allocated memory block",
            id: "Mengubah ukuran blok memori yang sebelumnya dialokasikan",
          },
          example: `int *ptr = (int*) malloc(5 * sizeof(int));\n// Initialize the first 5 elements\nfor (int i = 0; i < 5; i++) {\n    ptr[i] = i + 1;\n}\n// Resize the memory block to hold 10 integers\nptr = (int*) realloc(ptr, 10 * sizeof(int));\nif (ptr == NULL) {\n    printf("Memory reallocation failed\\n");\n    return 1;\n}\n// Initialize the new elements\nfor (int i = 5; i < 10; i++) {\n    ptr[i] = i + 1;\n}\n// Print all elements\nfor (int i = 0; i < 10; i++) {\n    printf("%d ", ptr[i]);\n}\nfree(ptr);`,
          output: "1 2 3 4 5 6 7 8 9 10",
          explanation: {
            en: "This example illustrates the use of realloc() to resize an existing memory block. We start with 5 integers, then expand to 10. realloc() preserves the original data and allows us to add more. It's crucial to check if reallocation was successful. realloc() is valuable when you need to dynamically adjust the size of allocated memory.",
            id: "Contoh ini mengilustrasikan penggunaan realloc() untuk mengubah ukuran blok memori yang ada. Kita mulai dengan 5 bilangan bulat, kemudian memperluas menjadi 10. realloc() mempertahankan data asli dan memungkinkan kita untuk menambahkan lebih banyak. Penting untuk memeriksa apakah realokasi berhasil. realloc() berharga ketika Anda perlu menyesuaikan ukuran memori yang dialokasikan secara dinamis.",
          },
        },
      ],
    }),
  ];

  const memoryDeallocation: MultipleItem[] = [
    createCourseItems.createMultipleItem({
      type: "free()",
      examples: [
        {
          name: {
            en: "Deallocating Memory with free()",
            id: "Menghapus Alokasi Memori dengan free()",
          },
          description: {
            en: "Deallocates the memory previously allocated by malloc, calloc, or realloc",
            id: "Menghapus alokasi memori yang sebelumnya dialokasikan oleh malloc, calloc, atau realloc",
          },
          example: `int *ptr = (int*) malloc(5 * sizeof(int));\nif (ptr == NULL) {\n    printf("Memory allocation failed\\n");\n    return 1;\n}\n// Use the allocated memory\nfor (int i = 0; i < 5; i++) {\n    ptr[i] = i + 1;\n    printf("%d ", ptr[i]);\n}\nprintf("\\n");\n// Free the memory when done\nfree(ptr);\n// Set the pointer to NULL to avoid using it after freeing\nptr = NULL;\n// Trying to access ptr now would be undefined behavior\n// printf("%d", ptr[0]);  // This would be dangerous!`,
          output: "1 2 3 4 5",
          explanation: {
            en: "This example demonstrates proper memory deallocation using free(). After using the allocated memory, we free it to prevent memory leaks. Setting the pointer to NULL after freeing is a good practice to avoid accidental use of freed memory. Proper use of free() is crucial for managing memory efficiently and preventing memory-related issues in your programs.",
            id: "Contoh ini mendemonstrasikan penghapusan alokasi memori yang tepat menggunakan free(). Setelah menggunakan memori yang dialokasikan, kita membebaskannya untuk mencegah kebocoran memori. Mengatur pointer ke NULL setelah membebaskan adalah praktik yang baik untuk menghindari penggunaan memori yang telah dibebaskan secara tidak sengaja. Penggunaan free() yang tepat sangat penting untuk mengelola memori secara efisien dan mencegah masalah terkait memori dalam program Anda.",
          },
        },
      ],
    }),
  ];

  const memoryIssues: MultipleItem[] = [
    createCourseItems.createMultipleItem({
      type: "Common Memory Problems",
      examples: [
        {
          name: {
            en: "Memory Leak",
            id: "Kebocoran Memori",
          },
          description: {
            en: "Occurs when allocated memory is not freed",
            id: "Terjadi ketika memori yang dialokasikan tidak dibebaskan",
          },
          example: `void memory_leak() {\n    int *ptr = (int*) malloc(sizeof(int));\n    *ptr = 10;\n    printf("Value: %d\\n", *ptr);\n    // Memory is allocated but never freed\n    // The function ends, and the pointer is lost\n    // This memory cannot be accessed or freed now\n}\n\nint main() {\n    memory_leak();\n    return 0;\n}`,
          output: "Value: 10\n(Memory leak occurs, but no visible output)",
          explanation: {
            en: "This example illustrates a memory leak. Memory is allocated but never freed, and the pointer is lost when the function ends. This leads to inaccessible allocated memory, reducing available system resources over time. To prevent memory leaks, always free allocated memory when it's no longer needed.",
            id: "Contoh ini mengilustrasikan kebocoran memori. Memori dialokasikan tetapi tidak pernah dibebaskan, dan pointer hilang ketika fungsi berakhir. Ini menyebabkan memori yang dialokasikan tidak dapat diakses, mengurangi sumber daya sistem yang tersedia seiring waktu. Untuk mencegah kebocoran memori, selalu bebaskan memori yang dialokasikan ketika tidak lagi diperlukan.",
          },
        },
        {
          name: {
            en: "Dangling Pointer",
            id: "Pointer Menggantung",
          },
          description: {
            en: "A pointer that references a memory location that has been freed",
            id: "Pointer yang merujuk ke lokasi memori yang telah dibebaskan",
          },
          example: `int *ptr = (int*) malloc(sizeof(int));\n*ptr = 5;\nprintf("Before free: %d\\n", *ptr);\nfree(ptr);\n// ptr is now a dangling pointer\nprintf("After free: %d\\n", *ptr);  // This is undefined behavior`,
          output:
            "Before free: 5\nAfter free: (undefined behavior, may crash or print garbage value)",
          explanation: {
            en: "This example shows a dangling pointer scenario. After freeing the memory, the pointer still exists but points to an invalid memory location. Accessing this pointer leads to undefined behavior, potentially causing crashes or data corruption. To avoid dangling pointers, set pointers to NULL after freeing them.",
            id: "Contoh ini menunjukkan skenario pointer menggantung. Setelah membebaskan memori, pointer masih ada tetapi menunjuk ke lokasi memori yang tidak valid. Mengakses pointer ini menyebabkan perilaku yang tidak terdefinisi, berpotensi menyebabkan crash atau korupsi data. Untuk menghindari pointer menggantung, atur pointer ke NULL setelah membebaskannya.",
          },
        },
        {
          name: {
            en: "Buffer Overflow",
            id: "Overflow Buffer",
          },
          description: {
            en: "Writing beyond the bounds of allocated memory",
            id: "Menulis melampaui batas memori yang dialokasikan",
          },
          example: `char buffer[5];\nstrcpy(buffer, "This string is too long");\nprintf("%s\\n", buffer);  // This may print beyond the buffer or crash`,
          output: "(May print corrupted data or crash the program)",
          explanation: {
            en: "This example demonstrates a buffer overflow. Writing more data than the allocated buffer can hold leads to memory corruption, potentially overwriting other variables or causing crashes. Buffer overflows can also be security vulnerabilities. Always ensure that data fits within allocated buffers and use safer functions like strncpy() instead of strcpy().",
            id: "Contoh ini mendemonstrasikan overflow buffer. Menulis lebih banyak data daripada yang dapat ditampung buffer yang dialokasikan menyebabkan korupsi memori, berpotensi menimpa variabel lain atau menyebabkan crash. Overflow buffer juga dapat menjadi kerentanan keamanan. Selalu pastikan bahwa data sesuai dengan buffer yang dialokasikan dan gunakan fungsi yang lebih aman seperti strncpy() alih-alih strcpy().",
          },
        },
      ],
    }),
  ];

  const bestPractices: MultipleItem[] = [
    createCourseItems.createMultipleItem({
      type: "Memory Management Best Practices",
      examples: [
        {
          name: {
            en: "Always Check for NULL After Allocation",
            id: "Selalu Periksa NULL Setelah Alokasi",
          },
          description: {
            en: "Always verify if memory allocation was successful to prevent potential crashes.",
            id: "Selalu verifikasi apakah alokasi memori berhasil untuk mencegah potensi crash.",
          },
          example: `int *ptr = (int*) malloc(sizeof(int));\nif (ptr == NULL) {\n    fprintf(stderr, "Memory allocation failed\\n");\n    exit(1);\n}\n*ptr = 10;\nprintf("Allocated value: %d\\n", *ptr);\nfree(ptr);`,
          output: "Allocated value: 10",
          explanation: {
            en: "This example demonstrates the importance of checking for NULL after memory allocation. If allocation fails, malloc() returns NULL. By checking for this, we can handle the error gracefully, preventing potential crashes or undefined behavior that could occur if we tried to use a NULL pointer.",
            id: "Contoh ini menunjukkan pentingnya memeriksa NULL setelah alokasi memori. Jika alokasi gagal, malloc() mengembalikan NULL. Dengan memeriksa ini, kita dapat menangani kesalahan dengan baik, mencegah potensi crash atau perilaku yang tidak terdefinisi yang bisa terjadi jika kita mencoba menggunakan pointer NULL.",
          },
        },
        {
          name: {
            en: "Free Memory When No Longer Needed",
            id: "Bebaskan Memori Ketika Tidak Diperlukan Lagi",
          },
          description: {
            en: "Always free dynamically allocated memory when it's no longer needed to prevent memory leaks.",
            id: "Selalu bebaskan memori yang dialokasikan secara dinamis ketika tidak lagi diperlukan untuk mencegah kebocoran memori.",
          },
          example: `int *ptr = (int*) malloc(sizeof(int));\n*ptr = 20;\nprintf("Before free: %d\\n", *ptr);\nfree(ptr);\nptr = NULL;  // Set to NULL after freeing\n// printf("After free: %d\\n", *ptr);  // This would be a mistake!`,
          output: "Before free: 20",
          explanation: {
            en: "This example shows proper memory management by freeing allocated memory when it's no longer needed and setting the pointer to NULL afterwards. This practice prevents memory leaks and helps avoid accidental use of freed memory, which could lead to undefined behavior or crashes.",
            id: "Contoh ini menunjukkan manajemen memori yang tepat dengan membebaskan memori yang dialokasikan ketika tidak lagi diperlukan dan mengatur pointer ke NULL setelahnya. Praktik ini mencegah kebocoran memori dan membantu menghindari penggunaan memori yang telah dibebaskan secara tidak sengaja, yang dapat menyebabkan perilaku tidak terdefinisi atau crash.",
          },
        },
        {
          name: {
            en: "Use Valgrind for Memory Debugging",
            id: "Gunakan Valgrind untuk Debugging Memori",
          },
          description: {
            en: "Utilize tools like Valgrind to detect memory leaks and other memory-related issues.",
            id: "Manfaatkan alat seperti Valgrind untuk mendeteksi kebocoran memori dan masalah terkait memori lainnya.",
          },
          example: `// Compile with debugging symbols\ngcc -g your_program.c -o your_program\n\n// Run with Valgrind\nvalgrind --leak-check=full ./your_program`,
          output:
            "(Valgrind output would show memory-related issues if any exist)",
          explanation: {
            en: "This example introduces Valgrind, a powerful tool for detecting memory-related issues. By compiling with debugging symbols and running the program through Valgrind, you can identify memory leaks, use of uninitialized memory, and other memory errors that might not be immediately apparent during normal execution. Regular use of such tools can significantly improve code quality and reliability.",
            id: "Contoh ini memperkenalkan Valgrind, alat yang kuat untuk mendeteksi masalah terkait memori. Dengan mengompilasi dengan simbol debugging dan menjalankan program melalui Valgrind, Anda dapat mengidentifikasi kebocoran memori, penggunaan memori yang belum diinisialisasi, dan kesalahan memori lainnya yang mungkin tidak langsung terlihat selama eksekusi normal. Penggunaan rutin alat seperti ini dapat secara signifikan meningkatkan kualitas dan keandalan kode.",
          },
        },
      ],
    }),
  ];

  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: t("title") }}
      courses={Courses(locale)}
      currentCourseLink="/courses/c/memory-management"
      translations={t}
      topics={topics}
      whyIsItMatter={{
        translations: "whyMemoryManagementMatters",
        id: "why-memory-management-matters",
      }}
    >
      <Multiple
        title={t("topics.dynamicAllocation.title")}
        id="dynamic-memory-allocation"
        delay={0.8}
        icon={FaMemory}
        language="c"
        items={memoryAllocation}
      />

      <Multiple
        title={t("topics.memoryDeallocation.title")}
        id="memory-deallocation"
        delay={0.9}
        icon={FaRocket}
        language="c"
        items={memoryDeallocation}
      />

      <Multiple
        title={t("topics.memoryIssues.title")}
        id="memory-issues"
        delay={1.0}
        icon={FaShieldAlt}
        language="c"
        items={memoryIssues}
      />

      <Multiple
        title={t("topics.bestPractices.title")}
        id="best-practices"
        delay={1.1}
        icon={FaLightbulb}
        language="c"
        items={bestPractices}
      />
    </CourseContainer>
  );
}
