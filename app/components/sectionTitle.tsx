import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ className?: string }>;

function SectionTitle({ children, className }: Props) {
  return (
    <p className={cn('font-bold text-foreground text-xl', className)}>
      {children}
    </p>
  );
}

export default SectionTitle;
