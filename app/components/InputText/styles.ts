import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  height: 30px;
  width: 100%;
  margin: 0 32px;
  background-color: #fff;
  border-bottom-width: 2px;
  border-bottom-color: #f4f4f4;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
  margin-left: 32px;
  margin-top: 4px;
`;
