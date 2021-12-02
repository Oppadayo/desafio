import React from 'react';

import {Container, Text} from './styles';

interface Props {
  text: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({text, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
};
