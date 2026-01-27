import { MetadataRoute } from 'next';
import { financeSolutions, hrSolutions } from '@/lib/solutions';
import { caseStudies } from '@/lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aitivate.com';
  const locales = ['en', 'zh-HK'];
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [];

  // Generate routes for each locale
  locales.forEach((locale) => {
    // Home page
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    });

    // Solutions hub
    routes.push({
      url: `${baseUrl}/${locale}/solutions`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // Finance category
    routes.push({
      url: `${baseUrl}/${locale}/solutions/account-finance`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // Finance solutions
    financeSolutions.forEach((solution) => {
      routes.push({
        url: `${baseUrl}/${locale}/solutions/account-finance/${solution.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });

    // HR category
    routes.push({
      url: `${baseUrl}/${locale}/solutions/human-resources`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // HR solutions
    hrSolutions.forEach((solution) => {
      routes.push({
        url: `${baseUrl}/${locale}/solutions/human-resources/${solution.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });

    // Case studies hub
    routes.push({
      url: `${baseUrl}/${locale}/case-studies`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // Individual case studies
    caseStudies.forEach((cs) => {
      routes.push({
        url: `${baseUrl}/${locale}/case-studies/${cs.slug}`,
        lastModified: new Date(cs.datePublished),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // Static pages
    routes.push({
      url: `${baseUrl}/${locale}/technology`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    });

    routes.push({
      url: `${baseUrl}/${locale}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    });

    routes.push({
      url: `${baseUrl}/${locale}/events`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.5,
    });
  });

  return routes;
}
