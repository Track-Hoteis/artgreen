import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const buf = readFileSync('public/background.webp');
const out = await sharp(buf).resize(480).webp({ quality: 10, nearLossless: false }).toBuffer();
writeFileSync('public/background.webp', out);
console.log(`Before: ${Math.round(buf.length/1024)}KB -> After: ${Math.round(out.length/1024)}KB`);
