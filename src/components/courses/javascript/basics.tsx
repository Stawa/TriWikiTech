"use client";

import CourseContainer from "@components/courses/container";
import Courses from "@components/courses/javascript/navigation";
import { Single } from "@components/courses/template/single";
import { Variables } from "@components/courses/template/variable";
import { DataTypes } from "@components/courses/template/types";
import CreateCourseItems from "@components/courses/create";

import { FaCode, FaCube, FaTerminal } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { Locale } from "@default/i18n/config";

export default function JavaScriptBasics() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Component.Courses.JavaScript.Basics");

  const createCourseItems = new CreateCourseItems({ language: locale });

  const variableTypes = [
    createCourseItems.createVariableItem({
      title: {
        en: "var (Function/Global Scope)",
        id: "var (Lingkup Fungsi/Global)",
      },
      description: {
        en: "To create a variable using 'var' in JavaScript, you declare it with the 'var' keyword. 'var' creates variables that are either function-scoped or globally-scoped.",
        id: "Untuk membuat variabel menggunakan 'var' di JavaScript, Anda mendeklarasikannya dengan kata kunci 'var'. 'var' membuat variabel yang memiliki lingkup fungsi atau global.",
      },
      steps: [
        { en: "Use the 'var' keyword", id: "Gunakan kata kunci 'var'" },
        {
          en: "Choose a descriptive variable name",
          id: "Pilih nama variabel yang deskriptif",
        },
        {
          en: "Optionally, initialize the variable with a value",
          id: "Opsional, inisialisasi variabel dengan nilai",
        },
        {
          en: "Be aware of function or global scope",
          id: "Perhatikan lingkup fungsi atau global",
        },
      ],
      example:
        "// Using var (function-scoped or globally-scoped)\nvar x = 10;\nif (true) {\n  var x = 20; // This will overwrite the previous x\n}\nconsole.log(x); // Outputs 20\n\n// Caution: var can lead to unexpected behavior due to hoisting\nconsole.log(y); // Outputs undefined, not an error\nvar y = 5;",
      explanation: {
        en: "Variables declared with 'var' are function-scoped or globally-scoped. This means they are accessible throughout the entire function they're declared in, or globally if declared outside any function. 'var' variables are also hoisted, which means their declarations (but not initializations) are moved to the top of their scope.",
        id: "Variabel yang dideklarasikan dengan 'var' memiliki lingkup fungsi atau global. Ini berarti mereka dapat diakses di seluruh fungsi tempat mereka dideklarasikan, atau secara global jika dideklarasikan di luar fungsi. Variabel 'var' juga mengalami hoisting, yang berarti deklarasi mereka (tetapi bukan inisialisasi) dipindahkan ke bagian atas lingkup mereka.",
      },
      wrongExample:
        '// Incorrect usage of var\nvar 123abc = "invalid name"; // Invalid: starts with a number\nvar function = "reserved word"; // Invalid: uses a reserved keyword\nvar globalVar = "avoid globals"; // Caution: creates a global variable',
      wrongExplanation: {
        en: "In the wrong examples, '123abc' is an invalid variable name as it starts with a number. 'function' is a reserved word in JavaScript and can't be used as a variable name. Creating global variables with 'var' outside of functions (like 'globalVar') is generally discouraged as it can lead to naming conflicts and hard-to-debug code.",
        id: "Dalam contoh yang salah, '123abc' adalah nama variabel yang tidak valid karena dimulai dengan angka. 'function' adalah kata yang dicadangkan dalam JavaScript dan tidak dapat digunakan sebagai nama variabel. Membuat variabel global dengan 'var' di luar fungsi (seperti 'globalVar') umumnya tidak disarankan karena dapat menyebabkan konflik penamaan dan kode yang sulit di-debug.",
      },
      tips: [
        {
          en: "Avoid using 'var' in modern JavaScript; prefer 'let' or 'const'",
          id: "Hindari penggunaan 'var' dalam JavaScript modern; lebih baik gunakan 'let' atau 'const'",
        },
        {
          en: "Be cautious of function scope and hoisting behavior",
          id: "Berhati-hatilah dengan lingkup fungsi dan perilaku hoisting",
        },
        {
          en: "Don't rely on global variables created with 'var'",
          id: "Jangan mengandalkan variabel global yang dibuat dengan 'var'",
        },
        {
          en: "Use meaningful variable names",
          id: "Gunakan nama variabel yang bermakna",
        },
      ],
      syntax: {
        en: "var [VARIABLE_NAME] = [VALUE];",
        id: "var [NAMA_VARIABEL] = [NILAI];",
      },
    }),
    createCourseItems.createVariableItem({
      title: { en: "let (Block Scope)", id: "let (Lingkup Blok)" },
      description: {
        en: "To create a variable using 'let' in JavaScript, you declare it with the 'let' keyword. 'let' creates block-scoped variables.",
        id: "Untuk membuat variabel menggunakan 'let' di JavaScript, Anda mendeklarasikannya dengan kata kunci 'let'. 'let' membuat variabel yang memiliki lingkup blok.",
      },
      steps: [
        { en: "Use the 'let' keyword", id: "Gunakan kata kunci 'let'" },
        {
          en: "Choose a descriptive variable name",
          id: "Pilih nama variabel yang deskriptif",
        },
        {
          en: "Optionally, initialize the variable with a value",
          id: "Opsional, inisialisasi variabel dengan nilai",
        },
        {
          en: "Remember that 'let' is block-scoped",
          id: "Ingat bahwa 'let' memiliki lingkup blok",
        },
        {
          en: "Use 'let' for variables that will be reassigned",
          id: "Gunakan 'let' untuk variabel yang akan diassign ulang",
        },
      ],
      example:
        "// Using let (block-scoped)\nlet count = 0;\nif (true) {\n  let count = 1; // This creates a new variable, doesn't affect outer count\n  console.log(count); // Outputs 1\n}\nconsole.log(count); // Outputs 0\n\n// Proper use: let for variables that will be reassigned\nlet score = 75;\nscore = score + 25; // Now score is 100\nconsole.log(score); // Outputs 100",
      explanation: {
        en: "'let' declares variables that are block-scoped, meaning they are only accessible within the nearest set of curly braces {} where they are declared. This prevents accidental modifications of variables outside the current block. 'let' allows reassignment, making it useful for variables whose values need to change over time.",
        id: "'let' mendeklarasikan variabel yang memiliki lingkup blok, artinya mereka hanya dapat diakses dalam set kurung kurawal {} terdekat tempat mereka dideklarasikan. Ini mencegah modifikasi tidak sengaja terhadap variabel di luar blok saat ini. 'let' memungkinkan reassignment, membuatnya berguna untuk variabel yang nilainya perlu berubah seiring waktu.",
      },
      wrongExample:
        "// Incorrect usage of let\nlet x = 5;\nlet x = 10; // Error: can't redeclare block-scoped variable\n{\n  console.log(y); // Error: can't use before declaration\n  let y = 20;\n}\nconsole.log(y); // Error: y is not defined in this scope",
      wrongExplanation: {
        en: "In the wrong examples, redeclaring 'x' with 'let' in the same scope causes an error. Trying to use 'y' before its declaration within the same block also causes an error, as 'let' doesn't hoist like 'var'. Attempting to access 'y' outside its block scope results in an error because 'let' variables are not accessible outside their block.",
        id: "Dalam contoh yang salah, mendeklarasikan ulang 'x' dengan 'let' dalam lingkup yang sama menyebabkan error. Mencoba menggunakan 'y' sebelum deklarasinya dalam blok yang sama juga menyebabkan error, karena 'let' tidak mengalami hoisting seperti 'var'. Mencoba mengakses 'y' di luar lingkup bloknya menghasilkan error karena variabel 'let' tidak dapat diakses di luar blok mereka.",
      },
      tips: [
        {
          en: "Use 'let' for variables that will be reassigned",
          id: "Gunakan 'let' untuk variabel yang akan diassign ulang",
        },
        {
          en: "Remember that 'let' is block-scoped",
          id: "Ingat bahwa 'let' memiliki lingkup blok",
        },
        {
          en: "Don't redeclare variables with 'let' in the same scope",
          id: "Jangan mendeklarasikan ulang variabel dengan 'let' dalam lingkup yang sama",
        },
        {
          en: "Initialize 'let' variables before using them",
          id: "Inisialisasi variabel 'let' sebelum menggunakannya",
        },
      ],
      syntax: {
        en: "let [VARIABLE_NAME] = [VALUE];",
        id: "let [NAMA_VARIABEL] = [NILAI];",
      },
    }),
    createCourseItems.createVariableItem({
      title: {
        en: "const (Block Scope, Immutable)",
        id: "const (Lingkup Blok, Tidak Dapat Diubah)",
      },
      description: {
        en: "To create a constant variable in JavaScript, you declare it with the 'const' keyword. 'const' creates block-scoped variables that cannot be reassigned.",
        id: "Untuk membuat variabel konstan di JavaScript, Anda mendeklarasikannya dengan kata kunci 'const'. 'const' membuat variabel yang memiliki lingkup blok dan tidak dapat diassign ulang.",
      },
      steps: [
        { en: "Use the 'const' keyword", id: "Gunakan kata kunci 'const'" },
        {
          en: "Choose a descriptive variable name (often in UPPER_CASE for true constants)",
          id: "Pilih nama variabel yang deskriptif (sering dalam HURUF_BESAR untuk konstanta sejati)",
        },
        {
          en: "Initialize the variable with a value (required)",
          id: "Inisialisasi variabel dengan nilai (wajib)",
        },
        {
          en: "Use 'const' for values that shouldn't change throughout your program",
          id: "Gunakan 'const' untuk nilai yang tidak boleh berubah sepanjang program Anda",
        },
        {
          en: "Always initialize 'const' variables when declaring them",
          id: "Selalu inisialisasi variabel 'const' saat mendeklarasikannya",
        },
      ],
      example:
        "// Using const (block-scoped, cannot be reassigned)\nconst PI = 3.14159;\n// PI = 3.14; // This would cause an error\n\n// Note: const for objects and arrays (their properties can be modified)\nconst user = { name: 'John', age: 30 };\nuser.age = 31; // This is allowed\nconsole.log(user);\n\n// user = { name: 'Jane' }; // This would cause an error\n\n// Best practice: Use const for variables that won't be reassigned\nconst DAYS_IN_WEEK = 7; // Correct usage of const\nconsole.log(DAYS_IN_WEEK);",
      explanation: {
        en: "'const' declares variables that are block-scoped and cannot be reassigned after initialization. For primitive values, this means the value cannot be changed at all. For objects and arrays, while the reference cannot be changed, the contents can still be modified. This makes 'const' ideal for declaring constants or variables that shouldn't be reassigned.",
        id: "'const' mendeklarasikan variabel yang memiliki lingkup blok dan tidak dapat diassign ulang setelah inisialisasi. Untuk nilai primitif, ini berarti nilai tersebut tidak dapat diubah sama sekali. Untuk objek dan array, meskipun referensinya tidak dapat diubah, isinya masih dapat dimodifikasi. Ini membuat 'const' ideal untuk mendeklarasikan konstanta atau variabel yang tidak boleh diassign ulang.",
      },
      wrongExample:
        "// Incorrect usage of const\nconst X; // Error: missing initializer in const declaration\nconst Y = 10;\nY = 20; // Error: assignment to a constant variable\n{\n  console.log(Z); // Error: cannot access 'Z' before initialization\n  const Z = 30;\n}\nconsole.log(Z); // Error: Z is not defined in this scope",
      wrongExplanation: {
        en: "In the wrong examples, declaring 'X' without initialization is an error as 'const' requires immediate initialization. Attempting to reassign 'Y' causes an error because 'const' variables cannot be reassigned. Trying to use 'Z' before its declaration within the same block causes an error, and attempting to access 'Z' outside its block scope results in an error because 'const' variables are not accessible outside their block.",
        id: "Dalam contoh yang salah, mendeklarasikan 'X' tanpa inisialisasi adalah error karena 'const' memerlukan inisialisasi langsung. Mencoba untuk mengassign ulang 'Y' menyebabkan error karena variabel 'const' tidak dapat diassign ulang. Mencoba menggunakan 'Z' sebelum deklarasinya dalam blok yang sama menyebabkan error, dan mencoba mengakses 'Z' di luar lingkup bloknya menghasilkan error karena variabel 'const' tidak dapat diakses di luar blok mereka.",
      },
      tips: [
        {
          en: "Use 'const' as your default choice when declaring variables",
          id: "Gunakan 'const' sebagai pilihan default Anda saat mendeklarasikan variabel",
        },
        {
          en: "Always initialize 'const' variables when declaring them",
          id: "Selalu inisialisasi variabel 'const' saat mendeklarasikannya",
        },
        {
          en: "Remember that 'const' prevents reassignment, not modification of object properties",
          id: "Ingat bahwa 'const' mencegah reassignment, bukan modifikasi properti objek",
        },
        {
          en: "Use 'const' for values that shouldn't change throughout your program",
          id: "Gunakan 'const' untuk nilai yang tidak boleh berubah sepanjang program Anda",
        },
      ],
      syntax: {
        en: "const [VARIABLE_NAME] = [VALUE];",
        id: "const [NAMA_VARIABEL] = [NILAI];",
      },
    }),
  ];

  const consoleLogExamples = [
    createCourseItems.createSingleItem({
      title: { en: "Basic Output", id: "Output Dasar" },
      description: {
        en: "console.log() is a function in JavaScript that outputs a message to the web console. It's one of the most basic and commonly used debugging tools.",
        id: "console.log() adalah fungsi dalam JavaScript yang menghasilkan pesan ke konsol web. Ini adalah salah satu alat debugging paling dasar dan umum digunakan.",
      },
      example: "console.log('Hello, World!');",
      output: "Hello, World!",
      explanation: {
        en: "This is the simplest use of console.log(). It's often used as a first step in learning a new programming language. In JavaScript, you can use it to quickly check if your code is running or to see the value of a variable at a specific point in your program.",
        id: "Ini adalah penggunaan paling sederhana dari console.log(). Sering digunakan sebagai langkah pertama dalam mempelajari bahasa pemrograman baru. Dalam JavaScript, Anda dapat menggunakannya untuk memeriksa dengan cepat apakah kode Anda berjalan atau untuk melihat nilai variabel pada titik tertentu dalam program Anda.",
      },
      bestUseCase: {
        en: "Use this for quick debugging, verifying if a script is running, or outputting simple messages during development.",
        id: "Gunakan ini untuk debugging cepat, memverifikasi apakah skrip berjalan, atau menghasilkan pesan sederhana selama pengembangan.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Multiple Arguments", id: "Beberapa Argumen" },
      description: {
        en: "console.log() can take multiple arguments, which will be printed out separated by spaces.",
        id: "console.log() dapat menerima beberapa argumen, yang akan dicetak terpisah oleh spasi.",
      },
      example: "console.log('Name:', 'Alice', 'Age:', 30);",
      output: "Name: Alice Age: 30",
      explanation: {
        en: "When you pass multiple arguments to console.log(), it will print them all out in order, separated by spaces. This is useful for logging multiple values at once or for adding labels to your log outputs to make them more readable.",
        id: "Ketika Anda melewatkan beberapa argumen ke console.log(), itu akan mencetak semuanya secara berurutan, dipisahkan oleh spasi. Ini berguna untuk mencatat beberapa nilai sekaligus atau untuk menambahkan label ke output log Anda agar lebih mudah dibaca.",
      },
      bestUseCase: {
        en: "Ideal for logging multiple related pieces of information at once, or for creating more descriptive debug outputs.",
        id: "Ideal untuk mencatat beberapa informasi terkait sekaligus, atau untuk membuat output debug yang lebih deskriptif.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Variable Output", id: "Output Variabel" },
      description: {
        en: "One of the most common uses of console.log() is to output the value of variables for debugging purposes.",
        id: "Salah satu penggunaan paling umum dari console.log() adalah untuk menghasilkan nilai variabel untuk tujuan debugging.",
      },
      example: `let x = 5;
console.log('The value of x is:', x);`,
      output: "The value of x is: 5",
      explanation: {
        en: "Here, we're using console.log() to print out both a string and the value of a variable. This is extremely useful when debugging, as it allows you to see the current state of your variables at different points in your code execution.",
        id: "Di sini, kita menggunakan console.log() untuk mencetak baik string maupun nilai variabel. Ini sangat berguna saat debugging, karena memungkinkan Anda melihat keadaan terkini variabel Anda pada titik-titik berbeda dalam eksekusi kode Anda.",
      },
      bestUseCase: {
        en: "Perfect for tracking the value of variables throughout your code, especially in loops or complex functions.",
        id: "Sempurna untuk melacak nilai variabel di seluruh kode Anda, terutama dalam loop atau fungsi kompleks.",
      },
    }),
    createCourseItems.createSingleItem({
      title: { en: "Object Output", id: "Output Objek" },
      description: {
        en: "console.log() can also be used to output complex data structures like objects. This is particularly useful for inspecting the properties of an object.",
        id: "console.log() juga dapat digunakan untuk menghasilkan struktur data kompleks seperti objek. Ini sangat berguna untuk memeriksa properti suatu objek.",
      },
      example: `let person = { name: 'Bob', age: 25 };
console.log(person);`,
      output: "{ name: 'Bob', age: 25 }",
      explanation: {
        en: "When you pass an object to console.log(), it will display the object's properties and their values. In most browser consoles, you can even expand the object to explore nested properties. This is invaluable when working with complex data structures or API responses.",
        id: "Ketika Anda melewatkan objek ke console.log(), itu akan menampilkan properti objek dan nilainya. Di sebagian besar konsol browser, Anda bahkan dapat memperluas objek untuk menjelajahi properti bersarang. Ini sangat berharga saat bekerja dengan struktur data kompleks atau respons API.",
      },
      bestUseCase: {
        en: "Excellent for inspecting complex objects, debugging API responses, or understanding the structure of nested data.",
        id: "Sangat baik untuk memeriksa objek kompleks, men-debug respons API, atau memahami struktur data bersarang.",
      },
    }),
  ];

  const dataTypes = [
    {
      type: "Primitive",
      examples: [
        createCourseItems.createDataTypeItem({
          title: { en: "Number", id: "Number" },
          description: {
            en: "The Number type in JavaScript represents both integer and floating-point numbers. It's used for any kind of numeric value.",
            id: "Tipe Number dalam JavaScript merepresentasikan baik bilangan bulat maupun bilangan pecahan. Ini digunakan untuk segala jenis nilai numerik.",
          },
          example:
            "let age = 25;\nlet pi = 3.14;\nconsole.log(typeof age, age);\nconsole.log(typeof pi, pi);",
          output: "number 25\nnumber 3.14",
          explanation: {
            en: "In JavaScript, there's no distinction between integers and floating-point numbers at the language level. Both are simply of type 'number'. This simplifies numeric operations but can sometimes lead to precision issues with very large numbers or complex calculations.",
            id: "Dalam JavaScript, tidak ada perbedaan antara bilangan bulat dan bilangan pecahan pada tingkat bahasa. Keduanya hanya bertipe 'number'. Ini menyederhanakan operasi numerik tetapi terkadang dapat menyebabkan masalah presisi dengan angka yang sangat besar atau perhitungan kompleks.",
          },
          dataType: "Number",
          range:
            "-(2^53 - 1) to (2^53 - 1) for integers, and approximately ±1.8e308 for floating-point numbers",
          size: "64 bits (8 bytes)",
          bestUseCase: {
            en: "Use for any numeric calculations, counters, or representing quantities in your application.",
            id: "Gunakan untuk perhitungan numerik, penghitung, atau merepresentasikan kuantitas dalam aplikasi Anda.",
          },
        }),
        createCourseItems.createDataTypeItem({
          title: { en: "String", id: "String" },
          description: {
            en: "The String type represents textual data. It's used for storing and manipulating text.",
            id: "Tipe String merepresentasikan data tekstual. Ini digunakan untuk menyimpan dan memanipulasi teks.",
          },
          example:
            "let name = 'John';\nlet greeting = `Hello, ${name}`;\nconsole.log(typeof name, name);\nconsole.log(typeof greeting, greeting);",
          output: "string John\nstring Hello, John",
          explanation: {
            en: "Strings in JavaScript can be created using single quotes, double quotes, or backticks. Backticks allow for template literals, which can include expressions inside ${} placeholders. This is very useful for creating dynamic strings.",
            id: "String dalam JavaScript dapat dibuat menggunakan tanda kutip tunggal, tanda kutip ganda, atau backtick. Backtick memungkinkan penggunaan template literal, yang dapat menyertakan ekspresi di dalam placeholder ${}. Ini sangat berguna untuk membuat string dinamis.",
          },
          dataType: "String",
          range: "Can contain 0 to 2^53 - 1 elements",
          size: "Each character is 16 bits (2 bytes)",
          bestUseCase: {
            en: "Use for storing and manipulating text data, such as names, messages, or any textual content in your application.",
            id: "Gunakan untuk menyimpan dan memanipulasi data teks, seperti nama, pesan, atau konten tekstual apa pun dalam aplikasi Anda.",
          },
        }),
        createCourseItems.createDataTypeItem({
          title: { en: "Boolean", id: "Boolean" },
          description: {
            en: "The Boolean type represents a logical entity and can have only two values: true or false. It's often used in conditional statements and comparisons.",
            id: "Tipe Boolean merepresentasikan entitas logis dan hanya dapat memiliki dua nilai: true atau false. Ini sering digunakan dalam pernyataan kondisional dan perbandingan.",
          },
          example:
            "let isActive = true;\nlet isLoggedIn = false;\nconsole.log(typeof isActive, isActive);\nconsole.log(typeof isLoggedIn, isLoggedIn);",
          output: "boolean true\nboolean false",
          explanation: {
            en: "Booleans are fundamental for control flow in programming. They're often the result of comparisons (like x > y) and are used in if statements, while loops, and other conditional structures.",
            id: "Boolean sangat fundamental untuk alur kontrol dalam pemrograman. Mereka sering menjadi hasil dari perbandingan (seperti x > y) dan digunakan dalam pernyataan if, loop while, dan struktur kondisional lainnya.",
          },
          dataType: "Boolean",
          range: "Only two possible values: true or false",
          size: "1 bit (but typically stored as 1 byte for alignment)",
          bestUseCase: {
            en: "Use for conditional logic, flags, or any situation where you need to represent a binary state (on/off, yes/no, true/false).",
            id: "Gunakan untuk logika kondisional, flag, atau situasi apa pun di mana Anda perlu merepresentasikan keadaan biner (hidup/mati, ya/tidak, benar/salah).",
          },
        }),
        createCourseItems.createDataTypeItem({
          title: { en: "Undefined", id: "Undefined" },
          description: {
            en: "Undefined represents a variable that has been declared but hasn't been assigned a value yet.",
            id: "Undefined merepresentasikan variabel yang telah dideklarasikan tetapi belum diberi nilai.",
          },
          example: "let x;\nconsole.log(typeof x, x);",
          output: "undefined undefined",
          explanation: {
            en: "Undefined is automatically assigned to variables that have been declared but not initialized. It's also the value returned by functions that don't explicitly return anything.",
            id: "Undefined secara otomatis diberikan ke variabel yang telah dideklarasikan tetapi belum diinisialisasi. Ini juga merupakan nilai yang dikembalikan oleh fungsi yang tidak secara eksplisit mengembalikan apa pun.",
          },
          dataType: "Undefined",
          range: "Only one possible value: undefined",
          bestUseCase: {
            en: "Use to check if a variable has been assigned a value, or to explicitly indicate that a variable or object property has no assigned value.",
            id: "Gunakan untuk memeriksa apakah suatu variabel telah diberi nilai, atau untuk secara eksplisit menunjukkan bahwa suatu variabel atau properti objek tidak memiliki nilai yang ditetapkan.",
          },
        }),
        createCourseItems.createDataTypeItem({
          title: { en: "Null", id: "Null" },
          description: {
            en: "Null represents a deliberate non-value or absence of any object value. It's often used to signify 'no value' or 'unknown value'.",
            id: "Null merepresentasikan nilai non-nilai yang disengaja atau ketiadaan nilai objek apa pun. Ini sering digunakan untuk menandakan 'tidak ada nilai' atau 'nilai tidak diketahui'.",
          },
          example: "let empty = null;\nconsole.log(typeof empty, empty);",
          output: "object null",
          explanation: {
            en: "Interestingly, typeof null returns 'object', which is actually a long-standing bug in JavaScript. Despite this, null is not an object, but a primitive value. It's often used to explicitly indicate that a variable intentionally has no value.",
            id: "Menariknya, typeof null mengembalikan 'object', yang sebenarnya merupakan bug lama dalam JavaScript. Meskipun demikian, null bukanlah objek, melainkan nilai primitif. Ini sering digunakan untuk secara eksplisit menunjukkan bahwa suatu variabel sengaja tidak memiliki nilai.",
          },
          dataType: "Null",
          range: "Only one possible value: null",
          bestUseCase: {
            en: "Use to explicitly indicate that a variable or object property has no value or is intentionally empty, especially when you want to distinguish from undefined.",
            id: "Gunakan untuk secara eksplisit menunjukkan bahwa suatu variabel atau properti objek tidak memiliki nilai atau sengaja kosong, terutama ketika Anda ingin membedakannya dari undefined.",
          },
        }),
        createCourseItems.createDataTypeItem({
          title: { en: "Symbol", id: "Symbol" },
          description: {
            en: "Symbol is a unique and immutable primitive value and may be used as the key of an Object property. It was introduced in ECMAScript 2015.",
            id: "Symbol adalah nilai primitif yang unik dan tidak dapat diubah dan dapat digunakan sebagai kunci properti Objek. Ini diperkenalkan dalam ECMAScript 2015.",
          },
          example:
            "const id = Symbol('id');\nlet user = { [id]: 1 };\nconsole.log(typeof id, id);\nconsole.log(user);",
          output: "symbol Symbol(id)\n{ [Symbol(id)]: 1 }",
          explanation: {
            en: "Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object. They're not enumerable in for...in iterations, which makes them useful for storing metadata about objects.",
            id: "Symbol sering digunakan untuk menambahkan kunci properti unik ke objek yang tidak akan bertabrakan dengan kunci yang mungkin ditambahkan oleh kode lain ke objek tersebut. Mereka tidak dapat dihitung dalam iterasi for...in, yang membuatnya berguna untuk menyimpan metadata tentang objek.",
          },
          dataType: "Symbol",
          range: "Each Symbol value is unique and immutable",
          bestUseCase: {
            en: "Use for creating unique identifiers for object properties, especially when you want to avoid naming conflicts in objects or add non-string property keys.",
            id: "Gunakan untuk membuat pengidentifikasi unik untuk properti objek, terutama ketika Anda ingin menghindari konflik penamaan dalam objek atau menambahkan kunci properti non-string.",
          },
        }),
      ],
    },
    {
      type: "Object",
      examples: [
        createCourseItems.createDataTypeItem({
          title: { en: "Object", id: "Object" },
          description: {
            en: "Objects are used to store collections of data and more complex entities. They can contain properties and methods.",
            id: "Objek digunakan untuk menyimpan kumpulan data dan entitas yang lebih kompleks. Mereka dapat berisi properti dan metode.",
          },
          example:
            "let person = { name: 'Alice', age: 30 };\nconsole.log(typeof person, person);",
          output: "object { name: 'Alice', age: 30 }",
          explanation: {
            en: "Objects are one of the most important data types in JavaScript. They allow you to store keyed collections of various data and more complex entities. Objects can be created using the object literal notation (as shown) or with the Object() constructor.",
            id: "Objek adalah salah satu tipe data terpenting dalam JavaScript. Mereka memungkinkan Anda menyimpan kumpulan berbagai data dan entitas yang lebih kompleks dengan kunci. Objek dapat dibuat menggunakan notasi literal objek (seperti yang ditunjukkan) atau dengan konstruktor Object().",
          },
          dataType: "Object",
          range:
            "Can contain any number of properties, limited only by available memory",
          size: "Varies depending on content",
          bestUseCase: {
            en: "Use for storing and organizing related data and functionality together, representing complex entities, or creating custom data structures in your application.",
            id: "Gunakan untuk menyimpan dan mengorganisir data dan fungsionalitas terkait bersama-sama, merepresentasikan entitas kompleks, atau membuat struktur data kustom dalam aplikasi Anda.",
          },
        }),
        createCourseItems.createDataTypeItem({
          title: { en: "Array", id: "Array" },
          description: {
            en: "Arrays are used to store multiple values in a single variable. They are objects that contain a list of items.",
            id: "Array digunakan untuk menyimpan beberapa nilai dalam satu variabel. Mereka adalah objek yang berisi daftar item.",
          },
          example:
            "let fruits = ['apple', 'banana', 'orange'];\nconsole.log(typeof fruits, fruits);",
          output: "object [ 'apple', 'banana', 'orange' ]",
          explanation: {
            en: "Arrays in JavaScript are actually objects, which is why typeof returns 'object'. They have numeric keys and a length property. Arrays are very versatile and have many built-in methods for manipulation and iteration.",
            id: "Array dalam JavaScript sebenarnya adalah objek, itulah sebabnya typeof mengembalikan 'object'. Mereka memiliki kunci numerik dan properti length. Array sangat serbaguna dan memiliki banyak metode bawaan untuk manipulasi dan iterasi.",
          },
          dataType: "Array",
          range: "Can contain 0 to 2^32 - 1 elements",
          size: "Varies depending on content",
          bestUseCase: {
            en: "Use for storing and manipulating lists of data, especially when you need ordered collections or want to perform operations on multiple values at once.",
            id: "Gunakan untuk menyimpan dan memanipulasi daftar data, terutama ketika Anda membutuhkan koleksi terurut atau ingin melakukan operasi pada beberapa nilai sekaligus.",
          },
        }),
        createCourseItems.createDataTypeItem({
          title: { en: "Function", id: "Function" },
          description: {
            en: "Functions are reusable blocks of code that perform a specific task. In JavaScript, functions are first-class objects.",
            id: "Fungsi adalah blok kode yang dapat digunakan kembali yang melakukan tugas tertentu. Dalam JavaScript, fungsi adalah objek kelas pertama.",
          },
          example:
            "function greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(typeof greet, greet);\nconsole.log(greet('Alice'));",
          output: "function [Function: greet]\nHello, Alice!",
          explanation: {
            en: "Functions in JavaScript are objects, but they have a special typeof result: 'function'. They can be assigned to variables, passed as arguments to other functions, and even have properties and methods of their own. This makes JavaScript a very flexible language for functional programming.",
            id: "Fungsi dalam JavaScript adalah objek, tetapi mereka memiliki hasil typeof khusus: 'function'. Mereka dapat ditetapkan ke variabel, dilewatkan sebagai argumen ke fungsi lain, dan bahkan memiliki properti dan metode sendiri. Ini membuat JavaScript menjadi bahasa yang sangat fleksibel untuk pemrograman fungsional.",
          },
          dataType: "Function",
          range: "Can contain any valid JavaScript code",
          size: "Varies depending on the function's code",
          bestUseCase: {
            en: "Use for creating reusable blocks of code, implementing behaviors, handling events, or organizing your code into modular, maintainable units.",
            id: "Gunakan untuk membuat blok kode yang dapat digunakan kembali, mengimplementasikan perilaku, menangani event, atau mengorganisir kode Anda menjadi unit modular yang dapat dipelihara.",
          },
        }),
      ],
    },
  ];

  const topics = [
    {
      title: t("topics.consolelog.title"),
      description: t("topics.consolelog.description"),
      id: "basic-printing",
      icon: FaTerminal,
    },
    {
      title: t("topics.variables.title"),
      description: t("topics.variables.description"),
      id: "variables",
      icon: FaCode,
    },
    {
      title: t("topics.dataTypes.title"),
      description: t("topics.dataTypes.description"),
      id: "data-types",
      icon: FaCube,
    },
  ];

  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: t("title") }}
      courses={Courses(locale)}
      currentCourseLink="/courses/javascript/basics"
      translations={t}
      topics={topics}
      whyIsItMatter={{
        translations: "whyBasicsMatter",
        id: "why-basics-matter",
      }}
    >
      <Single
        title={t("topics.consolelog.title")}
        id="basic-printing"
        delay={0.8}
        components={consoleLogExamples}
        language="javascript"
        icon={FaTerminal}
      />

      <Variables
        id="variables"
        delay={0.9}
        title={t("topics.variables.title")}
        icon={FaCode}
        variables={variableTypes}
      />

      <DataTypes
        id="data-types"
        delay={1.0}
        title={t("topics.dataTypes.title")}
        icon={FaCube}
        language="javascript"
        content={dataTypes}
      />
    </CourseContainer>
  );
}
