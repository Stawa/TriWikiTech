"use client";

import { FaMemory } from "react-icons/fa";
import { PiMathOperationsBold } from "react-icons/pi";
import { RiFunctionAddLine } from "react-icons/ri";
import { TbPointer } from "react-icons/tb";

import Courses from "@components/courses/c/navigation";
import CourseContainer from "@components/courses/container";
import {
  Multiple,
  type MultipleItem,
} from "@components/courses/template/multiple";
import CreateCourseItems from "@components/courses/create";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@default/i18n/config";

export default function CPointers() {
  const t = useTranslations("Component.Courses.C.Pointers");
  const locale = useLocale() as Locale;
  const creator = new CreateCourseItems({ language: locale });
  const topics = [
    {
      title: t("topics.pointerBasics.title"),
      description: t("topics.pointerBasics.description"),
      id: "pointer-basics",
      icon: TbPointer,
    },
    {
      title: t("topics.pointerArithmetic.title"),
      description: t("topics.pointerArithmetic.description"),
      id: "pointer-arithmetic",
      icon: PiMathOperationsBold,
    },
    {
      title: t("topics.pointersAndArrays.title"),
      description: t("topics.pointersAndArrays.description"),
      id: "pointers-and-arrays",
      icon: FaMemory,
    },
    {
      title: t("topics.pointersAndFunctions.title"),
      description: t("topics.pointersAndFunctions.description"),
      id: "pointers-and-functions",
      icon: RiFunctionAddLine,
    },
  ];

  const pointerBasics: MultipleItem[] = [
    creator.createMultipleItem({
      type: "Declaration and Initialization",
      examples: [
        {
          name: {
            en: "Pointer Declaration",
            id: "Deklarasi Pointer",
          },
          description: {
            en: "Declaring a pointer variable",
            id: "Mendeklarasikan variabel pointer",
          },
          example: `int *ptr;  // Declares a pointer to an integer`,
          output: "// No output (declaration only)",
          explanation: {
            en: "A pointer is declared using the data type it will point to, followed by an asterisk (*).\nThis creates a variable that can store a memory address of that data type.",
            id: "Pointer dideklarasikan menggunakan tipe data yang akan ditunjuk, diikuti oleh tanda bintang (*).\nIni membuat variabel yang dapat menyimpan alamat memori dari tipe data tersebut.",
          },
        },
        {
          name: {
            en: "Pointer Initialization",
            id: "Inisialisasi Pointer",
          },
          description: {
            en: "Initializing a pointer with the address of a variable",
            id: "Menginisialisasi pointer dengan alamat sebuah variabel",
          },
          example: `int num = 10;\nint *ptr = &num;  // ptr now holds the address of num`,
          output: "// No visible output (memory operation)",
          explanation: {
            en: "To initialize a pointer, we use the address-of operator (&) to get the memory address of a variable.\nThe pointer then stores this address, effectively 'pointing' to that variable in memory.",
            id: "Untuk menginisialisasi pointer, kita menggunakan operator alamat (&) untuk mendapatkan alamat memori dari sebuah variabel.\nPointer kemudian menyimpan alamat ini, secara efektif 'menunjuk' ke variabel tersebut di memori.",
          },
        },
      ],
    }),
    creator.createMultipleItem({
      type: "Dereferencing",
      examples: [
        {
          name: {
            en: "Accessing Value through Pointer",
            id: "Mengakses Nilai melalui Pointer",
          },
          description: {
            en: "Using the dereference operator (*) to access the value pointed to by a pointer",
            id: "Menggunakan operator dereference (*) untuk mengakses nilai yang ditunjuk oleh pointer",
          },
          example: `int num = 10;\nint *ptr = &num;\nprintf("%d", *ptr);  // Prints 10`,
          output: "10",
          explanation: {
            en: "Dereferencing a pointer means accessing the value stored at the memory address the pointer is holding.\nWe use the asterisk (*) before the pointer variable to dereference it.\nThis operation retrieves the value from the memory location the pointer is pointing to.",
            id: "Melakukan dereference pada pointer berarti mengakses nilai yang disimpan di alamat memori yang dipegang oleh pointer.\nKita menggunakan tanda bintang (*) sebelum variabel pointer untuk melakukan dereference.\nOperasi ini mengambil nilai dari lokasi memori yang ditunjuk oleh pointer.",
          },
        },
      ],
    }),
  ];

  const pointerArithmetic: MultipleItem[] = [
    creator.createMultipleItem({
      type: "Increment and Decrement",
      examples: [
        {
          name: {
            en: "Incrementing a Pointer",
            id: "Menambah Nilai Pointer",
          },
          description: {
            en: "Moving a pointer to the next memory location of its type",
            id: "Memindahkan pointer ke lokasi memori berikutnya sesuai tipenya",
          },
          example: `int arr[] = {10, 20, 30};
int *ptr = arr;
ptr++;  // ptr now points to the second element of arr`,
          output: "// No visible output (pointer manipulation)",
          explanation: {
            en: "When we increment a pointer, it doesn't simply add 1 to the memory address. Instead, it moves the pointer to the next element of its type. For an int pointer, ptr++ will add sizeof(int) bytes to the address, typically 4 bytes on most systems.",
            id: "Ketika kita menambah nilai pointer, ini tidak hanya menambahkan 1 ke alamat memori. Sebaliknya, ini memindahkan pointer ke elemen berikutnya sesuai tipenya. Untuk pointer int, ptr++ akan menambahkan sizeof(int) byte ke alamat, biasanya 4 byte pada kebanyakan sistem.",
          },
        },
      ],
    }),
    creator.createMultipleItem({
      type: "Pointer Subtraction",
      examples: [
        {
          name: {
            en: "Finding Distance Between Pointers",
            id: "Mencari Jarak Antara Pointer",
          },
          description: {
            en: "Calculating the number of elements between two pointers",
            id: "Menghitung jumlah elemen antara dua pointer",
          },
          example: `int arr[] = {10, 20, 30, 40, 50};
int *ptr1 = &arr[1];
int *ptr2 = &arr[4];
ptrdiff_t diff = ptr2 - ptr1;  // diff is 3`,
          output: "// No visible output (calculation result stored in diff)",
          explanation: {
            en: "When we subtract one pointer from another (of the same type), the result is not the simple difference of their addresses. Instead, it's the number of elements between them. This operation uses ptrdiff_t, a type guaranteed to hold the result of pointer subtraction.",
            id: "Ketika kita mengurangkan satu pointer dari yang lain (dengan tipe yang sama), hasilnya bukan sekedar selisih alamat mereka. Sebaliknya, ini adalah jumlah elemen di antara keduanya. Operasi ini menggunakan ptrdiff_t, tipe yang dijamin dapat menampung hasil pengurangan pointer.",
          },
        },
      ],
    }),
  ];

  const pointersAndArrays: MultipleItem[] = [
    creator.createMultipleItem({
      type: "Array-Pointer Relationship",
      examples: [
        {
          name: {
            en: "Arrays as Pointers",
            id: "Array sebagai Pointer",
          },
          description: {
            en: "Understanding how array names act as pointers",
            id: "Memahami bagaimana nama array bertindak sebagai pointer",
          },
          example: `int arr[] = {10, 20, 30};\nint *ptr = arr;  // ptr points to the first element of arr\nprintf("%d", *ptr);  // Prints 10`,
          output: "10",
          explanation: {
            en: "In C, array names can be used as pointers. When we use an array name without brackets, it returns a pointer to the first element of the array. This is why we can assign an array to a pointer without using the & operator.",
            id: "Dalam C, nama array dapat digunakan sebagai pointer. Ketika kita menggunakan nama array tanpa tanda kurung, itu mengembalikan pointer ke elemen pertama array. Inilah mengapa kita dapat menetapkan array ke pointer tanpa menggunakan operator &.",
          },
        },
      ],
    }),
    creator.createMultipleItem({
      type: "Pointer Indexing",
      examples: [
        {
          name: {
            en: "Accessing Array Elements with Pointers",
            id: "Mengakses Elemen Array dengan Pointer",
          },
          description: {
            en: "Using pointer arithmetic to access array elements",
            id: "Menggunakan aritmetika pointer untuk mengakses elemen array",
          },
          example: `int arr[] = {10, 20, 30};\nint *ptr = arr;\nprintf("%d", ptr[1]);  // Prints 20\nprintf("%d", *(ptr + 2));  // Prints 30`,
          output: "20\n30",
          explanation: {
            en: "Pointers can be used with array indexing notation or with arithmetic. ptr[1] is equivalent to *(ptr + 1), which means 'go to the memory location 1 integer after ptr, and dereference it'. This flexibility allows for powerful array manipulation.",
            id: "Pointer dapat digunakan dengan notasi pengindeksan array atau dengan aritmetika. ptr[1] setara dengan *(ptr + 1), yang berarti 'pergi ke lokasi memori 1 integer setelah ptr, dan dereferensi'. Fleksibilitas ini memungkinkan manipulasi array yang kuat.",
          },
        },
      ],
    }),
  ];

  const pointersAndFunctions: MultipleItem[] = [
    creator.createMultipleItem({
      type: "Pass by Reference",
      examples: [
        {
          name: {
            en: "Modifying Variables through Pointers",
            id: "Memodifikasi Variabel melalui Pointer",
          },
          description: {
            en: "Using pointers to modify variables in functions",
            id: "Menggunakan pointer untuk memodifikasi variabel dalam fungsi",
          },
          example: `void swap(int *a, int *b) {\n  int temp = *a;\n  *a = *b;\n  *b = temp;\n}\n\nint x = 5, y = 10;\nswap(&x, &y);  // x is now 10, y is now 5`,
          output: "// No visible output (values of x and y are swapped)",
          explanation: {
            en: "Passing pointers to a function allows the function to modify the original variables, not just copies. This is known as 'pass by reference'. In this example, the swap function receives the addresses of x and y, allowing it to interchange their values directly in memory.",
            id: "Melewatkan pointer ke fungsi memungkinkan fungsi tersebut memodifikasi variabel asli, bukan hanya salinannya. Ini dikenal sebagai 'pass by reference'. Dalam contoh ini, fungsi swap menerima alamat x dan y, memungkinkannya untuk menukar nilai mereka langsung di memori.",
          },
        },
      ],
    }),
    creator.createMultipleItem({
      type: "Returning Pointers",
      examples: [
        {
          name: {
            en: "Function Returning a Pointer",
            id: "Fungsi Mengembalikan Pointer",
          },
          description: {
            en: "Creating functions that return pointers",
            id: "Membuat fungsi yang mengembalikan pointer",
          },
          example: `int* findMax(int* arr, int size) {\n  int* max = arr;\n  for (int i = 1; i < size; i++) {\n    if (arr[i] > *max) {\n      max = &arr[i];\n    }\n  }\n  return max;\n}\n\nint numbers[] = {5, 8, 3, 1, 9};\nint* maxPtr = findMax(numbers, 5);\nprintf("Max value: %d", *maxPtr);  // Prints "Max value: 9"`,
          output: "Max value: 9",
          explanation: {
            en: "Functions can return pointers, which is useful for returning references to existing data or dynamically allocated memory. In this example, findMax returns a pointer to the largest element in the array. This allows us to access the maximum value without copying it, and potentially modify it if needed.",
            id: "Fungsi dapat mengembalikan pointer, yang berguna untuk mengembalikan referensi ke data yang ada atau memori yang dialokasikan secara dinamis. Dalam contoh ini, findMax mengembalikan pointer ke elemen terbesar dalam array. Ini memungkinkan kita untuk mengakses nilai maksimum tanpa menyalinnya, dan berpotensi memodifikasinya jika diperlukan.",
          },
        },
      ],
    }),
  ];

  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: t("title") }}
      courses={Courses(locale)}
      currentCourseLink="/courses/c/pointers"
      translations={t}
      topics={topics}
      whyIsItMatter={{
        translations: "whyPointersMatter",
        id: "why-pointers-matter",
      }}
    >
      <Multiple
        title={t("topics.pointerBasics.title")}
        id="pointer-basics"
        delay={0.8}
        icon={TbPointer}
        language="c"
        items={pointerBasics}
      />

      <Multiple
        title={t("topics.pointerArithmetic.title")}
        id="pointer-arithmetic"
        delay={1.0}
        icon={PiMathOperationsBold}
        language="c"
        items={pointerArithmetic}
      />

      <Multiple
        title={t("topics.pointersAndArrays.title")}
        id="pointers-and-arrays"
        delay={1.2}
        icon={FaMemory}
        language="c"
        items={pointersAndArrays}
      />

      <Multiple
        title={t("topics.pointersAndFunctions.title")}
        id="pointers-and-functions"
        delay={1.3}
        icon={RiFunctionAddLine}
        language="c"
        items={pointersAndFunctions}
      />
    </CourseContainer>
  );
}
