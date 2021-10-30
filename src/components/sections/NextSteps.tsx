import { Flex, Text } from '@chakra-ui/layout';
import * as React from 'react';
import Button from '../common/Button';

const NextSteps = () => {
  return (
    <Flex
      width='100vw'
      height='100vh'
      flexDirection='column'
      bgColor="gray.900"
      paddingY="7rem"
      justifyContent='center'
      alignItems='center'
      paddingX={5}
    >
      <Flex flexDir='column' maxW='30rem' width='100%' alignItems='center'>
        <Text 
          fontSize={['2xl', null, null, '3xl']} 
          color='gray.100' 
          fontWeight='extrabold'
          textAlign='center'
          mb={7}
        >
          What's Next? 
          <Text as='span' color='cyan'> Get in Touch</Text>
        </Text>
        <Text textAlign='center' mb={10}>
          I’m currently looking for Summer 2022 intership opportunities, so don’t hesitate reach 
          out! Whether you have questions or just want to say hi, I’m always up for a conversation!
        </Text>
        <Button text='Say Hello' />
      </Flex>
    </Flex>
  )
}

export default NextSteps;