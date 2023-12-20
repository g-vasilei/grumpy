import React from 'react'
import data from '../../data/data'
import Image from 'next/image'
import ShareButtons from '../../components/ShareButtons'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
   title: 'grumpy.gr',
   description: 'Sad and unmotivational quotes',
   keywords: ['Βέροια', 'Ηλεκτρολόγος', 'Ηλεκτρονικός', 'World Οικονομικά'],
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
      <div className='px-5 xl:px-0 w-full max-w-7xl m-auto pt-36 pb-36'>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16'>
            {projects?.map((project, index) => (
               <Link href={`/projects/${project.slug}`} key={index}>
                  <div className='card'>
                     <div className='max-w-[400px]'>
                        <Image src={project.img} alt={project.title} className='rounded-lg' />
                     </div>
                     <div className='text-slate-950 font-semibold text-lg mt-5'>{project.title}</div>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   )
}

export default page
