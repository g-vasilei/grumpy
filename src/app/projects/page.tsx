import React from 'react'
import data from '../../data/data'
import Projects from '../../components/Projects'

export const metadata = {
   title: 'Projects | grumpy.gr',
   description: 'Sad and unmotivational quotes',
   keywords: ['grumpy', 'grumpy.gr', 'sad', 'unmotivational', 'happy to be sad'],
   alternates: {
      canonical: `https://grumpy.gr/projects/`,
   },
   openGraph: {
      title: 'grumpy.gr',
      description: 'Sad and unmotivational quotes',
      type: 'article',
      url: `https://grumpy.gr/`,
      images: [
         {
            url: 'https://www.grumpy.gr/_next/static/media/logo-4.768153dc.svg',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'grumpy.gr',
      description: 'Sad and unmotivational quotes',
      images: 'https://www.grumpy.gr/_next/static/media/logo-4.768153dc.svg',
   },
}

function page() {
   const { projects } = data
   return (
      <Projects projects={projects} />
   )
}

export default page
