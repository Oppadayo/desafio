import React from 'react';

import {Container, Input} from './styles';

interface Props {
  value?: string;
  onChangeText: (text: string) => void;
}

export const InputText: React.FC<Props> = ({value, onChangeText, ...props}) => {
  // const endEditingHandle = (text: string) => {
  //   console.log(text);
  //   text.map(m => {
  //     if (Number(text) > Number(removeMask(m))) {
  //       setError;
  //     }
  //   });
  // };

  return (
    <Container>
      <Input
        value={value}
        placeholder="Valor a resgatar"
        onChangeText={onChangeText}
        clearButtonMode="while-editing"
        keyboardType="number-pad"
        {...props}
      />
    </Container>
  );
};
