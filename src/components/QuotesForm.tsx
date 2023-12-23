'use client'

import React from 'react'
import Image from 'next/image'
import Sad from '../../public/imgs/icons/sad-quote.png'

function QuotesForm() {
   return (
      <div className='px-5 xl:px-0 w-full max-w-7xl m-auto pb-36'>
         <div className='grid grid-cols-1 sm:grid-cols-2 bg-gradient-to-tr from-main-color to-[#E1EEEB] p-6 sm:py-20 sm:px-16 rounded-xl relative overflow-hidden z-10'>
            <div>
               <h2 className='text-4xl text-slate-950 font-bold'>Send us your Quotes</h2>
               <p className='text-base text-slate-950 mt-5 sm:mt-10 leading-8 sm:w-4/5'>
                  You can send us your Quotes. Just fill the form fields and as soon as we get your message we ll create
                  an image with your Quote with @Name in projects description.
               </p>
            </div>
            <form action='' className='mt-10 sm:mt-0 flex flex-col sm:pl-12 gap-6 z-10'>
               <input
                  type='text'
                  name='name'
                  autoComplete='off'
                  autoCorrect='off'
                  autoCapitalize='off'
                  placeholder='Name..'
                  aria-label='Name..'
                  className='w-full backdrop-blur-sm bg-white/20 px-4 py-2 rounded-lg text-slate-950 placeholder-slate-500'
               />
               <input
                  type='text'
                  name='quote'
                  autoComplete='off'
                  autoCorrect='off'
                  autoCapitalize='off'
                  placeholder='Quote..'
                  aria-label='Quote..'
                  className='w-full backdrop-blur-sm bg-white/20 px-4 py-2 rounded-lg text-slate-950 placeholder-slate-500'
               />
               <input
                  type='text'
                  name='description'
                  autoComplete='off'
                  autoCorrect='off'
                  autoCapitalize='off'
                  placeholder='Description..'
                  aria-label='Description..'
                  className='w-full backdrop-blur-sm bg-white/20 px-4 py-2 rounded-lg text-slate-950 placeholder-slate-500'
               />
            </form>
            <div className='absolute bottom-[110px] sm:bottom-0 sm:top-[35px] sm:right-[140px]'>
               <Image src={Sad} alt='sad emoji' />
            </div>
         </div>
      </div>
   )
}

export default QuotesForm
