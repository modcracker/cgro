import { MetadataRoute } from 'next';
import { seoPages } from '@/lib/seoData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.calgro.com';

  const staticPages = [
    '',
    '/agronomy',
    '/california-growers',
    '/calculus-growth',
    '/grocers',
    '/calibration-group',
    '/calcium-physiology',
    '/domain-asset',
    '/seo-directory',
    '/calcium-groves',
    '/california-greenhouses',
  ].map((route) => {
    // Dynamic home page or detail pages
    const isHome = route === '';
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: (isHome ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: isHome ? 1.0 : 0.8,
    };
  });

  const dynamicPages = seoPages.map((page) => ({
    url: `${baseUrl}/seo-directory/${page.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...dynamicPages];
}
