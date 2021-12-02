import React from 'react';

import {Container, PrimaryText, SecondaryText} from './styles';

interface Props {
  primaryText: string;
  secondaryText: string | number;
}

export const CardInfoInvestment: React.FC<Props> = ({
  primaryText,
  secondaryText,
}) => {
  return (
    <Container>
      <PrimaryText>{primaryText}</PrimaryText>
      <SecondaryText>{secondaryText}</SecondaryText>
    </Container>
  );
};
