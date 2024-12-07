import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  codeBlock: string;
  language: string;
}

const CodeBlock = ({ codeBlock, language }: CodeBlockProps) => (
  <Highlight theme={themes.vsDark} code={codeBlock} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className="relative rounded-lg overflow-hidden"
        style={{ ...style, background: "rgb(30, 30, 30)" }}
      >
        <div className="relative">
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line })}
              className="flex hover:bg-gray-800/50 transition-colors"
            >
              <span className="inline-block w-12 px-3 py-1 select-none text-gray-500 text-right border-r border-gray-700">
                {i + 1}
              </span>
              <span className="px-4 py-1">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </div>
      </pre>
    )}
  </Highlight>
);

export default CodeBlock;
