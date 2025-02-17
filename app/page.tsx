import React from 'react';
import HeroSection from './components/hero';
import WorkSection from './components/work';
import Education from './components/education';
import ProjectsSection from './components/projects';
import { Separator } from './components/ui/separator';

export default function Page() {
  return (
    <>
      <HeroSection />
      <Separator className='my-10 mx-3' />
      <WorkSection />
      <Separator className='my-8 mx-3' />
      <ProjectsSection />
      <Separator className='my-6 mx-3' />
      <Education />
    </>
  );
}
