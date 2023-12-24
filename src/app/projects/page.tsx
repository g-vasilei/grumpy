import React from 'react'
import data from '../../data/data'
import Projects from '../../components/Projects'

export const metadata = {
   title: 'Projects | grumpy.gr',
   description: 'Search threw our projects',
   keywords: [
      'sad quotes',
      'sadness',
      'melancholy',
      'gloom',
      'despair',
      'depression',
      'mood',
      'emotions',
      'feelings',
      'expression',
      'pessimism',
      'despondency',
      'heartache',
      'woe',
      'downheartedness',
      'tears',
      'misery',
      'hopelessness',
      'wistful',
      'forlorn',
      'dismal',
      'disheartened',
      'morose',
      'bittersweet',
   ],
   alternates: {
      canonical: `https://grumpy.gr/imgs/quotes/quotes-1.png`,
   },
   openGraph: {
      title: 'grumpy.gr',
      description: 'Sad and unmotivational quotes',
      type: 'article',
      url: `https://grumpy.gr/`,
      images: [
         {
            url: 'https://grumpy.gr/imgs/quotes/quotes-1.png',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'grumpy.gr',
      description: 'Sad and unmotivational quotes',
      images: 'https://grumpy.gr/imgs/quotes/quotes-1.png',
   },
}

function page() {
   const { projects } = data
   const reversedProjects = projects.reverse()
   return <Projects projects={reversedProjects} />
}

export default page
