'use client';

import React from 'react';
import data from '../data/data';
import Link from 'next/link';
import Image from 'next/image';
import { GiSafetyPin } from 'react-icons/gi';

function Collection() {
  const { projects } = data;
  const isPinnedFirst = projects.sort(
    (a, b) => Number(b.isPinned) - Number(a.isPinned)
  );
  const displayedElements = isPinnedFirst.slice(0, 8);
  return (
    <div className='px-5 xl:px-0 w-full max-w-7xl m-auto pt-36 pb-36'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-16'>
        {displayedElements?.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={index}>
            <div className='card'>
              <div className='max-w-[400px] relative'>
                <Image
                  src={project.img}
                  alt={project.title}
                  className='rounded-lg'
                />
                {project.isPinned && (
                  <span className='absolute top-4 right-4'>
                    <GiSafetyPin fill='#ffffff' size={18} />
                  </span>
                )}
              </div>
              <div className='text-slate-950 font-semibold text-lg mt-5'>
                {project.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {projects.length > 8 && (
        <div className='w-full text-center mt-16'>
          <button className='px-3 py-1 bg-main-color rounded-lg text-slate-100 w-fit '>
            <Link href='/projects'>See More</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Collection;
