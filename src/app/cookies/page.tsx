import Link from 'next/link'
import React from 'react'

function page() {
   return (
      <div className='px-5 xl:px-0 pt-36 pb-36 w-full max-w-7xl m-auto text-slate-950 tracking-wide'>
         <h2 className='w-fll text-center text-3xl font-extrabold'>Cookie Policy</h2>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>1. What Are Cookies</h3>
            <p className='mt-4'>
               Cookies are small pieces of data stored on your device (computer, tablet, mobile) when you visit a
               website. They help enhance your browsing experience by remembering your preferences and actions
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>2. Types of Cookies We Use</h3>
            <p className='mt-4'>
               <ul className='mt-5'>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Essential Cookies:</span> These cookies are necessary for the website
                     to function properly. They enable core functionalities such as security, account access, and
                     website navigation.
                  </li>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Analytics Cookies:</span> We use analytics cookies to gather
                     information on how visitors interact with our website. This helps us improve our content and
                     understand user preferences..
                  </li>
               </ul>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>3. How We Use Cookies</h3>
            <p className='mt-4'>
               <li className='list-disc list-inside'>
                  <span className='font-bold'>Improving Experience:</span> Cookies help us enhance your experience by
                  remembering your preferences, such as language settings or login information.
               </li>
               <li className='list-disc list-inside'>
                  <span className='font-bold'>Analytics:</span> We utilize cookies to analyze website traffic, track
                  user interactions, and gauge the performance of our content.
               </li>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>4. Your Cookie Choices</h3>
            <p className='mt-4'>
               <li className='list-disc list-inside'>
                  <span className='font-bold'>Consent:</span> By using our website, you consent to the use of cookies in
                  accordance with this policy. You can manage or delete cookies through your browser settings.
               </li>
               <li className='list-disc list-inside'>
                  <span className='font-bold'>Opt-Out:</span> You can opt-out of certain cookies by adjusting your
                  browser settings. However, disabling some cookies may affect the functionality of the website.
               </li>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>5. Changes to This Policy</h3>
            <p className='mt-4'>
               We reserve the right to update or modify this Cookie Policy at any time. Any changes will be posted on
               this page with an updated revision date.
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>8. Contact Us</h3>
            <p className='mt-4'>
               If you have any questions or concerns regarding our use of cookies or this Cookie Policy, please contact
               us at{' '}
               <Link href='/contact' className='text-main-color font-bold'>
                  Contact Us
               </Link>
               .
            </p>
            <p className='mt-4'>
               By continuing to use our website, you agree to the use of cookies as described in this Cookie Policy.
            </p>
         </div>
      </div>
   )
}

export default page
