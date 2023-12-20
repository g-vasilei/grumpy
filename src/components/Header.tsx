'use client'

import React, { useEffect, useState } from 'react'
import Logo from '../../public/imgs/logo/logo.png'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
   const [menu, setMenu] = useState(false)

   const [scroll, setScroll] = useState(false)
   const scrollThreshold = 200

   const stickyNavbar = () => {
      if (window?.scrollY >= 80) {
         setScroll(true)
      } else {
         setScroll(false)
      }
   }

   window?.addEventListener('scroll', stickyNavbar)

   return (
      <header className={`p-5 fixed w-full z-10  ${scroll && 'backdrop-blur-sm bg-white/20'}`}>
         <div className='flex items-center justify-between max-w-7xl m-auto'>
            <h1>
               <Link href='/'>
                  <Image src={Logo} alt='Logo image' />
               </Link>
            </h1>
            <div className='flex items-center gap-5 lg:invisible'>
               <div className='px-3 py-1 bg-main-color rounded-lg'>SUPPORT US</div>
               <div onClick={() => setMenu((prevState) => !prevState)}>
                  {menu ? (
                     <RiCloseFill size={28} className='text-main-color' />
                  ) : (
                     <RiMenu4Fill size={28} className='text-main-color' />
                  )}
               </div>
            </div>
            <ul
               className={
                  menu
                     ? 'fixed h-screen w-1/2 left-0 top-0 flex flex-col align-middle justify-center gap-10 px-5 transition-all ease-in-out duration-500 backdrop-blur-sm bg-white/20 lg:hidden text-main-color font-bold'
                     : 'fixed h-screen w-1/2 -left-full flex flex-col align-middle justify-center gap-10 px-5 transition-all ease-in-out duration-500 backdrop-blur-sm bg-white/20 top-0 lg:hidden'
               }
            >
               <li onClick={() => setMenu((prevState) => !prevState)}>
                  <Link href='/'>HOME</Link>
               </li>
               <li onClick={() => setMenu((prevState) => !prevState)}>
                  <Link href='/story'>STORY</Link>
               </li>
               <li onClick={() => setMenu((prevState) => !prevState)}>
                  <Link href='/projects'>PROJECTS</Link>
               </li>
               <li onClick={() => setMenu((prevState) => !prevState)}>
                  <Link href='/'>CONTACT</Link> US
               </li>
            </ul>
            <ul className='hidden h-fit bg-transparent lg:flex  align-middle gap-10 font-bold text-slate-950'>
               <li className='px-3 py-1'>
                  <Link href='/'>HOME</Link>
               </li>
               <li className='px-3 py-1'>
                  <Link href='/story'>STORY</Link>
               </li>
               <li className='px-3 py-1'>
                  <Link href='/projects'>PROJECTS</Link>
               </li>
               <li className='px-3 py-1'>
                  <Link href='/'>CONTACT</Link>
               </li>
               <li className='px-3 py-1 bg-main-color rounded-lg text-slate-100'>
                  <Link href='/'>SUPPORT US</Link>
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Header
