"use client";

import Courses from "@components/courses/javascript/navigation";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Topics from "@components/courses/template/topics";
import CreateCourseItems from "@components/courses/create";
import { Single } from "@components/courses/template/single";
import { Multiple } from "@components/courses/template/multiple";
import { useTranslations, useLocale } from "next-intl";
import { Locale } from "@default/i18n/config";

import {
  FaCode,
  FaCube,
  FaExchangeAlt,
  FaList,
  FaWrench,
} from "react-icons/fa";
import { PiLightbulbFilamentFill } from "react-icons/pi";

export default function JavaScriptObjectsArrays() {
  const t = useTranslations("Component.Courses.JavaScript.ObjectsArrays");
  const locale = useLocale() as Locale;

  const topics = [
    {
      title: t("topics.objectBasics.title"),
      description: t("topics.objectBasics.description"),
      id: "object-basics",
      icon: FaCube,
    },
    {
      title: t("topics.arrayFundamentals.title"),
      description: t("topics.arrayFundamentals.description"),
      id: "array-fundamentals",
      icon: FaList,
    },
    {
      title: t("topics.objectMethods.title"),
      description: t("topics.objectMethods.description"),
      id: "object-methods",
      icon: FaWrench,
    },
    {
      title: t("topics.arrayOperations.title"),
      description: t("topics.arrayOperations.description"),
      id: "array-operations",
      icon: FaExchangeAlt,
    },
  ];

  const createCourseItems = new CreateCourseItems({ language: locale });

  const objectBasics = [
    createCourseItems.createSingleItem({
      title: { en: "Object Creation", id: "Pembuatan Objek" },
      description: {
        en: "Objects in JavaScript are like containers that hold related information. Think of them as a box where you can put different things and label each item. They're very useful for grouping data that belongs together.",
        id: "Objek dalam JavaScript seperti wadah yang menyimpan informasi terkait. Bayangkan sebagai kotak di mana Anda dapat menempatkan berbagai hal dan memberi label pada setiap item. Mereka sangat berguna untuk mengelompokkan data yang saling berhubungan.",
      },
      example: `// Using object literal (it's like making a list)\nconst person = {\n  name: 'John',\n  age: 30,\n  isStudent: false,\n  favoriteColors: ['blue', 'green']\n};\n\n// Using Object constructor (it's like building the box step by step)\nconst car = new Object();\ncar.make = 'Toyota';\ncar.model = 'Corolla';\ncar.year = 2022;\ncar.features = ['air conditioning', 'bluetooth'];\n\nconsole.log(person);\nconsole.log(car);`,
      output: `{\n  name: 'John',\n  age: 30,\n  isStudent: false,\n  favoriteColors: ['blue', 'green']\n}\n{\n  make: 'Toyota',\n  model: 'Corolla',\n  year: 2022,\n  features: ['air conditioning', 'bluetooth']\n}`,
      explanation: {
        en: "In this example, we show two ways to create objects.\n\n1. Using an object literal, is like writing a quick list. You put all the information between curly braces {}. Each piece of information has a name (like 'name' or 'age') and a value.\n\n2. Using the Object constructor, is like building a box and then putting things into it one by one. You start with an empty object and then add information to it step by step.\n\nBoth methods create objects, which are very useful in programming because they let you keep related information together. For example, all the information about a person or a car is kept in one place, making it easy to use and understand.",
        id: "Dalam contoh ini, kita menunjukkan dua cara untuk membuat objek.\n\n1. Menggunakan literal objek, seperti menulis daftar cepat. Anda menempatkan semua informasi di antara kurung kurawal {}. Setiap bagian informasi memiliki nama (seperti 'name' atau 'age') dan nilai.\n\n2. Menggunakan konstruktor Object, seperti membangun kotak dan kemudian memasukkan barang-barang ke dalamnya satu per satu. Anda mulai dengan objek kosong dan kemudian menambahkan informasi ke dalamnya langkah demi langkah.\n\nKedua metode ini membuat objek, yang sangat berguna dalam pemrograman karena memungkinkan Anda menyimpan informasi terkait bersama-sama. Misalnya, semua informasi tentang seseorang atau mobil disimpan di satu tempat, membuatnya mudah digunakan dan dipahami.",
      },
      bestUseCase: {
        en: "Objects are best used when you need to group related data together, such as properties of a single entity (like a person, a car, or a product). They provide a structured way to represent complex data with key-value pairs.",
        id: "Objek paling baik digunakan ketika Anda perlu mengelompokkan data terkait bersama-sama, seperti properti dari satu entitas (seperti orang, mobil, atau produk). Mereka menyediakan cara terstruktur untuk merepresentasikan data kompleks dengan pasangan kunci-nilai.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Accessing Object Properties",
        id: "Mengakses Properti Objek",
      },
      description: {
        en: "Once you have an object, you'll want to get information from it. This is called 'accessing' the object's properties. There are two main ways to do this in JavaScript, and they're both easy once you get the hang of it!",
        id: "Setelah Anda memiliki objek, Anda akan ingin mendapatkan informasi darinya. Ini disebut 'mengakses' properti objek. Ada dua cara utama untuk melakukan ini dalam JavaScript, dan keduanya mudah setelah Anda terbiasa!",
      },
      example: `const person = { \n  name: 'Alice', \n  age: 25,\n  'favorite food': 'pizza'\n};\n\n// Dot notation (like pointing to something)\nconsole.log(person.name);\n\n// Bracket notation (like looking up a word in a dictionary)\nconsole.log(person['age']);\n\n// Using variables with bracket notation\nconst propertyName = 'name';\nconsole.log(person[propertyName]);\n\n// Accessing property with space in its name\nconsole.log(person['favorite food']);\n\n// Trying to access a property that doesn't exist\nconsole.log(person.height);`,
      output: `Alice\n25\nAlice\npizza\nundefined`,
      explanation: {
        en: "This example shows different ways to get information from an object:\n\n1. Dot notation (person.name) is the simplest way. It's like pointing to the information you want.\n\n2. Bracket notation (person['age']) is useful when the property name has spaces or when it's stored in a variable.\n\n3. We can use a variable to specify which property we want to access, like with propertyName.\n\n4. For properties with spaces in their names, we must use bracket notation.\n\n5. If we try to access a property that doesn't exist (like 'height'), JavaScript gives us 'undefined'.\n\nRemember, objects are like containers of information, and these methods are how we open the container and look inside for specific pieces of information.",
        id: "Contoh ini menunjukkan berbagai cara untuk mendapatkan informasi dari objek:\n\n1. Notasi titik (person.name) adalah cara paling sederhana. Ini seperti menunjuk ke informasi yang Anda inginkan.\n\n2. Notasi kurung siku (person['age']) berguna ketika nama properti memiliki spasi atau ketika disimpan dalam variabel.\n\n3. Kita dapat menggunakan variabel untuk menentukan properti mana yang ingin kita akses, seperti dengan propertyName.\n\n4. Untuk properti dengan spasi dalam namanya, kita harus menggunakan notasi kurung siku.\n\n5. Jika kita mencoba mengakses properti yang tidak ada (seperti 'height'), JavaScript memberi kita 'undefined'.\n\nIngat, objek seperti wadah informasi, dan metode-metode ini adalah cara kita membuka wadah dan melihat ke dalam untuk mencari informasi tertentu.",
      },
      bestUseCase: {
        en: "Accessing object properties is essential when working with complex data structures. Dot notation is best for simple, known property names, while bracket notation is versatile for dynamic property access or when dealing with property names that are not valid identifiers.",
        id: "Mengakses properti objek sangat penting ketika bekerja dengan struktur data kompleks. Notasi titik paling baik untuk nama properti sederhana dan diketahui, sementara notasi kurung siku serbaguna untuk akses properti dinamis atau ketika berurusan dengan nama properti yang bukan pengenal yang valid.",
      },
    }),
  ];

  const arrayFundamentals = [
    createCourseItems.createSingleItem({
      title: {
        en: "Array Creation",
        id: "Pembuatan Array",
      },
      description: {
        en: "There are several ways to create arrays in JavaScript. Let's explore the most common methods.",
        id: "Ada beberapa cara untuk membuat array di JavaScript. Mari kita jelajahi metode yang paling umum.",
      },
      example: `// Array Literal\nconst fruits = ['apple', 'banana', 'orange'];\nconsole.log(fruits);\n\n// Array Constructor\nconst numbers = new Array(1, 2, 3, 4, 5);\nconsole.log(numbers);\n\n// Empty Array\nconst emptyArray = [];\nconsole.log(emptyArray);\n\n// Mixed Array\nconst mixedArray = ['string', 42, true, null, {name: 'object'}, [1, 2, 3]];\nconsole.log(mixedArray);`,
      output: `["apple", "banana", "orange"]\n[1, 2, 3, 4, 5]\n[]\n["string", 42, true, null, {name: "object"}, [1, 2, 3]]`,
      explanation: {
        en: "This example demonstrates different ways to create arrays in JavaScript:\n\n1. Array Literal: The most common way, using square brackets [].\n2. Array Constructor: Using the Array() constructor function.\n3. Empty Array: Creating an array with no elements.\n4. Mixed Array: Arrays in JavaScript can contain different types of data.",
        id: "Contoh ini menunjukkan berbagai cara untuk membuat array di JavaScript:\n\n1. Array Literal: Cara paling umum, menggunakan tanda kurung siku [].\n2. Konstruktor Array: Menggunakan fungsi konstruktor Array().\n3. Array Kosong: Membuat array tanpa elemen.\n4. Array Campuran: Array di JavaScript dapat berisi berbagai jenis data.",
      },
      bestUseCase: {
        en: "Arrays are best used when you need an ordered collection of items, especially when you need to perform operations like iteration, mapping, or filtering on a list of similar data.",
        id: "Array paling baik digunakan ketika Anda memerlukan kumpulan item yang terurut, terutama ketika Anda perlu melakukan operasi seperti iterasi, pemetaan, atau penyaringan pada daftar data yang serupa.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Accessing Array Elements",
        id: "Mengakses Elemen Array",
      },
      description: {
        en: "Once you have an array, you'll want to access its elements. JavaScript provides several ways to do this.",
        id: "Setelah Anda memiliki array, Anda akan ingin mengakses elemennya. JavaScript menyediakan beberapa cara untuk melakukan ini.",
      },
      example: `const colors = ['red', 'green', 'blue', 'yellow', 'purple'];\n\n// Accessing by index\nconsole.log(colors[0]);  // First element\nconsole.log(colors[2]);  // Third element\n\n// Accessing last element\nconsole.log(colors[colors.length - 1]);\n\n// Accessing non-existent element\nconsole.log(colors[10]);\n\n// Changing an element\ncolors[1] = 'lime';\nconsole.log(colors);\n\n// Adding a new element\ncolors[colors.length] = 'orange';\nconsole.log(colors);`,
      output: `red\nblue\npurple\nundefined\n["red", "lime", "blue", "yellow", "purple"]\n["red", "lime", "blue", "yellow", "purple", "orange"]`,
      explanation: {
        en: "This example shows different ways to access and modify array elements:\n\n1. Using index to access elements (remember, indexing starts at 0).\n2. Accessing the last element using array length.\n3. Accessing a non-existent element returns undefined.\n4. Changing an element by assigning a new value to an index.\n5. Adding a new element by assigning to the index equal to the array's length.",
        id: "Contoh ini menunjukkan berbagai cara untuk mengakses dan memodifikasi elemen array:\n\n1. Menggunakan indeks untuk mengakses elemen (ingat, pengindeksan dimulai dari 0).\n2. Mengakses elemen terakhir menggunakan panjang array.\n3. Mengakses elemen yang tidak ada mengembalikan undefined.\n4. Mengubah elemen dengan menetapkan nilai baru ke indeks.\n5. Menambahkan elemen baru dengan menetapkan ke indeks yang sama dengan panjang array.",
      },
      bestUseCase: {
        en: "Accessing and modifying array elements is crucial when working with collections of data. It allows you to retrieve, update, and add information dynamically in your programs.",
        id: "Mengakses dan memodifikasi elemen array sangat penting saat bekerja dengan kumpulan data. Ini memungkinkan Anda untuk mengambil, memperbarui, dan menambahkan informasi secara dinamis dalam program Anda.",
      },
    }),
  ];

  const objectMethods = [
    createCourseItems.createMultipleItem({
      type: "Built-in",
      examples: [
        {
          name: { en: "Object.keys()", id: "Object.keys()" },
          description: {
            en: "This method gives us a list of all the property names (or keys) in an object. It's like getting a list of labels for everything in your object.",
            id: "Metode ini memberikan kita daftar semua nama properti (atau kunci) dalam sebuah objek. Ini seperti mendapatkan daftar label untuk semua hal dalam objek Anda.",
          },
          example: `const person = { \n  name: 'John', \n  age: 30, \n  job: 'developer' \n};\nconsole.log(Object.keys(person));\n\nconst emptyObject = {};\nconsole.log(Object.keys(emptyObject));`,
          output: `["name", "age", "job"]\n[]`,
          explanation: {
            en: "Object.keys() returns an array of a given object's own enumerable property names. In the first example, it returns all the keys of the 'person' object. For the empty object, it returns an empty array since there are no keys.",
            id: "Object.keys() mengembalikan array dari nama properti yang dapat dihitung dari objek yang diberikan. Dalam contoh pertama, ia mengembalikan semua kunci dari objek 'person'. Untuk objek kosong, ia mengembalikan array kosong karena tidak ada kunci.",
          },
        },
        {
          name: { en: "Object.values()", id: "Object.values()" },
          description: {
            en: "This method gives us a list of all the values in an object. It's like getting a list of all the information in your object, without the labels.",
            id: "Metode ini memberikan kita daftar semua nilai dalam sebuah objek. Ini seperti mendapatkan daftar semua informasi dalam objek Anda, tanpa label.",
          },
          example: `const person = { \n  name: 'John', \n  age: 30, \n  job: 'developer' \n};\nconsole.log(Object.values(person));\n\nconst scores = { math: 95, science: 88, history: 92 };\nconsole.log(Object.values(scores));`,
          output: `["John", 30, "developer"]\n[95, 88, 92]`,
          explanation: {
            en: "Object.values() returns an array of a given object's own enumerable property values. In the first example, it returns all the values of the 'person' object. For the 'scores' object, it returns an array of all the score values.",
            id: "Object.values() mengembalikan array dari nilai properti yang dapat dihitung dari objek yang diberikan. Dalam contoh pertama, ia mengembalikan semua nilai dari objek 'person'. Untuk objek 'scores', ia mengembalikan array dari semua nilai skor.",
          },
        },
      ],
    }),
    createCourseItems.createMultipleItem({
      type: "Custom",
      examples: [
        {
          name: { en: "Custom Method", id: "Metode Kustom" },
          description: {
            en: "You can add your own methods to objects to make them do special tasks.",
            id: "Anda dapat menambahkan metode Anda sendiri ke objek untuk membuat mereka melakukan tugas khusus.",
          },
          example: `const calculator = {\n  add: function(a, b) {\n    return a + b;\n  },\n  subtract: function(a, b) {\n    return a - b;\n  },\n  multiply: function(a, b) {\n    return a * b;\n  },\n  describe: function() {\n    console.log("I'm a calculator object!");\n  }\n};\n\nconsole.log(calculator.add(5, 3));\nconsole.log(calculator.subtract(10, 4));\nconsole.log(calculator.multiply(2, 6));\ncalculator.describe();`,
          output: `8\n6\n12\nI'm a calculator object!`,
          explanation: {
            en: "In this example, we've created a calculator object with custom methods. The add, subtract, and multiply methods perform arithmetic operations, while the describe method logs a message. We can call these methods using dot notation (e.g., calculator.add(5, 3)). This demonstrates how objects can have their own functions, allowing for more organized and object-oriented code.",
            id: "Dalam contoh ini, kita telah membuat objek kalkulator dengan metode kustom. Metode add, subtract, dan multiply melakukan operasi aritmatika, sementara metode describe mencatat pesan. Kita dapat memanggil metode-metode ini menggunakan notasi titik (misalnya, calculator.add(5, 3)). Ini menunjukkan bagaimana objek dapat memiliki fungsi mereka sendiri, memungkinkan kode yang lebih terorganisir dan berorientasi objek.",
          },
        },
      ],
    }),
  ];

  const arrayOperations = [
    createCourseItems.createMultipleItem({
      type: "Manipulation",
      examples: [
        {
          name: { en: "push() and pop()", id: "push() dan pop()" },
          description: {
            en: "push() adds an item to the end of an array, while pop() removes the last item.",
            id: "push() menambahkan item ke akhir array, sementara pop() menghapus item terakhir.",
          },
          example: `const fruits = ['apple', 'banana'];\nfruits.push('orange');\nconsole.log(fruits);\n\nconst lastFruit = fruits.pop();\nconsole.log(lastFruit);\nconsole.log(fruits);`,
          output: `["apple", "banana", "orange"]\norange\n["apple", "banana"]`,
          explanation: {
            en: "push() adds 'orange' to the end of the fruits array. pop() then removes and returns the last item ('orange'). After these operations, the fruits array is back to its original state with just 'apple' and 'banana'.",
            id: "push() menambahkan 'orange' ke akhir array fruits. pop() kemudian menghapus dan mengembalikan item terakhir ('orange'). Setelah operasi ini, array fruits kembali ke keadaan aslinya dengan hanya 'apple' dan 'banana'.",
          },
        },
        {
          name: { en: "unshift() and shift()", id: "unshift() dan shift()" },
          description: {
            en: "unshift() adds an item to the beginning of an array, while shift() removes the first item.",
            id: "unshift() menambahkan item ke awal array, sementara shift() menghapus item pertama.",
          },
          example: `const numbers = [2, 3, 4];\nnumbers.unshift(1);\nconsole.log(numbers);\n\nconst firstNumber = numbers.shift();\nconsole.log(firstNumber);\nconsole.log(numbers);`,
          output: `[1, 2, 3, 4]\n1\n[2, 3, 4]`,
          explanation: {
            en: "unshift() adds 1 to the beginning of the numbers array. shift() then removes and returns the first item (1). After these operations, the numbers array is back to its original state with 2, 3, and 4.",
            id: "unshift() menambahkan 1 ke awal array numbers. shift() kemudian menghapus dan mengembalikan item pertama (1). Setelah operasi ini, array numbers kembali ke keadaan aslinya dengan 2, 3, dan 4.",
          },
        },
        {
          name: { en: "map()", id: "map()" },
          description: {
            en: "map() creates a new array by doing something to every item in the original array.",
            id: "map() membuat array baru dengan melakukan sesuatu pada setiap item dalam array asli.",
          },
          example: `const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);\n\nconst words = ['hello', 'world'];\nconst upperWords = words.map(word => word.toUpperCase());\nconsole.log(upperWords);`,
          output: `[2, 4, 6, 8]\n["HELLO", "WORLD"]`,
          explanation: {
            en: "map() applies a function to each element of the array and returns a new array with the results. In the first example, it doubles each number. In the second example, it converts each word to uppercase. The original arrays remain unchanged.",
            id: "map() menerapkan fungsi pada setiap elemen array dan mengembalikan array baru dengan hasilnya. Dalam contoh pertama, ia menggandakan setiap angka. Dalam contoh kedua, ia mengubah setiap kata menjadi huruf besar. Array asli tetap tidak berubah.",
          },
        },
      ],
    }),
  ];

  return (
    <CourseContainer
      authorInfo={{
        date: "2024-09-15",
        title: t("title"),
      }}
      courses={Courses(locale)}
      currentCourseLink="/courses/javascript/objects-arrays"
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
        title={t("whyObjectsArraysMatter.title")}
        id="why-objects-arrays-matter"
        delay={0.7}
        description={t("whyObjectsArraysMatter.description")}
        icon={PiLightbulbFilamentFill}
      />

      <Single
        id="object-basics"
        delay={0.8}
        title={t("topics.objectBasics.title")}
        language="javascript"
        components={objectBasics}
        icon={FaCube}
      />

      <Single
        id="array-fundamentals"
        delay={0.9}
        title={t("topics.arrayFundamentals.title")}
        language="javascript"
        components={arrayFundamentals}
        icon={FaList}
      />

      <Multiple
        id="object-methods"
        delay={1.0}
        title={t("topics.objectMethods.title")}
        icon={FaWrench}
        language="javascript"
        items={objectMethods}
      />

      <Multiple
        id="array-operations"
        delay={1.1}
        title={t("topics.arrayOperations.title")}
        icon={FaExchangeAlt}
        language="javascript"
        items={arrayOperations}
      />
    </CourseContainer>
  );
}
