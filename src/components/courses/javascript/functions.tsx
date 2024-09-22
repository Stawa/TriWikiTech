"use client";

import Courses from "@components/courses/javascript/navigation";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Topics from "@components/courses/template/topics";
import CreateCourseItems from "@components/courses/create";
import { Single } from "@components/courses/template/single";
import { useTranslations, useLocale } from "next-intl";
import { Locale } from "@default/i18n/config";

import { FaCode, FaCube, FaRocket, FaTerminal } from "react-icons/fa";
import { PiLightbulbFilamentFill } from "react-icons/pi";

export default function JavaScriptFunctions() {
  const t = useTranslations("Component.Courses.JavaScript.Functions");
  const locale = useLocale() as Locale;

  const topics = [
    {
      title: t("topics.functionDeclaration.title"),
      description: t("topics.functionDeclaration.description"),
      id: "function-declaration",
      icon: FaCode,
    },
    {
      title: t("topics.parametersArguments.title"),
      description: t("topics.parametersArguments.description"),
      id: "parameters-arguments",
      icon: FaTerminal,
    },
    {
      title: t("topics.returnValues.title"),
      description: t("topics.returnValues.description"),
      id: "return-values",
      icon: FaCube,
    },
    {
      title: t("topics.arrowFunctions.title"),
      description: t("topics.arrowFunctions.description"),
      id: "arrow-functions",
      icon: FaRocket,
    },
  ];

  const createCourseItems = new CreateCourseItems({ language: locale });

  const functionDeclarations = [
    createCourseItems.createSingleItem({
      title: {
        en: "Standard Function Declaration",
        id: "Deklarasi Fungsi Standar",
      },
      description: {
        en: "This is the most common way to define a function. It uses the 'function' keyword followed by the function name.",
        id: "Ini adalah cara paling umum untuk mendefinisikan fungsi. Menggunakan kata kunci 'function' diikuti dengan nama fungsi.",
      },
      example: `function greet(name) {\n  return "Hello, " + name + "!";\n}\n\nconsole.log(greet("Alice")); // Outputs: Hello, Alice!`,
      output: `Hello, Alice!`,
      explanation: {
        en: "This function takes a 'name' parameter and returns a greeting string. When called with 'Alice', it outputs 'Hello, Alice!'.",
        id: "Fungsi ini mengambil parameter 'name' dan mengembalikan string sapaan. Ketika dipanggil dengan 'Alice', ia menghasilkan 'Hello, Alice!'.",
      },
      bestUseCase: {
        en: "Best for creating named functions that will be used throughout your code, especially when hoisting is desired.",
        id: "Terbaik untuk membuat fungsi bernama yang akan digunakan di seluruh kode Anda, terutama ketika hoisting diinginkan.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Function Expression",
        id: "Ekspresi Fungsi",
      },
      description: {
        en: "A function can also be created by a function expression. Such a function can be anonymous or have a name.",
        id: "Fungsi juga dapat dibuat dengan ekspresi fungsi. Fungsi seperti ini bisa anonim atau memiliki nama.",
      },
      example: `const greet = function(name) {\n  return "Hello, " + name + "!";\n};\n\nconsole.log(greet("Bob")); // Outputs: Hello, Bob!`,
      output: `Hello, Bob!`,
      explanation: {
        en: "This function is assigned to a variable 'greet'. It works similarly to the function declaration, but is defined as an expression.",
        id: "Fungsi ini ditetapkan ke variabel 'greet'. Ini bekerja mirip dengan deklarasi fungsi, tetapi didefinisikan sebagai ekspresi.",
      },
      bestUseCase: {
        en: "Useful when you want to assign a function to a variable or pass it as an argument to another function. Also good for creating closures.",
        id: "Berguna ketika Anda ingin menetapkan fungsi ke variabel atau meneruskannya sebagai argumen ke fungsi lain. Juga baik untuk membuat closure.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Arrow Function",
        id: "Fungsi Panah",
      },
      description: {
        en: "Arrow functions provide a shorter syntax for writing function expressions. They don't have their own 'this', arguments, super, or new.target.",
        id: "Fungsi panah menyediakan sintaks yang lebih pendek untuk menulis ekspresi fungsi. Mereka tidak memiliki 'this', arguments, super, atau new.target sendiri.",
      },
      example: `const greet = (name) => {\n  return "Hello, " + name + "!";\n};\n\n// For single expressions, you can omit the curly braces and 'return' keyword\nconst greetShort = name => "Hello, " + name + "!";\n\nconsole.log(greetShort("Charlie")); // Outputs: Hello, Charlie!`,
      output: `Hello, Charlie!`,
      explanation: {
        en: "Arrow functions offer a concise syntax. The 'greetShort' function demonstrates a compact form for single-expression functions.",
        id: "Fungsi panah menawarkan sintaks yang ringkas. Fungsi 'greetShort' mendemonstrasikan bentuk kompak untuk fungsi ekspresi tunggal.",
      },
      bestUseCase: {
        en: "Ideal for short, single-expression functions and when you want to preserve the lexical 'this' binding. Commonly used in functional programming patterns and with array methods.",
        id: "Ideal untuk fungsi ekspresi tunggal yang pendek dan ketika Anda ingin mempertahankan pengikatan 'this' leksikal. Umumnya digunakan dalam pola pemrograman fungsional dan dengan metode array.",
      },
    }),
  ];

  const parametersAndArguments = [
    createCourseItems.createSingleItem({
      title: { en: "Single Parameter", id: "Parameter Tunggal" },
      description: {
        en: "A function with a single parameter",
        id: "Fungsi dengan satu parameter",
      },
      example: `function square(number) {\n  return number * number;\n}\n\nconsole.log(square(5)); // Outputs: 25`,
      output: `25`,
      explanation: {
        en: "This function takes one parameter 'number' and returns its square. When called with 5, it returns 25.",
        id: "Fungsi ini mengambil satu parameter 'number' dan mengembalikan kuadratnya. Ketika dipanggil dengan 5, ia mengembalikan 25.",
      },
      bestUseCase: {
        en: "Ideal for simple operations that require only one input, such as mathematical functions or string manipulations.",
        id: "Ideal untuk operasi sederhana yang hanya memerlukan satu input, seperti fungsi matematika atau manipulasi string.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Multiple Parameters", id: "Parameter Ganda" },
      description: {
        en: "A function with multiple parameters",
        id: "Fungsi dengan beberapa parameter",
      },
      example: `function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(3, 4)); // Outputs: 7`,
      output: `7`,
      explanation: {
        en: "This function takes two parameters 'a' and 'b' and returns their sum. When called with 3 and 4, it returns 7.",
        id: "Fungsi ini mengambil dua parameter 'a' dan 'b' dan mengembalikan jumlahnya. Ketika dipanggil dengan 3 dan 4, ia mengembalikan 7.",
      },
      bestUseCase: {
        en: "Useful for operations that require multiple inputs, like complex calculations or combining different pieces of data.",
        id: "Berguna untuk operasi yang memerlukan beberapa input, seperti perhitungan kompleks atau menggabungkan berbagai bagian data.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Default Parameters", id: "Parameter Default" },
      description: {
        en: "Parameters with default values",
        id: "Parameter dengan nilai default",
      },
      example: `function greet(name = "Guest") {\n  return "Hello, " + name + "!";\n}\n\nconsole.log(greet()); // Outputs: Hello, Guest!\nconsole.log(greet("Alice")); // Outputs: Hello, Alice!`,
      output: `Hello, Guest!\nHello, Alice!`,
      explanation: {
        en: "This function has a default parameter. If no argument is provided, it uses 'Guest' as the default value.",
        id: "Fungsi ini memiliki parameter default. Jika tidak ada argumen yang diberikan, ia menggunakan 'Guest' sebagai nilai default.",
      },
      bestUseCase: {
        en: "Great for functions that can work with optional inputs, providing flexibility while ensuring the function always has a valid input to work with.",
        id: "Bagus untuk fungsi yang dapat bekerja dengan input opsional, memberikan fleksibilitas sambil memastikan fungsi selalu memiliki input yang valid untuk diproses.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Rest Parameters", id: "Parameter Rest" },
      description: {
        en: "Represent an indefinite number of arguments as an array",
        id: "Merepresentasikan jumlah argumen yang tidak terbatas sebagai array",
      },
      example: `function sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\n\nconsole.log(sum(1, 2, 3, 4)); // Outputs: 10`,
      output: `10`,
      explanation: {
        en: "The rest parameter '...numbers' allows the function to accept any number of arguments. It then sums all the provided numbers.",
        id: "Parameter rest '...numbers' memungkinkan fungsi menerima sejumlah argumen. Kemudian ia menjumlahkan semua angka yang diberikan.",
      },
      bestUseCase: {
        en: "Perfect for functions that need to handle a variable number of inputs, such as mathematical operations on an arbitrary set of numbers or combining multiple strings.",
        id: "Sempurna untuk fungsi yang perlu menangani jumlah input yang bervariasi, seperti operasi matematika pada sekumpulan angka yang tidak terbatas atau menggabungkan beberapa string.",
      },
    }),
  ];

  const returnValues = [
    createCourseItems.createSingleItem({
      title: { en: "Returning a Value", id: "Mengembalikan Nilai" },
      description: {
        en: "A function that returns a single value",
        id: "Fungsi yang mengembalikan satu nilai",
      },
      example: `function double(number) {\n  return number * 2;\n}\n\nconsole.log(double(5)); // Outputs: 10`,
      output: `10`,
      explanation: {
        en: "This function takes a number, doubles it, and returns the result. When called with 5, it returns 10.",
        id: "Fungsi ini mengambil sebuah angka, menggandakannya, dan mengembalikan hasilnya. Ketika dipanggil dengan 5, ia mengembalikan 10.",
      },
      bestUseCase: {
        en: "Suitable for simple computations or transformations where a single result is needed.",
        id: "Cocok untuk perhitungan atau transformasi sederhana di mana satu hasil diperlukan.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Returning Multiple Values",
        id: "Mengembalikan Beberapa Nilai",
      },
      description: {
        en: "A function that returns multiple values using an object",
        id: "Fungsi yang mengembalikan beberapa nilai menggunakan objek",
      },
      example: `function getPersonInfo(name, age) {\n  return { name: name, age: age };\n}\n\nconst person = getPersonInfo("Alice", 30);\nconsole.log(person.name); // Outputs: Alice\nconsole.log(person.age); // Outputs: 30`,
      output: `Alice\n30`,
      explanation: {
        en: "This function returns an object containing multiple values. We can then access these values using dot notation.",
        id: "Fungsi ini mengembalikan objek yang berisi beberapa nilai. Kita dapat mengakses nilai-nilai ini menggunakan notasi titik.",
      },
      bestUseCase: {
        en: "Ideal when a function needs to return multiple related pieces of information, such as properties of an entity or results of multiple calculations.",
        id: "Ideal ketika fungsi perlu mengembalikan beberapa informasi terkait, seperti properti dari suatu entitas atau hasil dari beberapa perhitungan.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Early Return", id: "Pengembalian Dini" },
      description: {
        en: "Using return to exit a function early",
        id: "Menggunakan return untuk keluar dari fungsi lebih awal",
      },
      example: `function isEven(number) {\n  if (number % 2 === 0) {\n    return true;\n  }\n  return false;\n}\n\nconsole.log(isEven(4)); // Outputs: true\nconsole.log(isEven(5)); // Outputs: false`,
      output: `true\nfalse`,
      explanation: {
        en: "This function uses an early return to exit as soon as it determines if a number is even. It returns true for 4 and false for 5.",
        id: "Fungsi ini menggunakan pengembalian dini untuk keluar segera setelah menentukan apakah suatu angka genap. Ia mengembalikan true untuk 4 dan false untuk 5.",
      },
      bestUseCase: {
        en: "Useful for conditional logic where you want to exit the function as soon as a condition is met, improving efficiency and readability.",
        id: "Berguna untuk logika kondisional di mana Anda ingin keluar dari fungsi segera setelah kondisi terpenuhi, meningkatkan efisiensi dan keterbacaan.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Returning a Function", id: "Mengembalikan Fungsi" },
      description: {
        en: "A function that returns another function",
        id: "Fungsi yang mengembalikan fungsi lain",
      },
      example: `function multiplier(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\n\nconst double = multiplier(2);\nconsole.log(double(5)); // Outputs: 10`,
      output: `10`,
      explanation: {
        en: "This function returns another function. We create a 'double' function by calling multiplier with 2, then use it to multiply 5 by 2.",
        id: "Fungsi ini mengembalikan fungsi lain. Kita membuat fungsi 'double' dengan memanggil multiplier dengan 2, kemudian menggunakannya untuk mengalikan 5 dengan 2.",
      },
      bestUseCase: {
        en: "Excellent for creating closures, implementing currying, or generating specialized functions based on input parameters.",
        id: "Sangat baik untuk membuat closure, mengimplementasikan currying, atau menghasilkan fungsi khusus berdasarkan parameter input.",
      },
    }),
  ];

  const arrowFunctions = [
    createCourseItems.createSingleItem({
      title: { en: "Simple Arrow Function", id: "Fungsi Panah Sederhana" },
      description: {
        en: "A basic arrow function with a single parameter",
        id: "Fungsi panah dasar dengan satu parameter",
      },
      example: `const square = x => x * x;\n\nconsole.log(square(5)); // Outputs: 25`,
      output: `25`,
      explanation: {
        en: "This concise arrow function takes a single parameter 'x' and returns its square. When called with 5, it returns 25.",
        id: "Fungsi panah ringkas ini mengambil satu parameter 'x' dan mengembalikan kuadratnya. Ketika dipanggil dengan 5, ia mengembalikan 25.",
      },
      bestUseCase: {
        en: "Perfect for short, single-expression functions, especially when used as callbacks or in functional programming patterns.",
        id: "Sempurna untuk fungsi ekspresi tunggal yang pendek, terutama ketika digunakan sebagai callback atau dalam pola pemrograman fungsional.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Multiple Parameters", id: "Parameter Ganda" },
      description: {
        en: "An arrow function with multiple parameters",
        id: "Fungsi panah dengan beberapa parameter",
      },
      example: `const add = (a, b) => a + b;\n\nconsole.log(add(3, 4)); // Outputs: 7`,
      output: `7`,
      explanation: {
        en: "This arrow function takes two parameters 'a' and 'b' and returns their sum. When called with 3 and 4, it returns 7.",
        id: "Fungsi panah ini mengambil dua parameter 'a' dan 'b' dan mengembalikan jumlahnya. Ketika dipanggil dengan 3 dan 4, ia mengembalikan 7.",
      },
      bestUseCase: {
        en: "Ideal for simple operations with multiple inputs, providing a concise syntax for function expressions.",
        id: "Ideal untuk operasi sederhana dengan beberapa input, memberikan sintaks ringkas untuk ekspresi fungsi.",
      },
    }),
    createCourseItems.createSingleItem({
      title: {
        en: "Arrow Function with Block",
        id: "Fungsi Panah dengan Blok",
      },
      description: {
        en: "An arrow function with a block of code",
        id: "Fungsi panah dengan blok kode",
      },
      example: `const greet = name => {\n  const message = "Hello, " + name + "!";\n  return message;\n};\n\nconsole.log(greet("Alice")); // Outputs: Hello, Alice!`,
      output: `Hello, Alice!`,
      explanation: {
        en: "This arrow function uses a block of code. It creates a message and then returns it. When called with 'Alice', it outputs 'Hello, Alice!'.",
        id: "Fungsi panah ini menggunakan blok kode. Ia membuat pesan dan kemudian mengembalikannya. Ketika dipanggil dengan 'Alice', ia menghasilkan 'Hello, Alice!'.",
      },
      bestUseCase: {
        en: "Useful when the function body requires multiple statements or more complex logic while still benefiting from the concise arrow syntax.",
        id: "Berguna ketika badan fungsi memerlukan beberapa pernyataan atau logika yang lebih kompleks sambil tetap mendapatkan manfaat dari sintaks panah yang ringkas.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Returning an Object", id: "Mengembalikan Objek" },
      description: {
        en: "An arrow function that returns an object literal",
        id: "Fungsi panah yang mengembalikan objek literal",
      },
      example: `const createPerson = (name, age) => ({ name, age });\n\nconst person = createPerson("Bob", 30);\nconsole.log(person); // Outputs: { name: "Bob", age: 30 }`,
      output: `{ name: "Bob", age: 30 }`,
      explanation: {
        en: "This arrow function returns an object. The parentheses around the object are necessary to distinguish it from a function body.",
        id: "Fungsi panah ini mengembalikan objek. Tanda kurung di sekitar objek diperlukan untuk membedakannya dari badan fungsi.",
      },
      bestUseCase: {
        en: "Excellent for creating simple factory functions or when you need to return an object literal concisely, often used in React components or when working with data transformations.",
        id: "Sangat baik untuk membuat fungsi pabrik sederhana atau ketika Anda perlu mengembalikan objek literal secara ringkas, sering digunakan dalam komponen React atau ketika bekerja dengan transformasi data.",
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
      currentCourseLink="/courses/javascript/functions"
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
        title={t("whyFunctionsMatter.title")}
        id="why-functions-matter"
        delay={0.7}
        description={t("whyFunctionsMatter.description")}
        icon={PiLightbulbFilamentFill}
      />

      <Single
        id="function-declaration"
        delay={0.8}
        title={t("topics.functionDeclaration.title")}
        language="javascript"
        components={functionDeclarations}
        icon={FaCode}
      />

      <Single
        id="parameters-arguments"
        delay={0.9}
        title={t("topics.parametersArguments.title")}
        language="javascript"
        components={parametersAndArguments}
        icon={FaTerminal}
      />

      <Single
        id="return-values"
        delay={1.0}
        title={t("topics.returnValues.title")}
        language="javascript"
        components={returnValues}
        icon={FaCube}
      />

      <Single
        id="arrow-functions"
        delay={1.1}
        title={t("topics.arrowFunctions.title")}
        language="javascript"
        components={arrowFunctions}
        icon={FaRocket}
      />
    </CourseContainer>
  );
}
