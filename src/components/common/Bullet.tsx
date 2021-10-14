import { ChevronRightIcon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/layout';
import * as React from 'react';

interface BulletProps {
  text: string | JSX.Element;
};

const Bullet = ({ text = '' }: BulletProps) => (
  <HStack
   spacing={3}
   display='flex'
   alignItems='flex-start'
  >
    <Text color="cyan">&gt;</Text>
    <Text>{text}</Text>
  </HStack>
);

export default Bullet;