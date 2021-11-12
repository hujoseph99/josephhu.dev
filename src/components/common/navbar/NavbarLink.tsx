import * as React from 'react';
import { css } from '@emotion/react';

import { Text, TextProps } from '@chakra-ui/layout';

interface NavbarLinkProps extends TextProps {
  text?: string;
  href?: string;
  closeDrawer?: () => void | undefined;
}

const NavbarLink = ({
  text = '',
  href = '#',
  closeDrawer = undefined,
  ...props
}: NavbarLinkProps): JSX.Element => {
  const [hovering, setHovering] = React.useState(false);

  const handleClick = () => {
    const element = document.getElementById(href);
    if (closeDrawer) {
      closeDrawer();
      element?.scrollIntoView();
    } else {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
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
      {...props}
    >
      {text}
    </Text>
  )
};

export default NavbarLink;