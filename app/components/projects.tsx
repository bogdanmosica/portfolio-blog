import React, { Fragment } from 'react';
import PageSection from './section';
import ProjectCard from './projectCard';
import { Separator } from './ui/separator';
import SectionTitle from './sectionTitle';

import aibatros from '@/assets/aibatros.jpg';
import results from '@/assets/results-platform.jpg';
import bon from '@/assets/bon.jpg';
import backOffice from '@/assets/back-office.jpg';
import code4ro from '@/assets/code4ro.png';

const projects = [
  {
    description:
      'AiBATROS is a residential inventory management system, modernized from Razor Pages to React, TypeScript, Vite, TailwindCSS, enhancing performance, scalability, and developer experience through efficient tools and practices.',
    tags: [
      'javascript',
      'typescript',
      'React',
      'Inventory Management',
      'Redux',
      'RESTful API',
      'Git',
      'D3.js',
      'storybook',
    ],
    title: 'AiBATROS ',
    period: '2018 - Present',
    imageMeta: {
      src: aibatros.src,
      alt: 'AiBATROS Preview',
    },
    url: 'https://aibatros.com/',
  },
  {
    description:
      'Built with React, TypeScript, TailwindCSS, and ShadCN, featuring pagination, multi-API data integration, and front-end filtering for real-time game results and a seamless user experience.',
    tags: [
      'react',
      'typescript',
      'react-query',
      'vite',
      'tailwindcss',
      'shadcn',
      'Animations',
    ],
    title: 'Live Games Results Platform',
    period: '2023 - 2024',
    imageMeta: {
      src: results.src,
      alt: 'Results Platform Preview',
    },
    url: '',
  },
  {
    description:
      'Worked on five live games using React, Vite, Redux (RxJS), WebSockets, Vanilla-Extract, and Styled-Components, focusing on UI/UX redesigns, TypeScript migration, new game development, and performance optimization.',
    tags: [
      'react',
      'typescript',
      'react query',
      'vite',
      'styled-components',
      'rxjs',
      'websockets',
      'observables',
      'animations',
    ],
    title: 'Betting Live Games',
    period: '2023 - 2025',
    imageMeta: {
      src: bon.src,
      alt: 'Live Games Preview',
    },
    url: '',
  },
  {
    description:
      'Internal tool redesigned and improved a content management system for support teams using React, React Query, and Material - UI, optimizing data fetching, state management, and overall user experience.',
    tags: [
      'react',
      'typescript',
      'react query',
      'vite',
      'material-UI',
      'animations',
    ],
    title: 'Back Office Platform',
    period: '2024 - 2025',
    imageMeta: {
      src: backOffice.src,
      alt: 'Back Office Preview',
    },
    url: '',
  },
  {
    description:
      'Developed with React and TypeScript to offer real-time support and resource management, integrating multiple APIs and user-friendly interfaces for efficient assistance during critical situations.',
    tags: ['react', 'TypeScript', 'webpack', 'redux', 'storybook', 'i18next'],
    title: 'War Support Platform',
    period: '2022 - 2023',
    imageMeta: {
      src: code4ro.src,
      alt: 'War Support Preview',
    },
    url: 'https://github.com/code4romania/war-support-sprijin-de-urgenta-client',
  },
  {
    description:
      'ANABI is a platform centralizing all criminal assets seized in Romania, their net worth and location for the National Agency for the Management of Seized Assets.',
    tags: ['angular', 'TypeScript', 'webpack', 'redux', 'storybook', 'i18next'],
    title: 'ANABI Platform',
    period: '2021 - 2022',
    imageMeta: {
      src: code4ro.src,
      alt: 'ANABI Preview',
    },
    url: 'https://github.com/code4romania/anabi-gestiune-client',
  },
  {
    description:
      'Expert Consultation is an application meant to allow a public institution (or any other entity) to create a piece of legislation, proposal or any other type of document and to initiate a round of consultation with experts.',
    tags: ['angular', 'typescript', 'webpack', 'redux', 'storybook', 'i18next'],
    title: 'Expert Consultation Platform',
    period: '2020 - 2021',
    imageMeta: {
      src: code4ro.src,
      alt: 'Expert Consultation Preview',
    },
    url: 'https://github.com/code4romania/expert-consultation-frontend',
  },
];

type Props = {};

function ProjectsSection({}: Props) {
  return (
    <PageSection className='flex-col'>
      <SectionTitle>Projects</SectionTitle>
      {projects.map(
        ({ imageMeta, tags, title, description, period }, index) => (
          <Fragment key={index}>
            <ProjectCard
              key={index}
              period={period}
              tags={tags}
              title={title}
              description={description}
              imageMeta={imageMeta}
              className='my-6'
            />
            {index < projects.length - 1 && <Separator />}
          </Fragment>
        )
      )}
    </PageSection>
  );
}

export default ProjectsSection;
