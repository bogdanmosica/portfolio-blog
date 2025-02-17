'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './themeToggle';

const navItems = {
  '/': {
    name: 'resume',
  },
  '/blog': {
    name: 'blog',
  },
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav
      className='flex flex-row items-start relative pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
      id='nav'
    >
      <div className='flex flex-row items-center justify-between space-x-0 p-3 pt-1 w-full'>
        <div className='pl-2'>{'</>'}</div>
        <div className='flex items-center'>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={cn(
                  'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 p-2 m-1 border-transparent',
                  pathname === path
                    ? 'border-b text-neutral-800 border-b-neutral-800 dark:text-neutral-200 dark:border-b-neutral-200'
                    : 'text-neutral-500 border-b-neutral-500 dark:text-neutral-400 dark:border-b-neutral-400'
                )}
              >
                {name}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
