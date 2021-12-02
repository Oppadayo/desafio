import React from 'react';
import {Container, Title, Strip} from './styles';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({title}) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
      </Container>
      <Strip />
    </>
  );
};
