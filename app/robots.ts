import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://www.grupogarza.com.mx/sitemap.xml', // TODO: Actualizar con el dominio real
  };
}
