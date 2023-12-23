'use client';

import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '../lib/storageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);

    //For Testing
    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);

  return (
    // <div
    //   className={`my-10 mx-auto max-w-max md:max-w-screen-sm
    //                   fixed bottom-0 left-0 right-0
    //                   ${
    //                     cookieConsent != null ? 'hidden' : 'flex'
    //                   } px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4
    //                    bg-cookie-bg rounded-lg shadow `}
    // >
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                      fixed bottom-0 left-0 right-0 
                      ${
                        cookieConsent != null ? 'hidden' : 'flex'
                      } px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                       bg-neutral-50 rounded-lg shadow `}
    >
      <div className='text-center text-slate-950'>
        <Link href='/info/cookies'>
          <p>
            We use <span className='font-bold text-main-color'>cookies</span> on
            our site.
          </p>
        </Link>
      </div>

      <div className='flex gap-2'>
        <button
          className='px-5 py-2 text-slate-950 rounded-md border-gray-900'
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className='bg-main-color px-5 py-2 text-white font-medium rounded-lg'
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
