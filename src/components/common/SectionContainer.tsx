import * as React from 'react';

import { Box, Flex } from '@chakra-ui/layout';

interface SectionContainerProps {
  isPrimary?: boolean;
  isFullScreen?: boolean;
  children?: React.ReactNode;
  id?: string;
};

const SectionContainer = ({
  isPrimary = false,
  isFullScreen = false,
  children = null,
  id = ''
}: SectionContainerProps): JSX.Element => (
  <Flex
    width='100%'
    height={isFullScreen ? '100vh' : 'fit-content'}
    bgColor={isPrimary ? 'gray.900' : 'gray.800'}
    alignContent='center'
    justifyContent='center'
    paddingX={10}
    paddingY={isFullScreen ? 10 : '5rem'}
    id={id}
  >
    <Box
      maxWidth='80rem'
    >
      {children}
    </Box>
  </Flex>
);

export default SectionContainer;