import data from '../../../data/data'
import Image from 'next/image'
import ShareButtons from '../../../components/ShareButtons'
import DownloadButtons from '../../../components/DownloadButtons'
import type { Metadata } from 'next'

type Props = {
   params: Promise<{ slug: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
   const params = await props.params;
   // read route params
   const slug = params.slug

   // fetch data
   const { projects } = data
   const project = projects?.find((currentProject) => currentProject.slug === slug)
   const imgUrl = `https://grumpy.gr/imgs/quotes/quotes-${project?.id}.png`

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

async function page(props: { params: Promise<{ slug: string }> }) {
   const params = await props.params;
   const { projects } = data

   const { slug } = params

   const project = projects?.find((currentProject) => currentProject.slug === slug)
   const imgUrl = `https://grumpy.gr/imgs/quotes/quotes-${project?.id}.png`

   const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: project?.seoTitle,
      description: project?.seoDescription,
      image: imgUrl,
      url: `https://grumpy.gr/projects/${slug}`,
      publisher: {
         '@type': 'Organization',
         name: 'grumpy.gr',
         url: 'https://grumpy.gr',
      },
   }

   return (
      <>
         <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
         <div className='px-5 xl:px-0 pt-36 pb-36 w-full max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2'>
            <div className='m-w-full p-5 xl:p-0'>
               <Image src={project?.img!} priority alt={project?.title ?? 'Quote image'} width={1080} height={1080} />
            </div>
            <div className='p-5 xl:p-12 text-slate-950 mt-10 md:mt-0'>
               <h2 className='text-5xl font-extrabold'>{project?.title}</h2>
               <p className='text-lg mt-5 font-medium'>{project?.description}</p>
               <ShareButtons slug={slug} />
               <DownloadButtons id={project?.id!} slug={slug} />
            </div>
         </div>
      </>
   )
}

export default page
