import * as esbuild from "esbuild";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
await fs.promises.rm(dist, { recursive: true, force: true });
await fs.promises.mkdir(dist, { recursive: true });

await esbuild.build({
  entryPoints: [path.join(root, "src/main.jsx")],
  bundle: true,
  outfile: path.join(dist, "app.js"),
  format: "esm",
  jsx: "automatic",
  loader: { ".js": "jsx" },
  minify: true,
});

const html = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ангелина — Frontend Developer</title>
    <meta name="description" content="Портфолио frontend-разработчика: лендинги, многостраничные сайты, контентные страницы и аккуратная доработка существующих проектов." />
    <link rel="stylesheet" href="./app.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./app.js"></script>
  </body>
</html>
`;

await fs.promises.writeFile(path.join(dist, "index.html"), html, "utf8");
