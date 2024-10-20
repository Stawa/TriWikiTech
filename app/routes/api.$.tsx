import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import fs from "fs";
import path from "path";

const apiDirectory = path.join(process.cwd(), "app", "api");
const apiFiles = fs
  .readdirSync(apiDirectory)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
  .map((file) => file.replace(/\.(ts|tsx)$/, ""));

interface ApiHandlers {
  [key: string]: {
    loader?: LoaderFunction;
    action?: ActionFunction;
  };
}

async function loadApiModules(): Promise<ApiHandlers> {
  const apiHandlers: ApiHandlers = {};

  await Promise.all(
    apiFiles.map(async (file) => {
      try {
        const module = await import(`../api/${file}.ts`);
        apiHandlers[`/api/${file}`] = {};
        if (module.loader && typeof module.loader === "function") {
          apiHandlers[`/api/${file}`].loader = module.loader;
        }
        if (module.action && typeof module.action === "function") {
          apiHandlers[`/api/${file}`].action = module.action;
        }
      } catch (error) {
        console.error(`Error importing API module ${file}:`, error);
      }
    })
  );

  return apiHandlers;
}

const apiHandlersPromise = loadApiModules();

export const loader: LoaderFunction = async ({ request, params, context }) => {
  const url = new URL(request.url);
  const path = url.pathname;

  const apiHandlers = await apiHandlersPromise;
  const matchedHandler = apiHandlers[path];

  if (matchedHandler && matchedHandler.loader) {
    return matchedHandler.loader({ request, params, context });
  }

  return json(
    {
      error: "API endpoint not found",
      availableEndpoints: Object.keys(apiHandlers),
    },
    { status: 404 }
  );
};

export const action: ActionFunction = async ({ request, params, context }) => {
  const url = new URL(request.url);
  const path = url.pathname;

  const apiHandlers = await apiHandlersPromise;
  const matchedHandler = apiHandlers[path];

  if (matchedHandler && matchedHandler.action) {
    return matchedHandler.action({ request, params, context });
  }

  return json(
    {
      error: "API action not found",
      availableEndpoints: Object.keys(apiHandlers),
    },
    { status: 404 }
  );
};
