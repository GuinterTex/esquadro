import { existsSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { seo, URL_DA_LANDING, jsonLd, ogImage } from "./src/site.js";

const faviconPronto = existsSync(new URL("./public/favicon.svg", import.meta.url));

function headEsquadro() {
  return {
    name: "head-esquadro",
    transformIndexHtml(html) {
      const json = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");
      return html
        .replaceAll("__TITLE__", seo.title)
        .replaceAll("__DESCRIPTION__", seo.description)
        .replaceAll("__CANONICAL__", URL_DA_LANDING)
        .replaceAll("__OG_IMAGE__", ogImage())
        .replaceAll("__OG_ALT__", seo.ogAlt)
        .replaceAll(
          "__ICON__",
          faviconPronto
            ? '<link rel="icon" href="/favicon.svg" type="image/svg+xml" /><link rel="icon" href="/assets/favicon-32.png" type="image/png" sizes="32x32" /><link rel="apple-touch-icon" href="/apple-touch-icon.png" />'
            : '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22%3E%3C/svg%3E" />',
        )
        .replaceAll("__JSONLD__", json);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), headEsquadro()],
  server: {
    port: 5173,
    strictPort: true,
  },
});
