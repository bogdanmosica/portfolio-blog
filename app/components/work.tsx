import React, { Fragment } from 'react';
import PageSection from './section';
import WorkCard from './ui/workCard';
import { Separator } from './ui/separator';
import SectionTitle from './sectionTitle';

const work = [
  {
    sentences: [
      'Developed and maintained the AiBATROS software, a strategic inventory management solution with an intelligent calculation engine.',
      'Successfully introduced and implemented TypeScript, Vite, and Tailwind, modernizing the project’s tech stack for better performance and developer experience.',
      'Worked on every module of the application, ensuring consistency, scalability, and high-quality code across the project.',
      'Implemented features like automated report generation and data visualization, helping users make data-driven decisions.',
    ],
    tags: [
      'JavaScript',
      'TypeScript',
      'React',
      'Inventory Management',
      'Redux',
      'RxJS',
      'RESTful API',
      'Git',
      'D3.js',
      'Animations',
    ],
    title: 'Senior JavaScript / TypeScript Developer',
    period: '2018 - Present',
  },
  {
    sentences: [
      'Developed and launched the Results Platform independently, completing it weeks ahead of schedule, enabling real-time game updates for thousands of users.',
      'Led major UI/UX development redesigns for Bet on Roulette and Bet on Numbers, improving user engagement and navigation.',
      'Played a key role in building Marble Race, integrating real-time data and animations, enhancing gameplay interactivity.',
      'Migrated 4 projects to TypeScript, reducing the codebase size and improving maintainability and developer efficiency.',
    ],
    tags: [
      'React',
      'TypeScript',
      'UI/UX',
      'WebSockets',
      'tailwindCSS',
      'shadcn',
      'vanilla-extract',
      'styled-components',
    ],
    title: 'Senior JavaScript / TypeScript Developer',
    period: '2023 - 2025',
  },
  {
    sentences: [
      'Developed and maintained quality assurance standards to ensure software reliability.',
      'Assisted in critical decision-making, providing solutions and key insights.',
      'Designed and executed manual test plans, tracking and reporting progress.',
    ],
    tags: ['Testing', 'QA', 'Jira', 'Razor', 'Observables'],
    title: 'Software Tester',
    period: '2017 - 2018',
  },
];

type Props = {};

function WorkSection({}: Props) {
  return (
    <PageSection className='flex-col'>
      <SectionTitle>Work Experience</SectionTitle>
      {work.map(({ sentences, tags, title, period }, index) => (
        <Fragment key={index}>
          <WorkCard
            sentences={sentences}
            tags={tags}
            title={title}
            period={period}
            className='my-4'
          />
          {index < work.length - 1 && <Separator className='my-3' />}
        </Fragment>
      ))}
    </PageSection>
  );
}

export default WorkSection;
