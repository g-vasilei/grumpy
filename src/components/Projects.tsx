'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface Projects {
  title: string;
  description: string;
  slug: string;
  img: StaticImageData;
  seoTitle: string;
  seoDescription: string;
}

function Projects({ projects }: { projects: Projects[] }) {
  const [input, setInput] = useState('');

  const filteredProjects = projects.filter((project) => {
    return project.title.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <div className='px-5 xl:px-0 w-full max-w-7xl m-auto pt-36 pb-36'>
      <form className='flex items-center justify-center'>
        <input
          type='text'
          name='title'
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          placeholder='search for a project..'
          aria-label='search for a project..'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='text-slate-950 px-5 py-3 mb-14 w-full xl:w-1/2 rounded-full border border-main-color'
        />
      </form>

      {filteredProjects.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16'>
          {filteredProjects?.map((project: Projects, index: number) => (
            <Link href={`/projects/${project.slug}`} key={index}>
              <div className='card'>
                <div className='max-w-[400px]'>
                  <Image
                    src={project.img}
                    alt={project.title}
                    className='rounded-lg'
                  />
                </div>
                <div className='text-slate-950 font-semibold text-lg mt-5'>
                  {project.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className='text-2xl lg:h-52 lg:text-3xl font-semibold text-center w-full text-slate-950 mt-5 lg:mt-16'>
          we could not find a project with this title 😢
        </div>
      )}
    </div>
  );
}

export default Projects;
