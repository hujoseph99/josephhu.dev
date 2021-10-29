import * as React from 'react';

import { Box, Flex, GridItem, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { ReactComponent as Illustration } from '../../assets/about_me.svg'
import Heading from '../common/Heading';
import HighlightText from '../common/HighlightText';
import Bullet from '../common/Bullet';

const AboutMe = () => {
	const [isLarge] = useMediaQuery('(min-width: 62em)');

  return (
    <SimpleGrid 
      bgColor='gray.800' 
      width='100vw'
      maxWidth='100%'
      columns={[1, null, null, 2]}
      padding={[10]}
      paddingY="5rem"
      spacingX={['1rem', null, null, '3rem', '6rem']}
    >
      {isLarge && (
        <GridItem display='flex' justifyContent='flex-end' alignItems='center'>
          <Illustration width='30rem' height='30rem' />
        </GridItem>
      )}
      <GridItem display='flex' justifyContent={isLarge ? 'flex-start' : 'center'} alignItems='center'>
        <VStack maxW='30rem' height='full' alignItems='center' justifyContent='center' spacing={3}>
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
          <SimpleGrid
            columns={[1, null, null, 2]}
            spacingY={1}
            width='full'
          >
            <GridItem>
              <Bullet text="Typescript" />
            </GridItem>
            <GridItem>
              <Bullet text="React" />
            </GridItem>
            <GridItem>
              <Bullet text="Go" />
            </GridItem>
            <GridItem>
              <Bullet text="Python" />
            </GridItem>
          </SimpleGrid>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default AboutMe;