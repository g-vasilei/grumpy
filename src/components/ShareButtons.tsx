'use client'

import { FacebookShareButton, FacebookIcon } from 'next-share'
import { RedditShareButton, RedditIcon } from 'next-share'
import { TelegramShareButton, TelegramIcon } from 'next-share'
import { TwitterShareButton, TwitterIcon } from 'next-share'
import { ViberShareButton, ViberIcon } from 'next-share'
import { WhatsappShareButton, WhatsappIcon } from 'next-share'
import { FacebookMessengerShareButton, FacebookMessengerIcon } from 'next-share'
import { EmailShareButton, EmailIcon } from 'next-share'
import { trackShare } from '../lib/gtagHelper'

function ShareButtons({ slug }: { slug: string }) {
   const url = `https://grumpy.gr/projects/${slug}`
   const title = 'Sad and unmotivational quotes | grumpy.gr'

   return (
      <div className='flex items-center gap-5 flex-wrap mt-5' aria-label='Share this quote'>
         <FacebookShareButton url={url} quote={title} hashtag={'#grumpy.gr'} onClick={() => trackShare('facebook', slug)}>
            <FacebookIcon size={32} round aria-label='Share on Facebook' />
         </FacebookShareButton>
         <TwitterShareButton url={url} title={title} onClick={() => trackShare('twitter', slug)}>
            <TwitterIcon size={32} round aria-label='Share on Twitter' />
         </TwitterShareButton>
         <RedditShareButton url={url} title={title} onClick={() => trackShare('reddit', slug)}>
            <RedditIcon size={32} round aria-label='Share on Reddit' />
         </RedditShareButton>
         <TelegramShareButton url={url} title={title} onClick={() => trackShare('telegram', slug)}>
            <TelegramIcon size={32} round aria-label='Share on Telegram' />
         </TelegramShareButton>
         <ViberShareButton url={url} title={title} onClick={() => trackShare('viber', slug)}>
            <ViberIcon size={32} round aria-label='Share on Viber' />
         </ViberShareButton>
         <WhatsappShareButton url={url} title={title} separator=':: ' onClick={() => trackShare('whatsapp', slug)}>
            <WhatsappIcon size={32} round aria-label='Share on WhatsApp' />
         </WhatsappShareButton>
         <FacebookMessengerShareButton url={url} appId={''} onClick={() => trackShare('messenger', slug)}>
            <FacebookMessengerIcon size={32} round aria-label='Share on Messenger' />
         </FacebookMessengerShareButton>
         <EmailShareButton url={url} subject={title} body='Check out this quote on grumpy.gr' onClick={() => trackShare('email', slug)}>
            <EmailIcon size={32} round aria-label='Share via Email' />
         </EmailShareButton>
      </div>
   )
}

export default ShareButtons
