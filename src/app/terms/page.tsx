import Link from 'next/link'
import React from 'react'

function page() {
   return (
      <div className='px-5 xl:px-0 pt-36 pb-36 w-full max-w-7xl m-auto text-slate-950 tracking-wide'>
         <h2 className='w-fll text-center text-3xl font-extrabold'>Terms of Service</h2>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>1. Use of Images</h3>
            <p className='mt-4'>
               The images containing sad quotes displayed on this Website are the property of Grumpy.gr. You are
               permitted to:
               <ul className='mt-5'>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Share:</span> You may share the Images via social media, personal
                     websites, or other non-commercial platforms for non-commercial purposes without altering the
                     Images.
                  </li>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Personal Use:</span> Use the Images for personal, non-commercial
                     purposes.
                  </li>
               </ul>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>2. Restrictions</h3>
            <p className='mt-4'>
               You are expressly prohibited from:
               <ul className='mt-5'>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Commercial Use:</span> Using the Images for commercial purposes,
                     including but not limited to selling, licensing, or using them to generate income.
                  </li>
                  <li className='list-disc list-inside'>
                     <span className='font-bold'>Modifications:</span> Altering, modifying, or creating derivative works
                     from the Images without prior written consent from Grumpy.gr.
                  </li>
               </ul>
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>3. Copyright</h3>
            <p className='mt-4'>
               All copyrights and intellectual property rights related to the Images remain the property of Grumpy.gr.
               No transfer of ownership or license is granted to you under these Terms.
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>4. Disclaimer</h3>
            <p className='mt-4'>
               The Images on this Website are provided "as is" without any warranties, express or implied. We do not
               guarantee the accuracy, reliability, or suitability of the Images for any purpose.
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>5. Termination</h3>
            <p className='mt-4'>
               We reserve the right to terminate or suspend access to the Images on this Website at any time without
               prior notice.
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>6. Changes to Termst</h3>
            <p className='mt-4'>
               We reserve the right to modify or replace these Terms at our sole discretion. It is your responsibility
               to review these Terms periodically for changes.
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>7. Governing Law</h3>
            <p className='mt-4'>
               These Terms shall be governed by and construed in accordance with the laws of Greece, without regard to
               its conflict of law provisions.
            </p>
         </div>
         <div className='mt-16'>
            <h3 className='text-2xl font-bold'>8. Contact</h3>
            <p className='mt-4'>
               If you have any questions or concerns about these Terms, please contact us at
               <Link href='/contact' className='text-main-color font-bold'>
                  Contact Us
               </Link>
               .
            </p>
            <p className='mt-4'>
               By using this Website, you agree to abide by these Terms of Service. If you do not agree with any part of
               these Terms, you should refrain from using the Website.
            </p>
         </div>
      </div>
   )
}

export default page
