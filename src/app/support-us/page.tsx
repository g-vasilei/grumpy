import Link from 'next/link'
import React from 'react'

function page() {
   return (
      <div className='h-screen flex flex-col items-center justify-center text-slate-950 w-full max-w-7xl m-auto px-5 xlg:px-0'>
         <h2 className='text-3xl font-extrabold'>Support us</h2>
         <p className='text-lg font-medium mt-5 text-center'>
            You can currently supprt us by buying grumpy.gr merch in Redbubble.
         </p>
         <Link
            href='https://www.redbubble.com/shop/ap/156395633?ref=studio-promote'
            className='font-extrabold text-main-color mt-10'
         >
            Shop Here
         </Link>
      </div>
   )
}

export default page
