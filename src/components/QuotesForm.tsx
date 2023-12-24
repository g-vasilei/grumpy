'use client'

import React, { useRef, useState, FormEventHandler } from 'react'
import Image from 'next/image'
import Sad from '../../public/imgs/icons/sad-quote.png'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

function QuotesForm() {
   const [form, setForm] = useState({
      name: '',
      quote: '',
      description: '',
   })

   const initialState = {
      name: '',
      quote: '',
      description: '',
   }

   const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }))
   }

   const service = process.env.YOUR_SERVICE_ID
   const template = process.env.YOUR_TEMPLATE_ID
   const key = process.env.YOUR_PUBLIC_KEY

   const sendEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault()
      const { name, quote, description } = form
      const templateParams = {
         name,
         quote,
         description,
      }

      emailjs.send('service_vgwo5eq', 'template_t5pjboc', templateParams, 'eG8BapSqYw_BDMAfK').then(
         (response) => {
            toast.success('We got your email')
            setForm(() => ({
               name: '',
               quote: '',
               description: '',
            }))
         },
         (err) => {
            toast.error('Something went wrong :(')
         }
      )
   }
   return (
      <div className='px-5 xl:px-0 w-full max-w-7xl m-auto pb-36'>
         <div className='grid grid-cols-1 sm:grid-cols-2 bg-gradient-to-tr from-main-color to-[#E1EEEB] px-6 py-8 sm:py-20 sm:px-16 rounded-xl relative overflow-hidden z-[2]'>
            <div>
               <h2 className='text-4xl text-slate-950 font-bold'>Send us your Quotes</h2>
               <p className='text-base text-slate-950 mt-5 sm:mt-10 leading-8 sm:w-4/5'>
                  You can send us your Quotes. Just fill the form fields and as soon as we get your message we ll create
                  an image with your Quote with @Name in projects description.
               </p>
               <p className='text-base opacity-70 mt-5'>
                  *by submitting your quote you agry to{' '}
                  <Link className='text-slate-800' href='/terms'>
                     terms of use
                  </Link>
               </p>
            </div>
            <form action='' className='mt-10 sm:mt-0 flex flex-col sm:pl-12 gap-6 z-[2]' onSubmit={sendEmail}>
               <input
                  type='text'
                  name='name'
                  value={form.name}
                  autoComplete='off'
                  autoCorrect='off'
                  autoCapitalize='off'
                  placeholder='Name..'
                  aria-label='Name..'
                  className='w-full backdrop-blur-sm bg-white/20 px-4 py-2 rounded-lg text-slate-950 placeholder-slate-500'
                  onChange={handleForm}
               />
               <input
                  type='text'
                  name='quote'
                  value={form.quote}
                  autoComplete='off'
                  autoCorrect='off'
                  autoCapitalize='off'
                  placeholder='Quote..'
                  aria-label='Quote..'
                  className='w-full backdrop-blur-sm bg-white/20 px-4 py-2 rounded-lg text-slate-950 placeholder-slate-500'
                  onChange={handleForm}
               />
               <input
                  type='text'
                  name='description'
                  value={form.description}
                  autoComplete='off'
                  autoCorrect='off'
                  autoCapitalize='off'
                  placeholder='Description..'
                  aria-label='Description..'
                  className='w-full backdrop-blur-sm bg-white/20 px-4 py-2 rounded-lg text-slate-950 placeholder-slate-500'
                  onChange={handleForm}
               />
               <button type='submit' className='font-bold bg-white text-main-color py-2 rounded-xl'>
                  Submit
               </button>
            </form>
            <div className='absolute bottom-[110px] sm:bottom-0 sm:top-[35px] sm:right-[140px]'>
               <Image src={Sad} alt='sad emoji' />
            </div>
         </div>
      </div>
   )
}

export default QuotesForm
