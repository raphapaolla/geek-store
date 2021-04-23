import styled, { css } from 'styled-components/native';

interface InputWapperProps {
  hasError?: boolean;
}

interface InputCustomProps {
  iconLeft?: boolean;
}

export const Container = styled.View`
  flex-direction: column;
  margin: 5px 0;
`;

export const InputWapper = styled.View<InputWapperProps>`
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;

  background-color: #eee;
  border-radius: 4px;

  align-items: center;

  margin: 10px 0;

  ${(props) =>
    props.hasError
      ? css`
          border-color: red;
        `
      : ''};
`;

export const InputCustom = styled.TextInput.attrs({
  placeholderTextColor: '#000'
})`
  padding: 4px 8px;
  color: #000;
  flex-grow: 1;
  font-size: 18px;
  max-width: 90%;
  height: 100%;

  padding: 12px 15px;
`;

export const TextError = styled.Text`
  font-size: 12px;
  color: red;
  text-align: center;
`;

export const Label = styled.Text`
  font-size: 15px;
  color: #000;
  text-align: left;
  margin-bottom: 4px;
`;

export const ErrorText = styled.Text`
  color: red;
`;
