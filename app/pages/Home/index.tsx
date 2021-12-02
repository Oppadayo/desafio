import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {CardInvestment} from '../../components/CardInvestment';
import {Header} from '../../components/Header';

import {Box, Container, Text, TitleContainer} from './styles';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const [investments, setInvestiments] = useState([]);
  const [blocked, setBlocked] = useState(true);

  useEffect(() => {
    fetchInvestments();
  }, []);

  useEffect(() => {
    if (investments.indicadorCarencia === 'S') {
      setBlocked(true);
    } else {
      setBlocked(false);
    }
  }, [blocked, investments]);

  const fetchInvestments = async () => {
    try {
      const response = await fetch(
        'https://run.mocky.io/v3/7b2dfe42-37a3-4094-b7ce-8ee4f8012f30',
      );
      const json = await response.json();
      const data = json.response.data;
      setInvestiments(data.listaInvestimentos);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = data => {
    return (
      <CardInvestment
        investimentTitle={data.nome}
        goal={data.objetivo}
        value={data.saldoTotal}
        isDisabled={blocked}
        onPress={() => navigation.navigate('Rescue', {data})}
      />
    );
  };

  return (
    <Box>
      <Header title="Resgate" />
      <Container>
        <TitleContainer>
          <Text>Investimentos</Text>
          <Text>R$</Text>
        </TitleContainer>
      </Container>
      <FlatList
        data={investments}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({item}) => {
          return renderItem(item);
        }}
      />
    </Box>
  );
};
