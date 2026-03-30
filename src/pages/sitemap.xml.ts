import { getCollection } from 'astro:content';

// Get all projects for dynamic URLs
const allProjects = await getCollection('projects');

// Main pages
const pages = [
  { url: '', priority: 1.0, changefreq: 'weekly' },
  { url: '#servicios', priority: 0.9, changefreq: 'monthly' },
  { url: '#proyectos', priority: 0.9, changefreq: 'weekly' },
  { url: '#como-trabajo', priority: 0.7, changefreq: 'monthly' },
  { url: '#contacto', priority: 0.8, changefreq: 'monthly' },
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>https://codeamus.dev${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
    )
    .join('')}
  ${allProjects
    .map(
      (project) => `
  <url>
    <loc>https://codeamus.dev/projects/${project.id}</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
    )
    .join('')}
</urlset>`;

export async function GET() {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
