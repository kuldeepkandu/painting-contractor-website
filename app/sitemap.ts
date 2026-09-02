import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

const routes = [
  '',
  '/about',
  '/services',
  '/portfolio',
  '/colors',
  '/estimator',
  '/reviews',
  '/faq',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route || '/', siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' || route === '/services' ? 0.9 : 0.7,
  }))
}
