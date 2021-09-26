import * as React from 'react';

import { Text } from '@chakra-ui/layout';

interface HighlightTextProps {
    text: string;
}

const HighlightText = ({
    text = "",
}: HighlightTextProps) => {
    return (
        <Text as='span' color="cyan">{text}</Text>
    )
}

export default HighlightText;