import * as React from 'react';

import { Box, Flex, GridItem, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from '@chakra-ui/image';

import Heading from '../common/Heading';
import DevRacerIllustration from '../../assets/devracer.png';
import SudokuIllustration from '../../assets/sudoku.png';
import HighlightText from '../common/HighlightText';
import { FaExternalLinkAlt, FaGithub, FaLink, FaShare } from 'react-icons/fa';
import Bullet from '../common/Bullet';

const Projects = () => {
  const [isLarge] = useMediaQuery('(min-width: 62em)');

  return (
    <Flex
      flexDirection='column'
      width='100%'
      bgColor="gray.800"
      justifyContent='center'
      alignContent='center'
      paddingY="7rem"
      overflow='hidden'
    >
      <SimpleGrid 
        width='100%'
        columns={[1, null, null, 2]}
        padding={[10]}
        paddingY="5rem"
        spacingX={['1rem', null, null, '3rem', '6rem']}
      >
        <GridItem colSpan={1} display='flex' justifyContent='flex-end'>
          <Box width='100%' maxWidth='30rem'>
            <Heading text="My Projects"  />
          </Box>
        </GridItem>
        <GridItem colSpan={1} />
        {isLarge && 
          <GridItem colSpan={1} display='flex' justifyContent='flex-end' mb={20} mt={10}>
            <Box width='100%' maxWidth='30rem'>
              <Image src={DevRacerIllustration} borderRadius={10} />
            </Box>
          </GridItem>
        }
        <GridItem colSpan={1} display='flex' alignItems='center' mb={20} mt={10}>
          <Flex flexDirection='column' width='100%' maxWidth='30rem' alignItems='flex-start'>
            <Text fontSize='xs' color='cyan'>Feature Project</Text>
            <Text fontSize='2xl' color='gray.100' fontWeight='bold' mb={2}>DevRacer</Text>
            <Text mb={1}>
              An online <HighlightText text="multiplayer" /> typing game inspired by Typeracer made 
              for developers. Type popular code snippets from different languages and race against 
              your friends!
            </Text>
            <Text mb={2}>
              This is a <HighlightText text="full-stack" /> web app that is built on top of 
              <HighlightText text=" React" />, <HighlightText text="Go" />, and 
              <HighlightText text=" MongoDB" />. It also incorporates various other technologies 
              such as <HighlightText text="OAuth" />, <HighlightText text="JWT" />, 
              <HighlightText text=" GraphQL" />, <HighlightText text="Redux" />, and 
            <HighlightText text=" Websockets" />.
            </Text>
            <HStack mt="1rem">
              <FaGithub color="#A0AEC0" />
              <FaExternalLinkAlt color="#A0AEC0" />
            </HStack>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} display='flex' alignItems='center' justifyContent='flex-end'>
          <Flex flexDirection='column' width='100%' maxWidth='30rem' mb={20} >
            <Text fontSize='xs' color='cyan'>Feature Project</Text>
            <Text fontSize='2xl' color='gray.100' fontWeight='bold' mb={2}>Sudoku</Text>
            <Text mb={1}>
              A simple sudoku web app that served as my introductory project to web development. 
              It is a completely frontend app which is built on <HighlightText text="React" /> and 
              <HighlightText text=" Bootstrap" />. The game 
              itself supports various features such as:
            </Text>
            <SimpleGrid
              columns={[1, null, null, 2]}
              spacingY={1}
              width='full'
              mb={2}
            >
              <GridItem>
                <Bullet text="Note Taking" />
              </GridItem>
              <GridItem>
                <Bullet text="Custom difficulties" />
              </GridItem>
              <GridItem>
                <Bullet text="Hints" />
              </GridItem>
              <GridItem>
                <Bullet text="Solver" />
              </GridItem>
            </SimpleGrid>
            <HStack mt="1rem">
              <FaGithub color="#A0AEC0" />
              <FaExternalLinkAlt color="#A0AEC0" />
            </HStack>
          </Flex>
        </GridItem>
        {isLarge && 
          <GridItem colSpan={1} display='flex' justifyContent='flex-start'>
            <Box width='100%' maxWidth='30rem'>
              <Image src={SudokuIllustration} borderRadius={10} />
            </Box>
          </GridItem>
        }
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;