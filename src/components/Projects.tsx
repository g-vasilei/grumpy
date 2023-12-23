'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import ReactPaginate from 'react-paginate'

interface Projects {
   title: string
   description: string
   isPinned: boolean
   slug: string
   img: StaticImageData
   seoTitle: string
   seoDescription: string
}

function Projects({ projects }: { projects: Projects[] }) {
   const [input, setInput] = useState('')
   const [itemOffset, setItemOffset] = useState(0)

   const filteredProjects = projects.filter((project) => {
      return project.title.toLowerCase().includes(input.toLowerCase())
   })

   const isPinnedFirst = filteredProjects.sort((a, b) => Number(b.isPinned) - Number(a.isPinned))

   const itemsPerPage = 8
   const endOffset = itemOffset + itemsPerPage
   const currentItems = isPinnedFirst?.slice(itemOffset, endOffset)
   const pageCount = Math.ceil(isPinnedFirst?.length / itemsPerPage)

   // Invoke when user click to request another page.
   const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % isPinnedFirst?.length
      setItemOffset(newOffset)
   }

   return (
      <div className='px-5 xl:px-0 w-full max-w-7xl m-auto pt-36 pb-36'>
         <form className='flex items-center justify-center'>
            <input
               type='text'
               name='title'
               autoComplete='off'
               autoCorrect='off'
               autoCapitalize='off'
               placeholder='search for a project..'
               aria-label='search for a project..'
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className='text-slate-950 px-5 py-3 mb-14 w-full xl:w-1/2 rounded-full border border-main-color'
            />
         </form>

         {currentItems.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-16'>
               {currentItems?.map((project: Projects, index: number) => (
                  <Link href={`/projects/${project.slug}`} key={index}>
                     <div className='card'>
                        <div className='max-w-[400px]'>
                           <Image src={project.img} alt={project.title} className='rounded-lg' />
                        </div>
                        <div className='text-slate-950 font-semibold text-lg mt-5 line-clamp-2'>{project.title}</div>
                     </div>
                  </Link>
               ))}
            </div>
         ) : (
            <div className='text-2xl lg:h-52 lg:text-3xl font-semibold text-center w-full text-slate-950 mt-5 lg:mt-16'>
               we could not find a project with this title 😢
            </div>
         )}
         {filteredProjects.length > 0 && (
            <ReactPaginate
               breakLabel='...'
               nextLabel='>'
               onPageChange={handlePageClick}
               pageRangeDisplayed={5}
               pageCount={pageCount}
               previousLabel='<'
               renderOnZeroPageCount={null}
               className='mt-12 flex items-center gap-2 pagination text-slate-950'
            />
         )}
      </div>
   )
}

export default Projects
