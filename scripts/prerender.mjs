import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { createServer } from "vite";

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
  const markup = render();
  const file = resolve("dist/index.html");
  const html = readFileSync(file, "utf8").replace(
    '<div id="root"></div>',
    `<div id="root">${markup}</div>`,
  );
  writeFileSync(file, html);
} finally {
  await vite.close();
}
