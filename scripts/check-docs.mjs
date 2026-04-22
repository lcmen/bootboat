import { readFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';

const files = await Array.fromAsync(glob('website/**/*.html'));
let failed = false;
const errors = [];

for (const file of files) {
  const contents = await readFile(file, 'utf8');

  if (contents.includes('style=')) {
    failed = true;
    errors.push(`${file}: inline style attribute found`);
  }

  if (contents.includes('form-label_required')) {
    failed = true;
    errors.push(`${file}: typo "form-label_required" found; use "form-label-required"`);
  }
}

if (failed) {
  console.error('Docs checks failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

