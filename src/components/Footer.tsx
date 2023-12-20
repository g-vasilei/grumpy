import React from 'react'
import Logo from '../../public/imgs/logo/logo_bear.png'
import Image from 'next/image'
import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'

function Footer() {
   return (
      <footer className='bg-[#F1F1F1] py-16 min-h-[300px]'>
         <div className='max-w-7xl m-auto px-5 xlg:px-0 flex align-middle h-full'>
            <div className='w-[120px] pr-4 lg:pr-0'>
               <div className='block max-w-[90px] mb-5'>
                  <Image className='w-full' src={Logo} alt='Logo image' />
               </div>
               <Link href='/' className='pt-5'>
                  <BsInstagram className='text-slate-950' size={25} />
               </Link>
            </div>
            <div className='h-[158px] w-full flex items-center justify-center text-slate-950 font-semibold border-l-2 border-main-color'>
               <div>grumpy.gr © 2024</div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
