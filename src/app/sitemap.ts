import { MetadataRoute } from 'next'
import data from '../data/data'

export default function sitemap(): MetadataRoute.Sitemap {
   const projectPages = data.projects.map((project) => ({
      url: `https://grumpy.gr/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
   }))

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
      ...projectPages,
      {
         url: 'https://grumpy.gr/story',
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.6,
      },
      {
         url: 'https://grumpy.gr/contact',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 0.5,
      },
      {
         url: 'https://grumpy.gr/support-us',
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
      {
         url: 'https://grumpy.gr/terms',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 0.3,
      },
      {
         url: 'https://grumpy.gr/privacy',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 0.3,
      },
      {
         url: 'https://grumpy.gr/cookies',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 0.3,
      },
   ]
}
