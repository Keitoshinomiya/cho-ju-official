import type { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import { products } from '@/lib/products';

const BASE_URL = 'https://cho-ju.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.1 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.id}`,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const postPages: MetadataRoute.Sitemap = getSortedPostsData().map((post) => {
    const lastModified =
      post.date && !Number.isNaN(Date.parse(post.date)) ? new Date(post.date) : undefined;
    return {
      url: `${BASE_URL}/blog/${post.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...productPages, ...postPages];
}
