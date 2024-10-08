const Languages = [
  {
    title: "JavaScript",
    name: "JavaScript",
    description: {
      en: "Versatile language for interactive web development.",
      id: "Bahasa serbaguna untuk pengembangan web interaktif.",
    },
    compiler: { href: "/compiler/javascript", available: false },
    wiki: { href: "/courses/javascript", available: true },
    image: "/lang/JS.svg",
    color: "from-yellow-400 to-yellow-600",
    link: "/courses/javascript",
  },
  {
    title: "C",
    name: "C",
    description: {
      en: "Low-level language for system programming.",
      id: "Bahasa tingkat rendah untuk pemrograman sistem.",
    },
    compiler: { href: "/compiler/c", available: false },
    wiki: { href: "/courses/c", available: true },
    image: "/lang/C.svg",
    color: "from-blue-400 to-blue-600",
    link: "/courses/c",
  },
  {
    title: "C++",
    name: "CPP",
    description: {
      en: "C extension with object-oriented features.",
      id: "Ekstensi C dengan fitur berorientasi objek.",
    },
    compiler: { href: "/compiler/cpp", available: false },
    wiki: { href: "/courses/cpp", available: true },
    image: "/lang/CPP.svg",
    color: "from-indigo-400 to-indigo-600",
    link: "/courses/cpp",
  },
];

export default Languages;
