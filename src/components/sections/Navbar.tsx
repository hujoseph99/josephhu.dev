import * as React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Flex, Text } from '@chakra-ui/layout';
import Button from '../common/Button';
import { useMediaQuery } from '@chakra-ui/media-query';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
	const [isLarge] = useMediaQuery('(min-width: 62em)');

  return (
    <Flex
      height={['4rem', null, null, '6rem']}
      width='100%'
      position='fixed'
      zIndex='overlay'
      bgColor='gray.900'
      opacity={0.975}
      boxShadow='0 0px 25px -10px black'
    >
      <Flex
        flexDir='row'
        height='100%'
        width='100%'
        paddingX={[6, null, null, 12]}
        alignItems='center'
        justifyContent='space-between'
      >
        <Logo width={isLarge ? '3rem' : '2.2rem'} height={isLarge ? '3rem' : '2.2rem'} />
        {
          isLarge ? (
            <Flex
              flexDir='row'
              width='50rem'
              justifyContent='space-around'
              alignItems='center'
            >
              <Text fontSize='md'>About me</Text>
              <Text fontSize='md'>Projects</Text>
              <Text fontSize='md'>Experience</Text>
              <Text fontSize='md'>Contact me</Text>
              <Button text="Resume" />
            </Flex>
          ) : (
            <HamburgerIcon width='2rem' height='2rem' color='cyan' />
          )
        }
      </Flex>
    </Flex>
  )
};

export default Navbar;