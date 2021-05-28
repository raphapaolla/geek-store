import styled, { css } from 'styled-components/native';

interface InputWapperProps {
  hasError?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;

  background-color: #fff;
  border-radius: 4px;

  align-items: center;

  margin: 10px 0;
`;

export const SelectWrapper = styled.View<InputWapperProps>`
  border: 1px solid #eee;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;

  background-color: #fff;
  border-radius: 4px;

  border-radius: 4px;

  align-items: center;

  ${(props) =>
    props.hasError
      ? css`
          border-color: red;
        `
      : ''};

  flex: 1;
`;

export const Label = styled.Text`
  font-size: 15px;
  color: #000;
  text-align: left;
  margin-bottom: 4px;
`;

export const LabelRequiredArea = styled.View`
  flex-direction: row;
`;
