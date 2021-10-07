import * as React from 'react';

import { Box, Flex, GridItem, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { ReactComponent as Illustration } from '../../assets/about_me.svg'
import Heading from '../common/Heading';
import HighlightText from '../common/HighlightText';

const AboutMe = () => {
	const [isLarge] = useMediaQuery('(min-width: 62em)');

  return (
    <SimpleGrid 
      bgColor='gray.800' 
      height='75vh' 
      width='100vw'
      columns={[6, null, null, 12]}
      padding={[10]}
    >
      {isLarge && (
        <GridItem colSpan={6}>
          <Flex maxW='40em' height='full' alignItems='center' justifyContent='center'>
            <Flex width='30em' height='30em' justifyContent='center'>
              <Illustration />
            </Flex>
          </Flex>
        </GridItem>
      )}
      <GridItem colSpan={6}>
        <VStack maxW='30em' height='full' alignItems='center' justifyContent='center' spacing={3}>
          <Heading text="About me" />
          <Text fontSize='sm'>
            Hello! My name is <HighlightText text="Joseph Hu" /> and I’m currently a fourth 
            year computer science student studying at the <HighlightText text='University of Waterloo' />. 
            So far, I’ve had the opportunity of interning at <HighlightText text='massive corporations' />, 
            <HighlightText text=' scale-ups' />, and <HighlightText text='start-ups' />. I’ve never stopped
            learning and I’m very excited for the next opportunity!
          </Text>
          <Text>
            Here are a few of the technologies that I've been working with recently:
          </Text>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default AboutMe;