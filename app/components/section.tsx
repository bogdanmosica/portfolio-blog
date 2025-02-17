import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

function PageSection({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section
      className={cn('flex items-start justify-around w-full px-4', className)}
    >
      {children}
    </section>
  );
}

export default PageSection;
