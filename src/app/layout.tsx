import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GoogleAnalytics from '../components/GoogleAnalytics'
import GoogleTagManager from '../components/GoogleTagManager'
import CookieBanner from '../components/CookieBanner'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'grumpy.gr',
   description: 'Sad and unmotivational quotes',
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


export default function RootLayout({ children }: { children: React.ReactNode }) {
   const id = process.env.GA_MEASUREMENT_ID
   const gtmId = process.env.GTM_ID
   return (
      <html lang='en' suppressHydrationWarning>
         <body className={inter.className} suppressHydrationWarning>
            <Suspense><GoogleAnalytics GA_MEASUREMENT_ID={id!} /></Suspense>
            {gtmId && <GoogleTagManager GTM_ID={gtmId} />}
            <Header />
            <main className='bg-[#F1F1F1]'>{children}</main>
            <Footer />
            <CookieBanner />
            <Toaster position='top-center' />
         </body>
      </html>
   )
}
