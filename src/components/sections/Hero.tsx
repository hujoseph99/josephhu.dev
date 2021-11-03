import React, { useState } from 'react';

import { 
	Flex, 
	GridItem, 
	SimpleGrid, 
	Text, 
} from '@chakra-ui/layout';
import { useMediaQuery, Box } from '@chakra-ui/react';

import HighlightText from '../common/HighlightText';
import Button from '../common/Button';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import { ReactComponent as AvatarBlob } from '../../assets/avatar_blob.svg';
import Navbar from '../common/navbar/Navbar';

export const Hero = () => {
	const [hovering, setHovering] = useState(false);
	const [isLarge] = useMediaQuery('(min-width: 62em)');

	return (
		<Flex bgColor='gray.900' width='100%' height='100vh' flexDir='column' id='hero'>
			<Navbar />
			<SimpleGrid
				columns={[6, null, null, 12]}
				padding={[10]}
				flexGrow={1}
				alignContent='space-between'
			>
				<GridItem colSpan={[6, null, null, 12]} />
				<GridItem colSpan={6}>
					<Flex width='full' height='full' alignItems='center' justifyContent={isLarge ? 'flex-end' : 'center'}>
						<Flex
							flexDirection='column'
							alignItems='flex-start'
							maxW='40rem'
						>
							<Text fontSize='md'>👋 Hi, my name is</Text>
							<Text 
								color='cyan' 
								fontSize={['5xl', null, null, '7xl']} 
								fontWeight='extrabold'
								lineHeight={1}
								mt={2}
							>
								Joseph Hu.
							</Text>
							<Text 
								color='gray.50' 
								fontSize={['4xl', null, null, '6xl']} 
								fontWeight='normal'
								lineHeight={[1.1, null, 1]}
								mt={4}
							>
								I build all things web.
							</Text>
							<Text mt={4} fontSize='md'>
								I'm a software engineer that specializes in web development. 
								I currently work as a full-stack developer at <HighlightText text='Adeptmind' />.
							</Text>
							<Button mt={12} text='Get in Touch' onClick={() => window.open('mailto:hujoseph99@gmail.com')} />
						</Flex>
					</Flex>
				</GridItem>
				{isLarge && (
					<GridItem colSpan={6}>
						<Flex maxW='40rem' height='full' alignItems='flex-start'>
							<Flex width='full' height='full' alignItems='center' justifyContent='center'>
								<Box position='absolute' width='30rem' height='30rem' transform='rotate(180deg)'>
									<AvatarBlob />
								</Box>
								<Box position='absolute' width='15rem' height='15rem' mb='3rem'>
									<Avatar />
								</Box>
							</Flex>
						</Flex>
					</GridItem>
				)}
				<GridItem colSpan={[6, null, null, 12]}>
					<Flex width='full' height='full' alignItems='flex-end' justifyContent='center'>
						<Box 
							width='2rem' 
							height='4rem'
							display='flex'
							justifyContent='center'
							borderColor='cyan' 
							borderWidth={2} 
							borderRadius={20} 
							onMouseEnter={() => setHovering(true)}
							onMouseLeave={() => setHovering(false)}
						>
							<Box 
								className={hovering ? 'animate__animated animate__fadeOutDown animate__infinite animate__slow' : ''}
								width='1rem' 
								height='1rem' 
								bgColor='cyan' 
								borderRadius={20} 
								marginTop={2}
							/>
						</Box>
					</Flex>
				</GridItem>
			</SimpleGrid>
		</Flex>
	);
};