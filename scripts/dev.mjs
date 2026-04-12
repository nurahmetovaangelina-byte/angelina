import * as esbuild from "esbuild";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

function writeIndex() {
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
  fs.mkdirSync(dist, { recursive: true });
  fs.writeFileSync(path.join(dist, "index.html"), html, "utf8");
}

const ctx = await esbuild.context({
  entryPoints: [path.join(root, "src/main.jsx")],
  bundle: true,
  outfile: path.join(dist, "app.js"),
  format: "esm",
  jsx: "automatic",
  loader: { ".js": "jsx" },
  sourcemap: true,
});

await ctx.rebuild();
writeIndex();
await ctx.watch();

spawn("npx", ["serve", "dist", "-l", "5173"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
});
