import { mkdir, readFile, writeFile } from 'node:fs/promises';
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
for (const [route, title] of Object.entries({'bible-studies':'Bible studies', projects:'Projects', ideas:'Ideas', about:'About'})) {
  const directory = new URL(`../dist/${route}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), html.replace('<title>Home — Nathaniel</title>', `<title>${title} — Nathaniel</title>`));
}
console.log('Generated all five static page entry points.');
