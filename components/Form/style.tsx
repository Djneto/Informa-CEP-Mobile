import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Card = styled.View`
  margin: 36px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titulo = styled.Text`
  color: black;
  font-size: 32;
  font-weight: bold;
  ${Platform.select({ ios: css`font-family: 'Roboto'`, android: css`fontFamily: 'Roboto'` })};
`;

export const Entrada = styled.TextInput`
  margin-top: 20px;
  width: 320px;
  height: 48px;
  background: white;
  border: 1px solid black;
  border-radius: 6px;
  font-size: 20;
  text-align: center;
  margin-bottom: 10px;
`;

export const Botao = styled.TouchableOpacity<{bgColor: string}>`
  height: 45px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  display: flex;
  background-color: ${props => props.bgColor};
`;

export const BotaoTexto = styled.Text`
  font-size: 17;
  color: white;
  font-weight: bold;
`;

export const Erro = styled.Text`
  margin-top: 10px;
  color: black;
  font-size: 16;
  text-align: center;
`;

export const Loading = styled.View`
  padding-top: 50px;
`;