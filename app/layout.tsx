import './global.css';

import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './components/themeProvider';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Bogdan-Marius Mosica | Front-End Developer',
    template: '%s | Bogdan-Marius Mosica',
  },
  description:
    'Portfolio of Bogdan-Marius Mosica, a Front-End Developer specializing in React, TypeScript, and modern web technologies.',
  openGraph: {
    title: 'Bogdan-Marius Mosica | Front-End Developer',
    description:
      'Explore my projects and experience in front-end development, including React, TypeScript, and game development with React.',
    url: baseUrl,
    siteName: 'Bogdan-Marius Mosica Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico', // /public path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang='en'
      className={cx(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body className='antialiased lg:mx-auto bg-background text-primary'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='min-w-0 w-[90%] md:w-3/4 max-w-3xl m-auto'>
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
