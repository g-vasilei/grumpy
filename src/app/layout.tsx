import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'
import GoogleAnalytics from '../components/GoogleAnalytics'
import CookieBanner from '../components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'grumpy.gr',
   description: 'Sad and unmotivational quotes',
   keywords: ['Βέροια', 'Ηλεκτρολόγος', 'Ηλεκτρονικός', 'World Οικονομικά'],
   alternates: {
      canonical: `https://grumpy.gr/projects/`,
   },
   openGraph: {
      title: 'grumpy.gr',
      description: 'Sad and unmotivational quotes',
      type: 'article',
      url: `https://grumpy.gr/`,
      images: [
         {
            url: 'https://www.grumpy.gr/_next/static/media/logo-4.768153dc.svg',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'grumpy.gr',
      description: 'Sad and unmotivational quotes',
      images: 'https://www.grumpy.gr/_next/static/media/logo-4.768153dc.svg',
   },
}

const Header = dynamic(() => import('../components/Header'), {
   ssr: false,
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
   const id = process.env.GA_MEASUREMENT_ID
   return (
      <html lang='en'>
         <link rel='icon' href='/bear.ico' sizes='any' />
         <GoogleAnalytics GA_MEASUREMENT_ID={id!} />
         <body className={inter.className}>
            <Header />
            <main className='bg-[#F1F1F1]'>{children}</main>
            <Footer />
            <CookieBanner />
         </body>
      </html>
   )
}
