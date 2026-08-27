import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { extname, join } from "node:path";

const outputDirectory = fileURLToPath(new URL("../dist/client/", import.meta.url));
const basePath = "/aireco_landing_page";
const textExtensions = new Set([".css", ".html", ".js", ".json", ".rsc"]);
const localAssetPattern = /(["'(])\/(_next\/|aireco-(?:isotipo|logo(?:-inverse)?|project-\d+)\.(?:jpg|png)|fonts\/|favicon\.svg|file\.svg|globe\.svg|og\.png|window\.svg)/g;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(file));
    else if (textExtensions.has(extname(entry.name))) files.push(file);
  }

  return files;
}

const files = await walk(outputDirectory);
let rewrites = 0;

for (const file of files) {
  const original = await readFile(file, "utf8");
  const rewritten = original.replace(localAssetPattern, `$1${basePath}/$2`);
  if (rewritten !== original) {
    await writeFile(file, rewritten);
    rewrites += 1;
  }
}

await writeFile(join(outputDirectory, ".nojekyll"), "");
console.log(`Prepared ${rewrites} static asset file(s) for GitHub Pages.`);
