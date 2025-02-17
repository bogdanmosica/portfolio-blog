import React from 'react';
import PageSection from './section';
import ProfileAvatar from './profileAvatar';
import { Separator } from './ui/separator';
import AboutMe from './about';

function HeroSection() {
  return (
    <PageSection className='flex-col md:flex-row justify-between px-4 gap-8 md:gap-12 mt-4'>
      <ProfileAvatar />
      <AboutMe />
    </PageSection>
  );
}

export default HeroSection;
