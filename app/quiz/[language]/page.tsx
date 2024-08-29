import LanguageQuiz from "./LanguageQuiz.tsx";

export async function generateStaticParams() {
  return [
    { language: "python" },
    { language: "javascript" },
    { language: "c" },
    { language: "cpp" },
  ];
}

export default function Page({ params }: { params: { language: string } }) {
  return <LanguageQuiz params={params} />;
}
