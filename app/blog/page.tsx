import { BlogPosts } from '@/components/posts';
import Image from 'next/image';
import shipIt from '@/assets/ship-it.png';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
};

export default function Page() {
  return (
    <section className='px-4'>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>My Blog</h1>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>
        Work in progress page
      </h1>
      <Image src={shipIt} alt={'Work in progress'} />
      <BlogPosts />
    </section>
  );
}
