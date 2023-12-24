import Link from 'next/link'
import React from 'react'

function terms() {
   return (
      <div className='px-5 xl:px-0 pt-36 pb-36 w-full max-w-7xl m-auto text-slate-950 tracking-wide'>
         <h2 className='w-fll text-center text-3xl font-extrabold'>Privacy Policy</h2>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>1. Information Collection</h3>
            <p className='mt-4'>
               <ul className='mt-5'>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Personal Information:</span> We may collect personal information such
                     as names, email addresses, or other details voluntarily provided by users when interacting with our
                     website.
                  </li>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Non-Personal Information:</span> UWe may gather non-personal
                     information such as browser type, device information, and usage patterns through cookies and
                     similar technologies.
                  </li>
               </ul>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>2. How We Use Collected Information</h3>
            <p className='mt-4'>
               <ul className='mt-5'>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Improving User Experience:</span> Information collected helps us
                     personalize user experience, respond to inquiries, and enhance our websites content.
                  </li>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Communication:</span> We may use your email address to respond to
                     inquiries, send updates, and communicate with you regarding our services.
                  </li>
               </ul>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>3. Protection of Information</h3>
            <p className='mt-4'>
               <li className='list-disc list-inside'>
                  <span className='font-bold'>Data Security:</span> We employ appropriate data collection, storage, and
                  processing practices and security measures to protect against unauthorized access, alteration,
                  disclosure, or destruction of your personal information.
               </li>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>4. Sharing Your Information</h3>
            <p className='mt-4'>
               <li className='list-disc list-inside'>
                  <span className='font-bold'>Third Parties:</span> We do not sell, trade, or rent users personal
                  information to third parties. However, we may share generic aggregated demographic information not
                  linked to any personal identification information regarding visitors and users with our business
                  partners, trusted affiliates, and advertisers.
               </li>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>5. Compliance with Laws</h3>
            <p className='mt-4'>
               <li className='list-disc list-inside'>
                  <span className='font-bold'>Legal Requirements:</span> We may disclose personal information when
                  required by law or to protect our rights, comply with legal processes, or respond to lawful requests
                  from public authorities.
               </li>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>6. Changes to This Privacy Policy</h3>
            <p className='mt-4'>
               <li className='list-disc list-inside'>
                  <span className='font-bold'>Policy Updates:</span> We reserve the right to update or change this
                  Privacy Policy at our discretion. Any revisions will be reflected by an updated date at the bottom of
                  this page.
               </li>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>7. Your Acceptance of These Terms</h3>
            <p className='mt-4'>
               <li className='list-disc list-inside'>
                  <span className='font-bold'>Consent:</span> By using our website, you signify your acceptance of this
                  policy. If you do not agree to this policy, please refrain from using our website.
               </li>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>8. Contact</h3>
            <p className='mt-4'>
               If you have any questions about this Privacy Policy, the practices of this website, or your dealings with
               this site, please contact us at
               <Link href='/contact' className='text-main-color font-bold'>
                  Contact Us
               </Link>
               .
            </p>
         </div>
      </div>
   )
}

export default terms
