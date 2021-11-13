import * as React from 'react';

import { Box, Flex, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/modal';

import NavbarLink from './NavbarLink';
import Logo from './Logo';
import Button from '../Button';

const Navbar = () => {
	const [isLarge] = useMediaQuery('(min-width: 62em)');
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      height={['4rem', null, null, '5rem']}
      width='100%'
      position='fixed'
      zIndex='overlay'
      bgColor='gray.900'
      opacity={0.975}
      boxShadow='0 0px 25px -10px black'
      justifyContent='center'
      alignItems='center'
      paddingX={10}
    >
      <Flex
        flexDir='row'
        height='100%'
        width='100%'
        maxWidth='80rem'
        alignItems='center'
        justifyContent='space-between'
      >
        <Logo />
        {
          isLarge ? (
            <Flex
              flexDir='row'
              width='50rem'
              justifyContent='space-between'
              alignItems='center'
            >
              <NavbarLink text='About me' href='about' />
              <NavbarLink text='Experience' href='experience' />
              <NavbarLink text='Projects' href='projects' />
              <NavbarLink text='Contact me' href='contact' />
              <Button text="Resume" />
            </Flex>
          ) : (
            <>
              <IconButton
                variant='unstyled'
                aria-label='open drawer'
                icon={<HamburgerIcon width='2rem' height='2rem' color='cyan' />}
                onClick={onOpen}
                position='relative'
                justifySelf='flex-end'
              />
              <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent backgroundColor='gray.900'>
                  <DrawerBody display='flex' flexDir='column' justifyContent='space-between' px={10}>
                    <Flex flexDir='row-reverse' width='100%' height='4rem' alignItems='center'>
                      <IconButton 
                        aria-label='close drawer'
                        icon={<CloseIcon width='1.5rem' height='1.5rem' color='cyan' />}
                        onClick={onClose}
                        variant='unstyled'
                      />
                    </Flex>
                    <Flex flexDir='column' alignItems='center'>
                      <Text fontSize='2xl' color='gray.100' fontWeight='extrabold' mb='3rem'>Go To...</Text>
                      <NavbarLink text='Home' href='hero' closeDrawer={onClose} mb='2.3rem' />
                      <NavbarLink text='About me' href='about' closeDrawer={onClose} mb='2.3rem' />
                      <NavbarLink text='Experience' href='experience' closeDrawer={onClose} mb='2.3rem' />
                      <NavbarLink text='Projects' href='projects' closeDrawer={onClose} mb='2.3rem' />
                      <NavbarLink text='Contact me' href='contact' closeDrawer={onClose} mb='3rem' />
                      <Button text="Resume" size='lg' />
                    </Flex>
                    <Box></Box>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )
        }
      </Flex>
    </Flex>
  )
};

export default Navbar;