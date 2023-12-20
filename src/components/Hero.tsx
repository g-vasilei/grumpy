import Link from 'next/link'
import React from 'react'
import SadEmj from '../../public/imgs/icons/sad-emj.png'
import Image from 'next/image'

function Hero() {
   return (
      <div className='bg-hero-section bg-cover bg-no-repeat px-5 xlg:px-0'>
         <div className='w-full max-w-7xl m-auto pt-36 pb-36 flex flex-col overflow-x-hidden relative'>
            <h1 className='text-main-color font-extrabold text-6xl lg:text-9xl'>GRUMPY</h1>
            <h3 className='font-semibold  mt-10 lg:mt-16 text-slate-950 text-4xl lg:text-7xl'>
               Sad and unmotivational quotes
            </h3>
            <p className='text-base font-semibold mt-8 lg:mt-16 text-slate-950'>
               You can find sad quotes about life. This is a unique project for us, grumpy people, to express our
               feelings.
            </p>
            <Link className='px-3 py-1 bg-main-color rounded-lg text-slate-100 w-fit mt-5' href='/'>
               SUPPORT US
            </Link>{' '}
            <div className='absolute right-0 top-36'>
               <Image src={SadEmj} alt='Logo image' />
            </div>
         </div>
      </div>
   )
}

export default Hero
