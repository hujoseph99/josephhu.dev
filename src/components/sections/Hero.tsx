import React, { useState } from 'react';

import { 
	GridItem, 
	SimpleGrid, 
	Text, 
} from '@chakra-ui/layout';
import { useMediaQuery, Box } from '@chakra-ui/react';

import HighlightText from '../common/HighlightText';
import Button from '../common/Button';
import SectionContainer from '../common/SectionContainer';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import { ReactComponent as AvatarBlob } from '../../assets/avatar_blob.svg';

export const Hero = () => {
	const [isLarge] = useMediaQuery('(min-width: 62em)');
	const [hovering, setHovering] = useState(false);

	return (
		<SectionContainer isPrimary isFullScreen id='hero'>
			<SimpleGrid
				width='100%'
				height='100%'
				columns={[1, null, null, 2]}
			>
				<GridItem colSpan={[1, null, null, 2]} />
				<GridItem 
					colSpan={1} 
					display='flex' 
					flexDir='column'
					alignItems='flex-start' 
					justifyContent='center'
					maxWidth='40rem'
				>
					<Text>👋 Hi, my name is</Text>
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
						lineHeight={1}
						mt={4}
					>
						I build all things web.
					</Text>
					<Text mt={4}>
						I'm a software engineer that specializes in web development. 
						I currently work as a full-stack developer at <HighlightText text='Adeptmind' />.
					</Text>
					<Button 
						mt={12} 
						text='Get in Touch' 
						onClick={() => window.open('mailto:hujoseph99@gmail.com')}
					/>
				</GridItem>
				{isLarge && (
					<GridItem 
						colSpan={1}
						display='flex'
						alignItems='center'
						justifyContent='flex-end'
					>
						<Box 
							position='absolute' 
							width='100%' 
							height='100%' 
							maxWidth='32rem' 
							maxHeight='32rem' 
							transform='rotate(180deg)'
						>
							<AvatarBlob />
						</Box>
						<Box 
							position='absolute' 
							width='100%' 
							height='100%' 
							maxWidth='15rem' 
							maxHeight='15rem' 
							mb='3rem'
							mr='8rem'
						>
							<Avatar />
						</Box>
					</GridItem>
				)}
				<GridItem 
					colSpan={[1, null, null, 2]} 
					display='flex' 
					alignItems='flex-end' 
					justifyContent='center'
				>
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
							className={hovering ? 
								'animate__animated animate__fadeOutDown animate__infinite animate__slow' :
								''
							}
							width='1rem' 
							height='1rem' 
							bgColor='cyan' 
							borderRadius={20} 
							marginTop={2}
						/>
					</Box>
				</GridItem>
			</SimpleGrid>
		</SectionContainer>
	);
};