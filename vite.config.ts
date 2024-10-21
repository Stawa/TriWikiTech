import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import { envOnlyMacros } from "vite-env-only";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/cloudflare" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  process.env.VITE_NODE_ENV =
    mode === "production" ? "production" : "development";

  return {
    plugins: [
      envOnlyMacros(),
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
        },
      }),
      tsconfigPaths(),
    ],
    ssr: {
      resolve: {
        conditions: ["workerd", "worker", "browser"],
      },
    },
    resolve: {
      mainFields: ["browser", "module", "main"],
    },
    build: {
      outDir: "build",
      chunkSizeWarningLimit: 1000,
    },
  };
});
