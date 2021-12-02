import React from 'react';

import {Container, Content, Goal, InvestmentTitle, Value} from './styles';

interface Props {
  investimentTitle: string;
  goal: string;
  value: string;
  isDisabled: boolean;
  onPress: () => void;
}

export const CardInvestment: React.FC<Props> = ({
  investimentTitle,
  goal,
  value,
  isDisabled,
  onPress,
}) => {
  // console.log(isDisabled);
  return (
    <Container disabled={isDisabled} onPress={onPress}>
      <Content>
        <InvestmentTitle>{investimentTitle}</InvestmentTitle>
        <Goal>{goal}</Goal>
      </Content>
      <Value>{value}</Value>
    </Container>
  );
};
