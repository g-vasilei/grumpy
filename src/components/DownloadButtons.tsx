'use client'

import { trackDownload } from '../lib/gtagHelper'

export default function DownloadButtons({ id, slug }: { id: number; slug: string }) {
  return (
    <div className='mt-12 flex flex-col gap-5'>
      <a
        href={`/imgs/quotes/quotes-${id}.png`}
        download
        className='border-2 border-main-color rounded-xl px-3 py-2 text-xl font-semibold w-full text-center'
        aria-label={`Download quote image for ${slug}`}
        onClick={() => trackDownload('image', slug)}
      >
        Download Image
      </a>
      <a
        href={`/imgs/story/i-${id}.png`}
        download
        className='border-2 bg-main-color text-white rounded-xl px-[18px] py-[10px] text-xl font-semibold text-center'
        aria-label={`Download Instagram story image for ${slug}`}
        onClick={() => trackDownload('story', slug)}
      >
        Download Insta Story
      </a>
    </div>
  )
}
