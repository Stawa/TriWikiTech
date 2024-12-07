import * as puppeteer from "puppeteer";
import * as fs from "fs/promises";
import * as path from "path";

const allCourses = {
  javascript: {
    paths: ["", "setup", "first-code", "variables"],
  },
};

async function screenshotElement(
  elementId: string,
  courseName: string,
  pathSegment: string
): Promise<void> {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: true,
    executablePath: puppeteer.executablePath(),
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });

    const url =
      pathSegment === ""
        ? `http://localhost:5173/courses/${courseName}`
        : `http://localhost:5173/courses/${courseName}/${pathSegment}`;

    await page.goto(url, {
      waitUntil: "networkidle0",
    });

    const element = await page.$("#" + elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    const outputDir = "./public/courses/og";
    await fs.mkdir(outputDir, { recursive: true });

    const filename =
      pathSegment === ""
        ? `${courseName}_index_${elementId}.png`
        : `${courseName}_${pathSegment}_${elementId}.png`;

    await element.screenshot({
      path: path.join(outputDir, filename),
      type: "png",
    });

    console.log(`Screenshot saved for ${url}`);
  } catch (error) {
    console.error("Failed to take screenshot:", error);
  } finally {
    await browser.close();
  }
}

async function screenshotAllCourses(): Promise<void> {
  for (const [courseName, courseData] of Object.entries(allCourses)) {
    for (const pathSegment of courseData.paths) {
      await screenshotElement("hero", courseName, pathSegment).catch(
        (error) => {
          console.error(
            `Failed to take screenshot for ${courseName}${
              pathSegment ? "/" + pathSegment : ""
            }:`,
            error
          );
        }
      );
    }
  }
}

screenshotAllCourses();
