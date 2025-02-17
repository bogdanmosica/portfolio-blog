import React from 'react';
import HeaderSection from './header';
import PageSection from './section';

type Props = {};

function Contact({}: Props) {
  return (
    <PageSection>
      <HeaderSection>Work with Me</HeaderSection>
      <h1 className='mb-8 text-9xl font-semibold tracking-tighter'>
        and I'm a React Developer.
      </h1>
    </PageSection>
  );
}

export default Contact;
