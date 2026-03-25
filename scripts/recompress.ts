import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

interface Job { file: string; width: number; quality: number }

const jobs: Job[] = [
  // IMG_4358/59 - displayed at 665×998, serve at that size
  { file: 'public/IMG_4358.JPG.webp', width: 700, quality: 65 },
  { file: 'public/IMG_4359.JPG.webp', width: 700, quality: 65 },
  // IMG_4357 - displayed at ~1124×749 desktop, 375×360 mobile
  { file: 'public/IMG_4357.JPG.webp', width: 1200, quality: 60 },
  // background - at 5% opacity, more aggressive
  { file: 'public/background.webp', width: 480, quality: 5 },
  // ImmersiveScroll - displayed at 960×1440 mobile. Serve exactly that
  { file: 'public/relaxar.webp', width: 960, quality: 65 },
  { file: 'public/sentir.webp', width: 960, quality: 65 },
  { file: 'public/desacelerar.webp', width: 960, quality: 65 },
  { file: 'public/desconectar.webp', width: 960, quality: 65 },
];

for (const job of jobs) {
  const buf = readFileSync(job.file);
  const out = await sharp(buf)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toBuffer();

  if (out.length < buf.length) {
    writeFileSync(job.file, out);
    const meta = await sharp(out).metadata();
    console.log(`✅ ${job.file.padEnd(35)} ${Math.round(buf.length/1024)}KB → ${Math.round(out.length/1024)}KB (${meta.width}x${meta.height})`);
  } else {
    console.log(`⏭️  ${job.file} — already optimal`);
  }
}
