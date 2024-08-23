import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/themes/prism-tomorrow.css";

const highlightWithPrism = (code: string, language: string) => {
  return Prism.highlight(code, Prism.languages[language], language);
};

export const CodeEditorWithLineNumbers = ({
  language,
  code,
  setCode,
}: {
  language: string;
  code: string;
  setCode: (code: string) => void;
}) => {
  const lineNumbers = code
    .split("\n")
    .map((_, index) => index + 1)
    .join("\n");

  return (
    <div className="relative flex flex-1">
      <div
        className="border-r-2 rounded-l-lg border-gray-700 text-gray-400 text-right px-3 select-none"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          lineHeight: "1.5rem",
          backgroundColor: "#1e1e1e",
        }}
      >
        <pre style={{ paddingTop: "10px" }}>{lineNumbers}</pre>
      </div>

      <div className="flex-1">
        <Editor
          autoFocus={true}
          className="rounded-r-lg h-full"
          value={code}
          onValueChange={(newCode) => setCode(newCode)}
          highlight={(code) => highlightWithPrism(code, language)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            backgroundColor: "#1e1e1e",
            color: "#dcdcdc",
            lineHeight: "1.5rem",
            minHeight: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
