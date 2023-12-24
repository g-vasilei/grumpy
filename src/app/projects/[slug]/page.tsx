import React from 'react'
import data from '../../../data/data'
import Image from 'next/image'
import ShareButtons from '../../../components/ShareButtons'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
   params: { slug: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
   // read route params
   const slug = params.slug

   // fetch data
   const { projects } = data
   const project = projects?.find((currentProject) => currentProject.slug === slug)
   const imgUrl = `https://grumpy.gr/imgs/quotes/quotes-${project?.id}.png`

   // optionally access and extend (rather than replace) parent metadata
   const previousImages = (await parent).openGraph?.images || []

   return {
      title: project?.seoTitle,
      description: project?.seoDescription,
      alternates: {
         canonical: `https://grumpy.gr/projects/${slug}`,
         languages: {
            'en-US': '/en-US',
         },
      },
      openGraph: {
         title: project?.seoTitle,
         description: project?.seoDescription,
         type: 'article',
         url: `https://grumpy.gr/projects/${slug}`,
         images: [
            {
               url: imgUrl,
            },
         ],
      },
      twitter: {
         card: 'summary_large_image',
         title: project?.seoTitle,
         description: project?.seoDescription,
         images: [imgUrl],
      },
   }
}

function page({ params }: { params: { slug: string } }) {
   const { projects } = data

   const { slug } = params

   const project = projects?.find((currentProject) => currentProject.slug === slug)

   return (
      <>
         <div className='px-5 xl:px-0 pt-36 pb-36 w-full max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2'>
            <div className='m-w-full p-5 xl:p-0'>
               <Image src={project?.img!} priority alt='Project Image' />
            </div>
            <div className='p-5 xl:p-12 text-slate-950 mt-10'>
               <h2 className='text-5xl font-extrabold'>{project?.title}</h2>
               <p className='text-lg mt-5 font-medium'>{project?.description}</p>
               <ShareButtons slug={slug} />
               <div className='mt-12 flex flex-col gap-5'>
                  <a
                     href={`/imgs/quotes/quotes-${project?.id}.png`}
                     download
                     className='border-2 border-main-color rounded-xl px-3 py-2 text-xl font-semibold w-full  text-center'
                  >
                     Download Image
                  </a>
                  <a
                     href={`/imgs/story/i-${project?.id}.png`}
                     download
                     className='border-2 bg-main-color text-white rounded-xl px-[18px] py-[10px] text-xl font-semibold text-center'
                  >
                     Download Insta Story
                  </a>
               </div>
            </div>
         </div>
      </>
   )
}

export default page
