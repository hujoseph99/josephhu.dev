import * as React from 'react';

import { 
  Button as ChakraButton, 
  ButtonProps as ChakraButtonProps 
} from '@chakra-ui/button';

interface ButtonProps extends ChakraButtonProps {
  text: string;
}

const Button = ({
  text = "",
  ...props
}: ButtonProps) => (
  <ChakraButton
    color="cyan"
    borderWidth={2}
    borderColor="cyan"
    variant="outline"
    p={[4, null, 6]}
    borderRadius={10}
    fontSize={["sm", null, "md"]}
    fontWeight="normal"
    {...props}
  >
    {text}
  </ChakraButton>
);

export default Button;