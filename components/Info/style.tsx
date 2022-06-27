import styled, { css } from 'styled-components/native';

export const Lista = styled.View`
  margin-top: 15px;
  align-items: center;
`;

export const Campo = styled.View`
  margin-bottom: 5px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Valor = styled.Text`
  color: black;
  display: flex;
  font-size: 20;
`;

export const Const = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 20;
`;