import * as React from 'react';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { Box, Center, Flex, Text, VStack } from '@chakra-ui/layout';
import Heading from '../common/Heading';
import { css } from '@chakra-ui/styled-system';
import Bullet from '../common/Bullet';
import HighlightText from '../common/HighlightText';

const Experience = () => (
  <Flex
    width='100%'
    bgColor="gray.900"
    justifyContent='center'
    alignContent='center'
    paddingY="7rem"
    overflow='hidden'
    id='experience'
  >
    <VStack>
      <Heading text='Experience' paddingX={10} />
      <Tabs colorScheme='cyan' width='45rem' maxWidth='100vw' paddingX={10} isFitted variant='line'>
        <TabList 
          overflowX='auto'
          css={css({
            paddingBottom: '2px',
            marginBottom: '-2px',
            '::-webkit-scrollbar': {display: 'none'},
            'button:focus': {
              boxShadow: 'none !important'
            }
          })}
        >
          <Tab fontSize='sm'>Adeptmind</Tab>
          <Tab fontSize='sm'>StackAdapt</Tab>
          <Tab fontSize='sm'>Thomson Reuters</Tab>
          <Tab fontSize='sm'>PointClickCare</Tab>
          <Tab fontSize='sm'>Finastra</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack
              alignItems='flex-start'
              spacing={1}
            >
              <Text fontSize='lg' color='gray.100' fontWeight='bold'>Full Stack Developer <HighlightText text="@ Adeptmind" /></Text>
              <Text fontWeight='bold' paddingbottom={10}>August 2021 - Present</Text>
              <Bullet text={(
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla ex a viverra dapibus.
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla ex a viverra dapibus.
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla ex a viverra dapibus.
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla ex a viverra dapibus.
                </Text>
              )} />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack
              alignItems='flex-start'
              spacing={1}
            >
              <Text fontSize='lg' color='gray.100' fontWeight='bold'>Software Developer <HighlightText text="@ StackAdapt" /></Text>
              <Text fontWeight='bold' paddingbottom={10}>Jan 2021 – Apr 2021</Text>
              <Bullet text={(
                <Text>
                  Contributed towards <HighlightText text="significantly" /> increasing the productivity of power users by developing several
                  core components of a bulk-editor feature using <HighlightText text="React/Redux" /> in <HighlightText text="Typescript" />
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Modified <HighlightText text="Rails" /> backend and <HighlightText text="Go" /> microservices to introduce 
                  new datasets into user-requested reports
                </Text>
              )}/>
              <Bullet text={(
                <Text>
                    Ensured code quality by actively participating in <HighlightText text="code reviews " /> 
                    and promoting unit tests on frontend
                </Text>
              )} />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack
              alignItems='flex-start'
              spacing={1}
            >
              <Text fontSize='lg' color='gray.100' fontWeight='bold'>Software Developer <HighlightText text="@ Thomson Reuters" /></Text>
              <Text fontWeight='bold' paddingbottom={10}>May 2020 – Sep 2020</Text>
              <Bullet text={(
                <Text>
                  Developed web pages and API endpoints using <HighlightText text="ASP.NET" /> MVC framework handled by 
                  <HighlightText text="1,000+" /> clients
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Investigated numerous complex bugs by deep-diving into a multi-tiered codebase with <HighlightText text="16,000+" /> files
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Worked in an <HighlightText text="Agile Scrum" /> environment to effectively meet deadlines and strengthen team cohesion
                </Text>
              )} />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack
              alignItems='flex-start'
              spacing={1}
            >
              <Text fontSize='lg' color='gray.100' fontWeight='bold'>Software Engineer <HighlightText text="@ PointClickCare" /></Text>
              <Text fontWeight='bold' paddingbottom={10}>Sep 2019 – Dec 2019</Text>
              <Bullet text={(
                <Text>
                  Developed security functions for numerous <HighlightText text="API" /> endpoints 
                  using <HighlightText text="Java/Spring" /> to prevent JSON injection
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Utilized <HighlightText text="Selenium" /> and the <HighlightText text="POM" /> to create both 
                  unit and E2E tests, increasing code coverage by <HighlightText text="~10%" />
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Created stored procedures and queries using <HighlightText text="SQL" /> to manage and update <HighlightText text="100+" /> production databases
                </Text>
              )} />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack
              alignItems='flex-start'
              spacing={1}
            >
              <Text fontSize='lg' color='gray.100' fontWeight='bold'>Software Developer <HighlightText text="@ Finastra" /></Text>
              <Text fontWeight='bold' paddingbottom={10}>Jan 2019 – Apr 2019</Text>
              <Bullet text={(
                <Text>
                  Facilitated the <HighlightText text="migration" /> of message-oriented middlewares resulting in a more maintainable codebase
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Developed and updated a robust set of <HighlightText text="API" /> endpoints with 
                  <HighlightText text="ASP.NET" /> given a set of specifications
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Implemented a system for dynamic endpoint retrieval from <HighlightText text="design to production" /> using 
                  <HighlightText text="SQL" /> and <HighlightText text="C#" />
                </Text>
              )} />
              <Bullet text={(
                <Text>
                  Refactored an existing HTTP request factory to use template types, saving <HighlightText text="100+" /> lines for each model
                </Text>
              )} />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  </Flex>
);

export default Experience;