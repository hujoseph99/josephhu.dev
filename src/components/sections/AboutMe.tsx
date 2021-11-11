import * as React from 'react';

import { Box, Flex, GridItem, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { ReactComponent as Illustration } from '../../assets/about_me.svg'
import Heading from '../common/Heading';
import HighlightText from '../common/HighlightText';
import Bullet from '../common/Bullet';
import SectionContainer from '../common/SectionContainer';
import { css } from '@emotion/react';
import SVGs from '../svgs/SVGs';

const AboutMe = () => {
	const [isLarge] = useMediaQuery('(min-width: 62em)');

  return (
    <SectionContainer isPrimary={false} id='about'>
      <SimpleGrid 
        width='100%'
        columns={[1, null, null, 2]}
      >
        {isLarge && (
          <GridItem 
            display='flex' 
            alignSelf='center'
            alignItems='center' 
            justifyContent='flex-start' 
            mr={4} 
            height='16rem' 
            overflow='hidden'
          >
            <SVGs name='about_me' width='30rem' height='30rem' />
          </GridItem>
        )}
        <GridItem display='flex' justifyContent={isLarge ? 'flex-start' : 'center'} alignItems='center'>
          <Flex maxW='35rem' alignItems='center' justifyContent='center' flexDir='column'>
            <Heading text="About me" mb={3} />
            <Text mb={3}>
              Hello! My name is <HighlightText text="Joseph Hu" /> and I’m currently a fourth 
              year computer science student studying at the <HighlightText text='University of Waterloo' />. 
              So far, I’ve had the opportunity of interning at <HighlightText text='massive corporations' />, 
              <HighlightText text=' scale-ups' />, and <HighlightText text='start-ups' />. I’ve never stopped
              learning and I’m very excited for the next opportunity!
            </Text>
            <Text mb={3}>
              Here are a few of the technologies that I've been working with recently:
            </Text>
            <SimpleGrid
              columns={[1, 2]}
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
          </Flex>
        </GridItem>
      </SimpleGrid>

    </SectionContainer>
  );
};

export default AboutMe;