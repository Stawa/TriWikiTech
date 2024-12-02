import type { LoaderFunction } from "@remix-run/node";
import { Browser as CoreBrowser } from "puppeteer-core";
import { Browser } from "puppeteer";
import { Config } from "tailwindcss";
import chromium from "@sparticuz/chromium";
import aspectRatio from "@tailwindcss/aspect-ratio";
import { OpenGraph as OpenGraphImageFirstCode } from "~/og/JavaScript/FirstCode";

const OpenGraphs = {
  FirstCode: OpenGraphImageFirstCode,
};

const tailwindConfig: Config = {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
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

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const banner =
    (url.searchParams.get("banner") as keyof typeof OpenGraphs) || "FirstCode";
  let browser: Browser | CoreBrowser;

  try {
    if (process.env.NODE_ENV === "production") {
      const puppeteer = await import("puppeteer-core");
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      const puppeteer = await import("puppeteer");
      browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        // @ts-ignore
        headless: "new",
      });
    }

    const page = await browser.newPage();

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <script>
            tailwind.config = ${JSON.stringify(tailwindConfig)}
          </script>
        </head>
        <body>
          ${OpenGraphs[banner]()}
        </body>
      </html>
    `;

    await page.setContent(html);
    await page.setViewport({ width: 1200, height: 630 });

    const imageBuffer = await page.screenshot({ type: "png" });

    await browser.close();

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Error generating OG image", { status: 500 });
  }
};
