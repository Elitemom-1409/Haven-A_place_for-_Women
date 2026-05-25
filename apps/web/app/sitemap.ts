import { MetadataRoute } from 'next';
import { BLOGS, COUNTRIES } from './blog/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://haven-newbeginnings.org';

  // Static website paths
  const staticPaths = [
    '',
    '/about',
    '/contact',
    '/services',
    '/resources',
    '/events',
    '/community',
    '/seo-report',
    '/lp/community',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic blog routes (100+ contextual articles)
  const blogPaths = BLOGS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Localized country paths (Target top countries explicitly in sitemap to prevent massive overhead,
  // while programmatic router supports all 190 dynamically)
  const priorityCountries = COUNTRIES.slice(0, 15);
  const countryBlogPaths: MetadataRoute.Sitemap = [];

  priorityCountries.forEach((c) => {
    BLOGS.slice(0, 5).forEach((blog) => {
      countryBlogPaths.push({
        url: `${baseUrl}/blog/local/${c.code.toLowerCase()}/${blog.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });
  });

  return [...staticPaths, ...blogPaths, ...countryBlogPaths];
}
