import { MetadataRoute } from 'next';

/**
 * Generates the XML sitemap for MyBestGuide.
 * This is automatically served at /sitemap.xml by Next.js.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mybestguide.in';
  const currentDate = new Date();

  // Define all public routes with their respective SEO priorities
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/portfolio', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/testimonials', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/book_now', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/careers', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/careers/bde-partner-program', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/careers/bde-partner-program/bde-apply', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/careers/freelancers', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/careers/freelancers/dev-apply', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/careers/technical-support-partner', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/careers/technical-support-partner/support-apply', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/services/e-commerce-development', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/services/mobile-application-development', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/services/erp-saas-development', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/services/odoo-development', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/services/technical-support', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/services/customized-development', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/services/free_website', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'monthly' },
    { url: '/terms-and-conditions', priority: 0.3, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }));
}
