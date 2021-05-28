import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  margin: 5px 0;
  flex: 1;
`;

export const InputWapper = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;

  border: 1px solid #d9d9d9;

  background-color: #fff;
  border-radius: 4px;
  padding: 2px 15px;

  align-items: center;

  margin: 10px 0;
`;

export const InputCustom = styled.TextInput`
  padding: 4px 8px;
  color: #000;
  flex-grow: 1;
  font-size: 18px;
  max-width: 90%;

  font-family: 'Roboto_400Regular';
`;
