import * as React from 'react';

import { Flex } from '@chakra-ui/layout';
import Button from '../Button';
import { useMediaQuery } from '@chakra-ui/media-query';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavbarLink from './NavbarLink';
import Logo from './Logo';

const Navbar = () => {
	const [isLarge] = useMediaQuery('(min-width: 62em)');

  return (
    <Flex
      height={['4rem', null, null, '5rem']}
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
        <Logo />
        {
          isLarge ? (
            <Flex
              flexDir='row'
              width='50rem'
              justifyContent='space-around'
              alignItems='center'
            >
              <NavbarLink text='About me' href='about' />
              <NavbarLink text='Experience' href='experience' />
              <NavbarLink text='Projects' href='projects' />
              <NavbarLink text='Contact me' href='contact' />
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