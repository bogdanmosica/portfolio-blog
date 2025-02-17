import React from 'react';

type Props = {};

function AboutMe({}: Props) {
  return (
    <div className='flex flex-col items-start justify-start w-full'>
      <h1 className='text-3xl md:text-4xl font-semibold tracking-tighter pb-2'>
        Bogdan-Marius Mosica
      </h1>
      <h2 className='text-lg font-semibold tracking-tighter text-foreground pb-2'>
        JavaScript / TypeScript / React Developer
      </h2>
      <h2 className='text-sm font-semibold tracking-tighter text-foreground/30 pb-2 italic'>
        ... and a bit of NodeJS
      </h2>
      <p className='text-sm tracking-tighter text-foreground pb-2'>
        Proficient in frontend development with React and JavaScript /
        TypeScript for creating rich, responsive, and dynamic user experiences
        and RESTful API integration. A detail-oriented and focused developer
        with a passion for building efficient, maintainable, and clean code.
      </p>
    </div>
  );
}

export default AboutMe;
