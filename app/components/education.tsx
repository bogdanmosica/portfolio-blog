import React from 'react';
import PageSection from './section';
import WorkCard from './ui/workCard';
import { Separator } from './ui/separator';

type Props = {};

function Education({}: Props) {
  return (
    <PageSection className='flex-col pt-4'>
      <p className='font-bold text-foreground'>Education</p>
      <WorkCard
        sentences={['Alexandru Ioan Cuza University', 'Iași, Romania']}
        tags={[]}
        title={"Bachelor's Degree in Management and Business Administration"}
        period={'2021 - 2024'}
        className='my-4'
      />
      <Separator />
    </PageSection>
  );
}

export default Education;
