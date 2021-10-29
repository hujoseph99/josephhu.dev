import * as React from 'react';

import { Box, Flex, GridItem, SimpleGrid } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import Heading from '../common/Heading';

const Projects = () => {
  const [isLarge] = useMediaQuery('(min-width: 62em)');

  return (
    <Flex
      flexDirection='column'
      width='100vw'
      maxW='100%'
      bgColor="gray.800"
      justifyContent='center'
      alignContent='center'
      paddingY="7rem"
      paddingX={10} 
    >
      <Box
        width={['100%', null, null, '50%']}
      >
        <Heading text="My Projects"  />
      </Box>
      <SimpleGrid 
        width='100%'
        columns={[1, null, null, 2]}
        padding={[10]}
        paddingY="5rem"
        spacingX={['1rem', null, null, '3rem', '6rem']}
      >
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;