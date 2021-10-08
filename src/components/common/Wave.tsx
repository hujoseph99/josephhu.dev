import { Box } from '@chakra-ui/layout';
import * as React from 'react';

import { ReactComponent as WaveSVG } from '../../assets/wave.svg'

interface WaveProps {
  color: 'normal' | 'reverse'
  direction: 'normal' | 'reverse';
}

const Wave = ({ color='normal', direction='normal' }: WaveProps) => (
  <Box 
    width='full' 
    bgColor={color === 'normal' ? 'gray.900' : 'gray.800'} 
    transform={direction === 'reverse' ? 'rotate(180deg)' : 'scaleX(-1)'}
  >
    <WaveSVG fill={color === 'normal' ? 'gray.800' : 'gray.900'}/>
  </Box>
);

export default Wave;