import { ChevronRightIcon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/layout';
import * as React from 'react';

interface BulletProps {
  text: string;
};

const Bullet = ({ text = '' }: BulletProps) => (
  <HStack
   spacing={1}
   display='flex'
   alignItems='center'
  >
    <ChevronRightIcon color="cyan" />
    <Text>{text}</Text>
  </HStack>
);

export default Bullet;