import styled from 'styled-components/native';
interface Props {
  visible: boolean;
}

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  width: 90%;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const TextContent = styled.View`
  width: 100%;
  background-color: white;
  padding-top: 35px;
  padding-right: 35px;
  padding-left: 35px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #00375f;
`;
export const Text = styled.Text`
  font-size: 16px;
  color: #00375f;

  margin-bottom: 20px;
  margin-top: 20px;
`;
