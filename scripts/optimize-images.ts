import sharp from 'sharp';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const PUBLIC_DIR = join(import.meta.dirname, '..', 'public');

interface ImageOpts { width: number; height?: number; quality?: number }

// Images with their TARGET sizes based on actual display dimensions (2x retina max)
const RESIZE_MAP: Record<string, ImageOpts> = {
  // ImmersiveScroll — mobile 960×1440, desktop 668×1001. Target: 1200×1800 (covers both)
  'relaxar.webp':       { width: 1200, height: 1800, quality: 65 },
  'sentir.webp':        { width: 1200, height: 1800, quality: 65 },
  'desacelerar.webp':   { width: 1200, height: 1800, quality: 65 },
  'desconectar.webp':   { width: 1200, height: 1800, quality: 65 },

  // AboutSection carousel — mobile ~375×360, desktop ~1124×749. Target: 1200 wide
  'IMG_4357.JPG.webp':  { width: 1200, quality: 65 },
  'IMG_4358.JPG.webp':  { width: 1200, quality: 65 },
  'IMG_4359.JPG.webp':  { width: 1200, quality: 65 },

  // Background texture — displayed at 5% opacity, aggressive compression
  'background.webp':    { width: 1920, quality: 20 },

  // Logo — displayed max 245×77 → 490×154 for retina (already correct, just recompress)
  'logo.webp':          { width: 310, quality: 75 },

  // Pinheiro — small decoration
  'pinheiro.webp':      { width: 168, quality: 70 },

  // Fazendinha images
  'fazendinha (1).webp': { width: 800, quality: 65 },
  'fazendinha (2).webp': { width: 800, quality: 65 },
  'fazendinha (3).webp': { width: 800, quality: 65 },
  'fazendinha (4).webp': { width: 800, quality: 65 },
  'fazendinha (5).webp': { width: 800, quality: 65 },
  'fazendinha (6).webp': { width: 800, quality: 65 },
  'fazendinha (7).webp': { width: 800, quality: 65 },
  'fazendinha (8).webp': { width: 800, quality: 65 },

  // Other root images
  'musica-ao-vivo.webp': { width: 800, quality: 65 },
  'logo-artcucina.webp': { width: 128, quality: 75 },
  'evento.webp':         { width: 800, quality: 65 },
};

// Servicos images — displayed at ~h-[700px] or card sizes. Target: 800 wide
const SERVICOS_OPTS: ImageOpts = { width: 800, quality: 60 };

// Experiencias images — displayed at hero (h-dvh) or split (h-[700px]). Target: 1200 wide
const EXPERIENCIAS_OPTS: ImageOpts = { width: 1200, quality: 60 };

async function optimizeImage(filePath: string, opts: ImageOpts, label: string) {
  try {
    const inputBuffer = readFileSync(filePath);
    const originalSize = inputBuffer.length;
    const meta = await sharp(inputBuffer).metadata();

    const buffer = await sharp(inputBuffer)
      .resize({
        width: opts.width,
        height: opts.height,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: opts.quality ?? 65 })
      .toBuffer();

    // Only write if we actually saved space
    if (buffer.length >= originalSize) {
      console.log(`⏭️  ${label} — já otimizado (${Math.round(originalSize / 1024)}KB)`);
      return 0;
    }

    writeFileSync(filePath, buffer);

    const newSize = buffer.length;
    const saved = originalSize - newSize;
    const pct = ((1 - newSize / originalSize) * 100).toFixed(1);
    const newMeta = await sharp(buffer).metadata();

    console.log(
      `✅ ${label.padEnd(40)} ${meta.width}x${meta.height} → ${newMeta.width}x${newMeta.height}` +
      `  |  ${Math.round(originalSize / 1024)}KB → ${Math.round(newSize / 1024)}KB  (${pct}% menor)`
    );
    return saved;
  } catch (err) {
    console.error(`❌ ${label}: ${(err as Error).message}`);
    return 0;
  }
}

async function main() {
  console.log('🖼️  Otimizando todas as imagens...\n');
  let totalSaved = 0;

  // 1. Root public/ images from RESIZE_MAP
  console.log('── public/ ──');
  for (const [filename, opts] of Object.entries(RESIZE_MAP)) {
    totalSaved += await optimizeImage(join(PUBLIC_DIR, filename), opts, filename);
  }

  // 2. Servicos directory
  console.log('\n── servicos/ ──');
  const servicosDir = join(PUBLIC_DIR, 'servicos');
  for (const file of readdirSync(servicosDir).filter(f => f.endsWith('.webp'))) {
    totalSaved += await optimizeImage(join(servicosDir, file), SERVICOS_OPTS, `servicos/${file}`);
  }

  // 3. Experiencias directory
  console.log('\n── experiencias/ ──');
  const expDir = join(PUBLIC_DIR, 'experiencias');
  for (const file of readdirSync(expDir).filter(f => f.endsWith('.webp'))) {
    totalSaved += await optimizeImage(join(expDir, file), EXPERIENCIAS_OPTS, `experiencias/${file}`);
  }

  console.log(`\n📊 Total economizado: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

main();
