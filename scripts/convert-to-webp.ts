import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, extname, parse } from 'path';

const PUBLIC_DIR = join(import.meta.dirname, '..', 'public');
const QUALITY = 80;
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

let converted = 0;
let skipped = 0;
let errors = 0;

async function convertFile(filePath: string) {
  const { dir, name, ext } = parse(filePath);
  if (!EXTENSIONS.has(ext.toLowerCase())) return;

  const outPath = join(dir, `${name}.webp`);

  try {
    const meta = await sharp(filePath).metadata();
    const pipeline = sharp(filePath);

    // Keep PNG transparency
    if (ext.toLowerCase() === '.png' && meta.channels === 4) {
      await pipeline.webp({ quality: QUALITY, alphaQuality: 90 }).toFile(outPath);
    } else {
      await pipeline.webp({ quality: QUALITY }).toFile(outPath);
    }

    const origSize = statSync(filePath).size;
    const newSize = statSync(outPath).size;
    const saving = ((1 - newSize / origSize) * 100).toFixed(1);

    console.log(`✓ ${filePath.replace(PUBLIC_DIR, 'public')} → .webp  (${saving}% menor)`);
    converted++;
  } catch (err) {
    console.error(`✗ ${filePath}: ${(err as Error).message}`);
    errors++;
  }
}

function walk(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full));
    } else if (EXTENSIONS.has(extname(full).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  console.log('Buscando imagens JPG/JPEG/PNG em public/...\n');
  const files = walk(PUBLIC_DIR);
  console.log(`Encontradas ${files.length} imagens para converter.\n`);

  for (const file of files) {
    await convertFile(file);
  }

  console.log(`\n--- Resumo ---`);
  console.log(`Convertidas: ${converted}`);
  console.log(`Erros: ${errors}`);
}

main();
