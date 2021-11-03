import * as React from 'react';
import { css } from '@emotion/react';

import { Text, TextProps } from '@chakra-ui/layout';

interface NavbarLinkProps extends TextProps {
  text?: string;
  href?: string;
}

const NavbarLink = ({
  text = '',
  href = '#',
}: NavbarLinkProps): JSX.Element => {
  const [hovering, setHovering] = React.useState(false);

  const handleClick = () => {
    const element = document.getElementById(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Text 
      variant='link' 
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      color={hovering ? 'cyan' : ''}
      onClick={handleClick}
      css={css`
        cursor: pointer;
      `}
    >
      {text}
    </Text>
  )
};

export default NavbarLink;