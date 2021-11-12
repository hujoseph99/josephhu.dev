import * as React from 'react';

import { Box, GridItem, GridItemProps, HStack, SimpleGrid, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from '@chakra-ui/image';

import Heading from '../common/Heading';
import SectionContainer from '../common/SectionContainer';
import projectData from './ProjectsData';
import SVGs from '../svgs/SVGs';

const Projects = () => {
  const [isLarge] = useMediaQuery('(min-width: 62em)');

  return (
    <SectionContainer isPrimary={false} id='projects'>
      <SimpleGrid 
        width='100%'
        columns={[1, null, null, 2]}
        spacingX={['1rem', null, null, '3rem', '6rem']}
      >
        <GridItem colSpan={1} display='flex' justifyContent='flex-end' maxWidth='35rem'>
          <Heading text="My Projects"  />
        </GridItem>
        {isLarge && <GridItem colSpan={1} />}
        {
          projectData.map((data, idx) => {
            const image = isLarge && (
              <GridItem colSpan={1} display='flex' justifyContent='center' alignItems='center' mt={16}>
                <Box width='100%' maxWidth='35rem'>
                  <Image src={data.image} borderRadius={10} />
                </Box>
              </GridItem>
            );

            const mobileCardProps : GridItemProps = !isLarge ? {
              borderRadius: 10,
              boxShadow: '1px 5px 12px rgba(0, 0, 0, 0.4)',
              padding: '2rem', 
              backgroundColor: '#171d28'
            } : {};

            const content = (
              <GridItem 
                colSpan={1} 
                display='flex' 
                flexDirection='column'
                alignItems='flex-start' 
                justifyContent='center'
                maxWidth='35rem'
                mt={16} 
                {...mobileCardProps}
              >
                <Text fontSize='xs' color='cyan'>Feature Project</Text>
                <Text fontSize='2xl' color='gray.100' fontWeight='bold' mb={2}>{data.title}</Text>
                {data.body.map(section => (
                  <Box mb={3} width='100%'>
                    {section}
                  </Box>
                ))}
                <HStack spacing={4} mt={2}>
                  {data.links.map(link => (
                    <Box 
                      _hover={{ color: 'cyan' }} 
                      color='gray.400' 
                      onClick={() => window.open(link.link)}
                      css={{
                        cursor: 'pointer'
                      }}
                    >
                      <SVGs name={link.icon} width='1.5rem' height='1.5rem' />
                    </Box>
                  ))}
                </HStack>
              </GridItem>
            );

            return idx % 2 === 0 ? [image, content] : [content, image];
          })
        }
      </SimpleGrid>
    </SectionContainer>
  );
};

export default Projects;