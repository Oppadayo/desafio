import React from 'react';
import {TextInputProps} from 'react-native';
import {applyMask} from '../../services/utils/convertCurrency';
import {CardInfoInvestment} from '../CardInfoInvestment';

import {Container, Label, Line} from './styles';

interface Props extends TextInputProps {
  name: string;
  accumulated: string;
}

export const CardDeed: React.FC<Props> = ({name, accumulated}) => {
  return (
    <Container>
      <CardInfoInvestment primaryText="Ação" secondaryText={name} />
      <Line />
      <CardInfoInvestment
        primaryText="Saldo acumulado"
        secondaryText={applyMask(accumulated)}
      />
      <Line />
      <Label>Valor a resgatar</Label>
    </Container>
  );
};
