import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'
import GoogleAnalytics from '../components/GoogleAnalytics'
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

const Header = dynamic(() => import('../components/Header'), {
   ssr: false,
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
   const id = process.env.GA_MEASUREMENT_ID
   return (
      <html lang='en'>
         <GoogleAnalytics GA_MEASUREMENT_ID={id!} />
         <body className={inter.className}>
            <Header />
            <main className='bg-[#F1F1F1]'>{children}</main>
            <Footer />
            <CookieBanner />
            <Toaster position='top-center' />
         </body>
      </html>
   )
}
