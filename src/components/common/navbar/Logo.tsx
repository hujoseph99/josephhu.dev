import * as React from 'react';

import { IconButton } from '@chakra-ui/button';
import { useMediaQuery } from '@chakra-ui/media-query';

import { ReactComponent as LogoSVG } from '../../../assets/logo.svg';

const Logo = (): JSX.Element => {
	const [isLarge] = useMediaQuery('(min-width: 62em)');

  const handleClick = () => {
    const element = document.getElementById('hero');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <IconButton
      aria-label='logo'
      variant='unstyled'
      onClick={handleClick}
      icon={(
        <LogoSVG
          width={isLarge ? '3rem' : '2.2rem'} 
          height={isLarge ? '3rem' : '2.2rem'} 
          fill='cyan' 
        />
      )}
    />
  )
}

export default Logo;
