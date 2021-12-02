import {useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';

import {Button} from '../../components/Button';
import {CardDeed} from '../../components/CardDeed';
import {CardInfoInvestment} from '../../components/CardInfoInvestment';
import {Header} from '../../components/Header';
import {InputText} from '../../components/InputText';
import {ModalCard} from '../../components/Modal';

import {IInvestiment} from '../../types/Investments';
import {applyMask, removeMask} from '../../services/utils/convertCurrency';

import {
  Container,
  TitleContainer,
  Text,
  InvestmentInfo,
  Line,
  Deeds,
  DeedsList,
  InputContent,
  ErrorMessage,
} from './styles';

export const Rescue: React.FC = () => {
  const {params} = useRoute();

  const investiments = params as IInvestiment;

  const [value, setValue] = useState<string[]>([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [balances, setBalance] = useState(0);

  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalButton, setModalButton] = useState('');

  const handleChange = (text: string, index: number, balance: any) => {
    const data = [...value];
    data[index] = text;
    setValue(data);
    setBalance(balance);
  };

  const sumTotalBalance = () => {
    const noMask = value.map(m => Number(removeMask(m)));
    setTotalBalance(noMask.reduce((a, b) => a + b, 0));
  };

  const onSubmit = () => {
    if (hasError) {
      setModalTitle('DADOS INVÁLIDOS');
      setModalText(
        'Você preencheu um ou mais campos com valor acima do permitido:',
      );
      setModalButton('CORRIGIR');
      setModalVisible(true);
    } else {
      setModalTitle('RESGATE EFETUADO');
      setModalText(
        'o valor solicitado estará em sua conta em até 5 dias úteis',
      );
      setModalButton('NOVO RESGATE');
      setModalVisible(true);
    }
  };

  useEffect(() => {
    sumTotalBalance();
  });
  useEffect(() => {
    value.map(m => {
      const noMask = Number(removeMask(m));

      if (Number(noMask) > balances) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    });
  }, [value, balances]);

  console.log(modalVisible);

  const renderItem = (data, index: number) => {
    const saldo = (investiments.data.saldoTotal / data.percentual).toFixed(2);
    return (
      <>
        <CardDeed
          name={data.nome}
          accumulated={saldo}
          value={value[index]}
          placeholder={data.saldoTotal}
        />
        <InputContent>
          <InputText
            value={value[index]}
            onChangeText={txt => {
              handleChange(applyMask(txt), index, saldo);
            }}
          />
          {hasError && (
            <ErrorMessage>o valor não pode ser maior que {saldo}</ErrorMessage>
          )}
        </InputContent>
      </>
    );
  };

  return (
    <>
      <Header title="Resgate" />
      <Container>
        <TitleContainer>
          <Text>DADOS DO INVESTIMENTO</Text>
        </TitleContainer>
        <InvestmentInfo>
          <CardInfoInvestment
            primaryText="Nome"
            secondaryText={investiments.data.nome}
          />
          <Line />
          <CardInfoInvestment
            primaryText="Saldo total disponivel"
            secondaryText={applyMask(`${investiments.data.saldoTotal}`)}
          />
        </InvestmentInfo>

        <TitleContainer>
          <Text>RESGATE DO SEU JEITO</Text>
        </TitleContainer>
        <Deeds>
          <DeedsList
            data={investiments.data.acoes}
            keyExtractor={(_, index) => `${index}`}
            renderItem={({item, index}) => {
              return renderItem(item, index);
            }}
          />

          <CardInfoInvestment
            primaryText="Valor total a resgatar"
            secondaryText={applyMask(`${totalBalance}`)}
          />
        </Deeds>

        <Button text="Confirmar Resgate" onPress={onSubmit} />

        <ModalCard
          visible={modalVisible}
          title={modalTitle}
          text={modalText}
          buttonText={modalButton}
          onClose={() => setModalVisible(false)}
        />
      </Container>
    </>
  );
};
