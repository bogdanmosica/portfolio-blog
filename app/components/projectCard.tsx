import React from 'react';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  className?: string;
  imageMeta: {
    src: string | StaticImageData;
    alt: string;
  };
  url?: string;
};

function ProjectCard({
  title,
  description,
  tags,
  period,
  className,
  imageMeta,
  url = '',
}: ProjectCardProps) {
  return (
    <div className={cn('w-full md:text-xl', className)}>
      <div className='flex flex-col md:flex-row items-start justify-between gap-2 w-full md:py-4'>
        <div className='text-foreground italic text-base pb-2'>{period}</div>
        <div className='flex flex-col md:flex-row flex-grow items-start gap-4 md:max-w-3/4'>
          <div
            className='w-full rounded-2xl bg-cover bg-top bg-no-repeat h-44'
            style={{
              backgroundImage: `url(${imageMeta?.src ?? null})`,
            }}
          />
          <div className='flex flex-col gap-2 md:max-w-1/2'>
            <div className='py-1'>
              <h1 className='text-primary text-xl font-semibold'>
                {title}
                {url && (
                  <a
                    className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 ml-2'
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://github.com/bogdanmosica'
                  >
                    <ArrowUpRight />
                    <p className='ml-2 h-7'>github</p>
                  </a>
                )}
              </h1>
            </div>
            <div className='text-foreground text-sm py-1 w-full'>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>

      {tags.length > 0 && (
        <div className='mt-4'>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
