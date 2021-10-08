import * as React from 'react';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { Box, Center, Flex, VStack } from '@chakra-ui/layout';
import Heading from '../common/Heading';
import { css } from '@chakra-ui/styled-system';
import { NONAME } from 'dns';

const Experience = () => (
  <Flex
    width='100vw'
    maxW='100vw'
    bgColor="gray.900"
    justifyContent='center'
    alignContent='center'
    paddingY="5em"
  >
    <VStack>
      <Heading text='Experience' paddingX={10} />
      <Tabs colorScheme='cyan' width='50em' maxWidth='100vw' paddingX={10} isFitted variant='line'>
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
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  </Flex>
);

export default Experience;