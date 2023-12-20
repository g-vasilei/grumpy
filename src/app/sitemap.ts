import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: 'https://grumpy.gr',
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 1,
      },
      {
         url: 'https://grumpy.gr/projects',
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.8,
      },
      {
         url: 'https://grumpy.gr/contact',
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.5,
      },
   ]
}
