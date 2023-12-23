import React from 'react';
import Logo from '../../public/imgs/logo/logo_bear.png';
import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
  return (
    <footer className='bg-[#F1F1F1] py-16 min-h-[300px]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl m-auto p-5 xl:p-0'>
        <div className='lg:border-r-2 border-main-color pt-5'>
          <div className='block max-w-[90px] mb-5'>
            <Image className='w-full' src={Logo} alt='Logo image' />
          </div>
          <div className=' text-slate-950 font-bold mb-10 lg:mb-0'>
            <div>grumpy.gr © 2024</div>
          </div>
        </div>
        <div className='flex flex-col text-slate-950 font-bold gap-4 mb-10 lg:mb-0 lg:items-center'>
          <div className='flex flex-col items-start'>
            <h2 className='font-extrabold text-main-color text-lg'>LEGAL</h2>
            <Link href='/cookies' className='pt-5'>
              Consent Manager
            </Link>
            <Link href='/terms' className='pt-5'>
              Terms
            </Link>
            <Link href='/privacy' className='pt-5'>
              Privacy
            </Link>
          </div>
        </div>
        <div className='flex flex-col text-slate-950 font-bold gap-4 mb-10 lg:mb-0 lg:items-center'>
          <div className='flex flex-col items-start'>
            <h2 className='font-extrabold text-main-color text-lg'>ABOUT</h2>
            <Link href='/projects' className='pt-5'>
              Projects
            </Link>
            <Link href='/contact' className='pt-5'>
              Contact
            </Link>
            <Link href='/story' className='pt-5'>
              Story
            </Link>
          </div>
        </div>
        <div className='mb-10 lg:mb-0 flex flex-col gap-4 lg:items-end'>
          <div className='flex flex-col items-start'>
            <div className='px-3 py-1 bg-main-color rounded-lg text-slate-100 w-fit'>
              <Link href='/'>SUPPORT US</Link>
            </div>
            <a
              href='https://www.instagram.com/grumpy.gr/'
              target='_blank'
              className='pt-5'
            >
              <BsInstagram className='text-slate-950' size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
