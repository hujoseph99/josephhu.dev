import * as React from 'react';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { Text, VStack } from '@chakra-ui/layout';
import Heading from '../common/Heading';
import { css } from '@chakra-ui/styled-system';
import Bullet from '../common/Bullet';
import HighlightText from '../common/HighlightText';
import SectionContainer from '../common/SectionContainer';
import experienceData from './ExperienceData';

const Experience = () => (
  <SectionContainer isPrimary id='experience'>
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
          {experienceData.map(data => <Tab>{data.company}</Tab>)}
        </TabList>
        <TabPanels>
          {experienceData.map(data => (
            <TabPanel>
              <VStack
                alignItems='flex-start'
                spacing={1}
              >
                <Text fontSize='lg' color='gray.100' fontWeight='bold'>
                  {data.jobTitle} <HighlightText text={`@ ${data.company}`} />
                </Text>
                <Text fontWeight='bold' paddingbottom={10}>{data.duration}</Text>
                {data.bullets.map(text => <Bullet text={text} />)}
              </VStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </VStack>
  </SectionContainer>
);

export default Experience;