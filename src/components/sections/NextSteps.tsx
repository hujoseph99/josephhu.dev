import * as React from 'react';

import { Flex, Text } from '@chakra-ui/layout';

import Button from '../common/Button';
import SectionContainer from '../common/SectionContainer';

const NextSteps = () => {
  return (
    <SectionContainer isFullScreen isPrimary id='contact'>
      <Flex flexDir='column' maxW='35rem' height='100%' alignItems='center' justifyContent='center'>
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
          out! Whether you have questions or just want to say hi, I’m always up for a conversation.
        </Text>
        <Button text='Say Hello' onClick={() => window.open('mailto:hujoseph99@gmail.com')} />
      </Flex>
    </SectionContainer>
  )
}

export default NextSteps;