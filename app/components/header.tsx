import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type Props = { className?: string } & PropsWithChildren;

function HeaderSection({ children, className }: Props) {
  return (
    <h1
      className={cn(
        'text-5xl md:text-6xl lg:text-7xl md font-semibold tracking-tighter text-[--main-blue]',
        className
      )}
    >
      {children}
    </h1>
  );
}

export default HeaderSection;
