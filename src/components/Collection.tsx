'use client'

import React from 'react'
import data from '../data/data'
import Link from 'next/link'
import Image from 'next/image'

function Collection() {
   const { projects } = data
   return (
      <div className='px-5 xlg:px-0 w-full max-w-7xl m-auto pt-36 pb-36'>
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

export default Collection
