import React from 'react';
import {Button} from '../Button';

import {Modal, Container, ModalView, TextContent, Title, Text} from './styles';

interface Props {
  title: string;
  text: string;
  buttonText: string;
  visible: boolean;
  onClose: () => void;
}

export const ModalCard: React.FC<Props> = ({
  title,
  text,
  buttonText,
  visible,
  onClose,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <Container>
        <ModalView>
          <TextContent>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TextContent>
          <Button text={buttonText} onPress={onClose} />
        </ModalView>
      </Container>
    </Modal>
  );
};
