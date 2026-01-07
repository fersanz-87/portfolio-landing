import { MetadataRoute } from 'next';

/**
 * Web App Manifest para PWA y SEO
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fer Sanz Desarrollo Web',
    short_name: 'Fer Sanz',
    description: 'Portfolio profesional de Fer Sanz - Desarrollador Web Full Stack',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

