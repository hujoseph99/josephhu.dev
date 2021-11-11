import * as React from 'react';

import { Text } from '@chakra-ui/layout';
import HighlightText from '../common/HighlightText';

interface ExperienceDataType {
  jobTitle: string;
  company: string;
  duration: string;
  bullets: React.ReactNode[];
}

const experienceData: ExperienceDataType[] = [
  {
    jobTitle: 'Full Stack Developer',
    company: 'Adeptmind',
    duration: 'August 2021 - Present',
    bullets: [
      <Text>
        Overhauled <HighlightText text='image resizing pipeline' /> to support next-generation image
        formats of multiple sizes, greatly increasing our <HighlightText text='SEO scores' />
      </Text>,
      <Text>
        Designed <HighlightText text='background color detection' /> algorithm for images, integrated
        it into our <HighlightText text='data processing pipeline' />, and then applied it on the 
        frontend to give a consistent look to our product catalogue
      </Text>,
      <Text>
        Currently upgrading our <HighlightText text='Prefect' /> integrations to use the latest 
        best-practices, increasing its maintainability and scalability
      </Text>,
    ]
  },
  {
    jobTitle: 'Software Developer',
    company: 'StackAdapt',
    duration: 'Jan 2021 - Apr 2021',
    bullets: [
      <Text>
        Contributed towards <HighlightText text="significantly" /> increasing the productivity of 
        power users by developing several core components of a bulk-editor feature using 
        <HighlightText text=" React/Redux" /> in <HighlightText text="Typescript" />
      </Text>,
      <Text>
        Modified <HighlightText text="Rails" /> backend and <HighlightText text="Go " /> 
        microservices to introduce new datasets into user-requested reports
      </Text>,
      <Text>
          Ensured code quality by actively participating in <HighlightText text="code reviews " /> 
          and promoting unit tests on frontend
      </Text>
    ]
  },
  {
    jobTitle: 'Software Developer',
    company: 'Thomson Reuters',
    duration: 'May 2020 - Sep 2020',
    bullets: [
      <Text>
        Developed web pages and API endpoints using <HighlightText text="ASP.NET" /> MVC framework 
        handled by <HighlightText text="1,000+" /> clients
      </Text>,
      <Text>
        Investigated numerous complex bugs by deep-diving into a multi-tiered codebase with 
        <HighlightText text=" 16,000+" /> files
      </Text>,
      <Text>
        Worked in an <HighlightText text="Agile Scrum" /> environment to effectively meet deadlines 
        and strengthen team cohesion
      </Text>
    ]
  },
  {
    jobTitle: 'Software Engineer',
    company: 'PointClickCare',
    duration: 'Sep 2019 – Dec 2019',
    bullets: [
      <Text>
        Developed security functions for numerous <HighlightText text="API" /> endpoints using 
        <HighlightText text=" Java/Spring" /> to prevent JSON injection
      </Text>,
      <Text>
        Utilized <HighlightText text="Selenium" /> and the <HighlightText text="POM" /> to create 
        both unit and E2E tests, increasing code coverage by <HighlightText text="~10%" />
      </Text>,
      <Text>
        Created stored procedures and queries using <HighlightText text="SQL" /> to manage and 
        update <HighlightText text="100+" /> production databases
      </Text>,
    ],
  },
  {
    jobTitle: 'Software Developer',
    company: 'Finastra',
    duration: 'Jan 2019 – Apr 2019',
    bullets: [
      <Text>
        Facilitated the <HighlightText text="migration" /> of message-oriented middlewares resulting 
        in a more maintainable codebase
      </Text>,
      <Text>
        Developed and updated a robust set of <HighlightText text="API" /> endpoints with 
        <HighlightText text=" ASP.NET" /> given a set of specifications
      </Text>,
      <Text>
        Implemented a system for dynamic endpoint retrieval from 
        <HighlightText text=" design to production" /> using <HighlightText text="SQL" /> and 
        <HighlightText text=" C#" />
      </Text>,
      <Text>
        Refactored an existing HTTP request factory to use template types, saving 
        <HighlightText text=" 100+" /> lines for each model
      </Text>
    ],
  }
];

export default experienceData;
