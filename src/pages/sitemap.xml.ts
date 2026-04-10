import { getCollection } from 'astro:content';

// Get all projects and blog posts
const allProjects = await getCollection('projects');
const allBlogPosts = await getCollection('blog');

// Main pages with proper priorities
const pages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/blog', priority: 0.9, changefreq: 'weekly' },
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
    <loc>https://codeamus.dev/projects/${project.data.slug}</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
    <lastmod>${project.data.updatedDate ? project.data.updatedDate.toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
    )
    .join('')}
  ${allBlogPosts
    .map(
      (post) => `
  <url>
    <loc>https://codeamus.dev/blog/${post.slug}</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
    <lastmod>${post.data.updatedDate ? post.data.updatedDate.toISOString().split('T')[0] : post.data.pubDate.toISOString().split('T')[0]}</lastmod>
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
