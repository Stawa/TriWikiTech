import * as puppeteer from "puppeteer";
import { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";
import * as fs from "fs/promises";
import * as path from "path";
import { OpenGraphs } from "./og/Index";

const tailwindConfig: Config = {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "9 / 16",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [aspectRatio],
};

async function generateOpenGraphImage(
  banner: keyof typeof OpenGraphs,
  type: string
): Promise<void> {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: true,
    executablePath: puppeteer.executablePath(),
  });
  const outputDir = "./public/courses/og";
  const theme = "dark";

  try {
    const page = await browser.newPage();
    const htmlContent = `
      <!DOCTYPE html>
      <html class="${theme}">
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <script>
            tailwind.config = ${JSON.stringify(tailwindConfig)}
          </script>
          <style>
            @tailwind base;
            @tailwind components;
            @tailwind utilities;

            :root {
              --background: #ffffff;
              --foreground: #171717;
            }
            :root.dark {
              --background: #0a0a0a;
              --foreground: #ededed;
            }
            body {
              color: var(--foreground);
              background: var(--background);
            }
          </style>
        </head>
        <body>
          ${OpenGraphs[banner].og}
        </body>
      </html>
    `;

    await page.setContent(htmlContent, { waitUntil: "networkidle0" });
    await page.setViewport({ width: 1200, height: 630 });

    const imageBuffer = await page.screenshot({ type: "png" });

    await fs.mkdir(outputDir, { recursive: true });
    const fileName = `${banner}_${type}.png`;
    await fs.writeFile(path.join(outputDir, fileName), imageBuffer);
  } catch (error) {
    console.error("Failed to generate Open Graph image:", error);
  } finally {
    await browser.close();
  }
}

async function generateAllOpenGraphImages(): Promise<void> {
  for (const [key, value] of Object.entries(OpenGraphs)) {
    await generateOpenGraphImage(key as keyof typeof OpenGraphs, value.type);
  }

  console.log("Open Graph images generated successfully.");
}

generateAllOpenGraphImages();
