import https from 'https';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const urls = [
  { name: 'galeria-1', url: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg' },
  { name: 'galeria-2', url: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG' },
  { name: 'galeria-3', url: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg' },
  { name: 'galeria-4', url: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg' },
];

async function download(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const follow = (u: string) => {
      https.get(u, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          follow(res.headers.location!);
          return;
        }
        const chunks: Buffer[] = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      }).on('error', reject);
    };
    follow(url);
  });
}

const dir = path.join('public', 'galeria');
fs.mkdirSync(dir, { recursive: true });

for (const item of urls) {
  const buf = await download(item.url);
  console.log(`Downloaded ${item.name}: ${Math.round(buf.length / 1024)}KB`);

  // Convert to WebP, resize to 400px (displayed at ~326px, 2x would be 652 but gallery is tiny)
  const out = await sharp(buf)
    .resize({ width: 400, withoutEnlargement: true })
    .webp({ quality: 70 })
    .toBuffer();

  const dest = path.join(dir, `${item.name}.webp`);
  fs.writeFileSync(dest, out);
  console.log(`  -> ${item.name}.webp: ${Math.round(out.length / 1024)}KB`);
}

console.log('\nDone!');
