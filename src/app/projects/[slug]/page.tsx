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
   const imgUrl = `https://grumpy.gr/`

   // optionally access and extend (rather than replace) parent metadata
   const previousImages = (await parent).openGraph?.images || []

   return {
      title: project?.title,
      description: project?.description,
      alternates: {
         canonical: `https://grumpy.gr/projects/${slug}`,
         //  languages: {
         //     'en-US': '/en-US',
         //     'el-GR': '/el-GR',
         //  },
      },
      openGraph: {
         title: project?.title,
         description: project?.description,
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
         title: project?.title,
         description: project?.description,
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
         <div className='pt-36 pb-36 w-full max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2'>
            <div className='m-w-full p-5 xl:p-0'>
               <Image src={project?.img!} priority alt='Project Image' />
            </div>
            <div className='p-5 xl:p-12 text-slate-950 mt-10'>
               <h2 className='text-5xl font-extrabold'>{project?.title}</h2>
               <p className='text-lg mt-5 font-medium'>{project?.description}</p>
               <ShareButtons slug={slug} />
            </div>
         </div>
      </>
   )
}

export default page
