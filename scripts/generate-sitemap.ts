import { writeFileSync } from 'fs';
import { rooms } from '../src/data/rooms';
import { packages } from '../src/data/packages';

const BASE_URL = 'https://artgreenteresopolis.com.br';

interface SitemapEntry {
  url: string;
  changefreq: string;
  priority: number;
}

const staticPages: SitemapEntry[] = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/acomodacoes', changefreq: 'weekly', priority: 0.9 },
  { url: '/experiencias', changefreq: 'monthly', priority: 0.8 },
  { url: '/gastronomia', changefreq: 'monthly', priority: 0.7 },
  { url: '/pacotes', changefreq: 'weekly', priority: 0.8 },
  { url: '/contato', changefreq: 'yearly', priority: 0.5 },
];

const roomPages: SitemapEntry[] = rooms
  .filter((r) => !r.hidden)
  .map((room) => ({
    url: `/acomodacoes/${room.slug}`,
    changefreq: 'monthly',
    priority: 0.8,
  }));

const packagePages: SitemapEntry[] = packages.map((pkg) => ({
  url: `/pacotes/${pkg.slug}`,
  changefreq: 'weekly',
  priority: 0.7,
}));

const allPages = [...staticPages, ...roomPages, ...packagePages];
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap, 'utf-8');
console.log(`✓ Sitemap generated with ${allPages.length} URLs → public/sitemap.xml`);
