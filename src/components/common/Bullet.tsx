import * as React from 'react';

import { HStack, Text } from '@chakra-ui/layout';

interface BulletProps {
  text: string | React.ReactNode;
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