import { MetadataRoute } from 'next';

/**
 * Sitemap XML para SEO
 * Next.js generará automáticamente el archivo sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-landing-fersanz.vercel.app'; // Actualiza con tu dominio personalizado

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}

