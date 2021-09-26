import * as React from 'react';

import { 
	Flex, 
	GridItem, 
	SimpleGrid, 
	Text, 
} from "@chakra-ui/layout";
import { useMediaQuery, Box } from '@chakra-ui/react';

import HighlightText from '../common/HighlightText';
import Button from '../common/Button';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import { ReactComponent as AvatarBlob } from '../../assets/avatar_blob.svg';

export const Hero = () => {
	const [isLarge] = useMediaQuery("(min-width: 62em)");

	return (
		<SimpleGrid
			bgColor="gray.900" 
			minH="100vh" 
			minW="100vw"
			columns={[6, null, null, 12]}
      padding={[10]}
		>
			<GridItem colSpan={6}>
				<Flex width='full' height='full' alignItems='center' justifyContent={isLarge ? 'flex-end' : 'center'}>
					<Flex
						flexDirection="column"
						alignItems="flex-start"
						maxW="40em"
					>
						<Text>👋 Hi, my name is</Text>
						<Text 
							color="cyan" 
							fontSize={["5xl", null, null, "7xl"]} 
							fontWeight="extrabold"
							lineHeight={1}
							mt={2}
						>
							Joseph Hu.
						</Text>
						<Text 
							color="gray.50" 
							fontSize={["4xl", null, null, "6xl"]} 
							fontWeight="normal"
							lineHeight={[1.1, null, 1]}
							mt={4}
						>
							I build all things web.
						</Text>
						<Text mt={4}>
							I'm a software engineer that specializes in web development. 
							I currently work as a full-stack developer at <HighlightText text="Adeptmind" />.
						</Text>
						<Button mt={12} text="Get in Touch"/>
					</Flex>
				</Flex>
			</GridItem>
			{isLarge && (
				<GridItem colSpan={6}>
					<Flex maxW="40em" height="full" alignItems="flex-start">
						<Flex width="full" height="full" alignItems="center" justifyContent="center">
							<Box position='absolute' width="30em" height="30em" transform="rotate(180deg)">
								<AvatarBlob />
							</Box>
							<Box position='absolute' width="15em" height="15em" mb="3em">
								<Avatar />
							</Box>
						</Flex>
					</Flex>
				</GridItem>
			)}
		</SimpleGrid>
	);
};