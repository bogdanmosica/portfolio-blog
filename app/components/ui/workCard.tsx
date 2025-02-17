import React from 'react';
import { cn } from '@/lib/utils';

type WorkCardProps = {
  title: string;
  period: string;
  sentences: string[];
  tags: string[];
  className?: string;
};

function WorkCard({
  title,
  sentences,
  tags,
  period,
  className,
}: WorkCardProps) {
  return (
    <div className={cn('w-full md:text-xl', className)}>
      <div className='flex flex-col md:flex-row items-start justify-between gap-2 w-full'>
        <div className='text-foreground italic text-base'>{period}</div>
        <div className='flex flex-col gap-2 flex-grow md:max-w-3/4'>
          <div className='pb-1'>
            <h1 className='text-primary text-xl font-semibold'>{title}</h1>
          </div>
          <div className='text-foreground py-2 w-full'>
            <ul className='list-inside list-disc space-y-2'>
              {sentences.map((sentence, index) => (
                <li key={index} className='text-sm'>
                  {sentence}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {tags.length > 0 && (
        <div className='mt-3'>
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

export default WorkCard;
