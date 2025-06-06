import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: [
                '/api/',
                '/_next/',
                '/static/',
            ],
        },
        sitemap: `${siteConfig.url.production}${siteConfig.paths.sitemap}`,
        host: siteConfig.url.production,
    };
}
