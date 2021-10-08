import * as React from 'react';

import { Box, Stack, Text, TextProps } from '@chakra-ui/layout';

interface HeadingProps extends TextProps {
  text: string;
};

const Heading = ({ text = '', ...props }: HeadingProps) => (
  <Stack
    direction='row'
    width='full'
    spacing={4}
    {...props}
  >
    <Text color="gray.100" fontSize='2xl' fontWeight='bold'>{text}</Text>
    <Box borderWidth={1} height="1px" borderRadius={2} borderColor='cyan' flexGrow={1} alignSelf='center'/>
  </Stack>
);

export default Heading;