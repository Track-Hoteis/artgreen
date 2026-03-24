import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join } from 'path';

const PUBLIC_DIR = join(import.meta.dirname, '..', 'public');

// Images flagged by PageSpeed with their max display sizes (2x for retina)
const RESIZE_MAP: Record<string, { width: number; height?: number; quality?: number }> = {
  // ImmersiveScrollSection images — displayed at 960×1440 max → 1920×2880 for retina
  'relaxar.webp':       { width: 1920, height: 2880, quality: 70 },
  'sentir.webp':        { width: 1920, height: 2880, quality: 70 },
  'desacelerar.webp':   { width: 1920, height: 2880, quality: 70 },
  'desconectar.webp':   { width: 1920, height: 2880, quality: 70 },

  // AboutSection carousel images — displayed at ~1123×749 max → 2246×1500 for retina
  'IMG_4357.JPG.webp':  { width: 2246, quality: 70 },
  'IMG_4358.JPG.webp':  { width: 1330, quality: 70 },  // displayed 665×998
  'IMG_4359.JPG.webp':  { width: 1330, quality: 70 },  // displayed 665×998

  // Background — just recompress with lower quality
  'background.webp':    { width: 1920, quality: 50 },

  // Logo — displayed at max 245×77 → 490×154 for retina
  'logo.webp':          { width: 490, quality: 80 },

  // Pinheiro decoration — displayed at max 84×122 → 168×244 for retina
  'pinheiro.webp':      { width: 168, quality: 80 },

  // Fazendinha images — large gallery images
  'fazendinha (1).webp': { width: 1200, quality: 70 },
  'fazendinha (2).webp': { width: 1200, quality: 70 },
  'fazendinha (3).webp': { width: 800, quality: 70 },
  'fazendinha (4).webp': { width: 800, quality: 70 },
  'fazendinha (5).webp': { width: 800, quality: 70 },
  'fazendinha (6).webp': { width: 800, quality: 70 },
  'fazendinha (7).webp': { width: 800, quality: 70 },
  'fazendinha (8).webp': { width: 1200, quality: 70 },

  // Other large images
  'musica-ao-vivo.webp': { width: 1200, quality: 70 },
  'logo-artcucina.webp': { width: 600, quality: 75 },
  'evento.webp':         { width: 1200, quality: 70 },
};

async function main() {
  console.log('🖼️  Otimizando imagens WebP...\n');
  let totalSaved = 0;

  for (const [filename, opts] of Object.entries(RESIZE_MAP)) {
    const filePath = join(PUBLIC_DIR, filename);

    try {
      const { readFileSync, writeFileSync } = await import('fs');
      const inputBuffer = readFileSync(filePath);
      const originalSize = inputBuffer.length;
      const meta = await sharp(inputBuffer).metadata();

      // Skip if already smaller than target
      if (meta.width && meta.width <= opts.width) {
        console.log(`⏭️  ${filename} — já está em ${meta.width}x${meta.height}, pulando`);
        continue;
      }

      const buffer = await sharp(inputBuffer)
        .resize({
          width: opts.width,
          height: opts.height,
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: opts.quality ?? 75 })
        .toBuffer();

      writeFileSync(filePath, buffer);

      const newSize = buffer.length;
      const saved = originalSize - newSize;
      const pct = ((1 - newSize / originalSize) * 100).toFixed(1);
      totalSaved += saved;

      const newMeta = await sharp(buffer).metadata();
      console.log(
        `✅ ${filename.padEnd(25)} ${meta.width}x${meta.height} → ${newMeta.width}x${newMeta.height}` +
        `  |  ${Math.round(originalSize / 1024)}KB → ${Math.round(newSize / 1024)}KB  (${pct}% menor)`
      );
    } catch (err) {
      console.error(`❌ ${filename}: ${(err as Error).message}`);
    }
  }

  console.log(`\n📊 Total economizado: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

main();
