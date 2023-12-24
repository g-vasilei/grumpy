'use client'

import React from 'react'
import { FacebookShareButton, FacebookIcon } from 'next-share'
import { RedditShareButton, RedditIcon } from 'next-share'
import { TelegramShareButton, TelegramIcon } from 'next-share'
import { TwitterShareButton, TwitterIcon } from 'next-share'
import { ViberShareButton, ViberIcon } from 'next-share'
import { WhatsappShareButton, WhatsappIcon } from 'next-share'
import { FacebookMessengerShareButton, FacebookMessengerIcon } from 'next-share'
import { EmailShareButton, EmailIcon } from 'next-share'

function ShareButtons({ slug }: { slug: string }) {
   return (
      <div className='flex items-center gap-5 flex-wrap mt-5'>
         <FacebookShareButton
            url={`https://grumpy.gr/projects/${slug}`}
            quote={'Sad and unmotivational quotes | grumpy.gr'}
            hashtag={'#grumpy.gr'}
         >
            <FacebookIcon size={32} round />
         </FacebookShareButton>
         <TwitterShareButton
            url={'https://grumpy.gr/projects/${slug}'}
            title={'Sad and unmotivational quotes | grumpy.gr'}
         >
            <TwitterIcon size={32} round />
         </TwitterShareButton>
         <RedditShareButton
            url={'https://grumpy.gr/projects/${slug}'}
            title={'Sad and unmotivational quotes | grumpy.gr'}
         >
            <RedditIcon size={32} round />
         </RedditShareButton>
         <TelegramShareButton
            url={'https://grumpy.gr/projects/${slug}'}
            title={'Sad and unmotivational quotes | grumpy.gr'}
         >
            <TelegramIcon size={32} round />
         </TelegramShareButton>
         <ViberShareButton
            url={'https://grumpy.gr/projects/${slug}'}
            title={'Sad and unmotivational quotes | grumpy.gr'}
         >
            <ViberIcon size={32} round />
         </ViberShareButton>
         <WhatsappShareButton
            url={'https://grumpy.gr/projects/${slug}'}
            title={'Sad and unmotivational quotes | grumpy.gr'}
            separator=':: '
         >
            <WhatsappIcon size={32} round />
         </WhatsappShareButton>
         <FacebookMessengerShareButton url={'https://grumpy.gr/projects/${slug}'} appId={''}>
            <FacebookMessengerIcon size={32} round />
         </FacebookMessengerShareButton>
         <EmailShareButton url={'https://grumpy.gr/projects/${slug}'} subject={'Next Share'} body='body'>
            <EmailIcon size={32} round />
         </EmailShareButton>
      </div>
   )
}

export default ShareButtons
