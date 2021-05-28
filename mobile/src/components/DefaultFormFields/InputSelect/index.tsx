import React, { useState } from 'react';
import PickerSelect from 'react-native-picker-select';
import { Container, Label, SelectWrapper } from './styles';

interface IOwnProps {
  value?: any;
  label?: string;
  items?: any;
  onChangeValue?: any;
  error?: any;
  required?: boolean;
}

const InputSelect = (props: IOwnProps) => {
  const { label, value, items, onChangeValue, required, error } = props;

  const [defaultValue] = useState({
    label: 'Selecione um item...',
    value: '',
    key: 'selectTeste'
  });

  return (
    <>
      <Label>{label}</Label>
      <Container>
        <SelectWrapper hasError={!!error}>
          <PickerSelect
            value={value}
            items={items}
            onValueChange={onChangeValue}
            placeholder={defaultValue}
            style={pickerStyle}
          />
        </SelectWrapper>
      </Container>
    </>
  );
};

const commonStyles = {
  color: '#000',
  borderRadius: 4,
  paddingVertical: 28,
  paddingHorizontal: 8,
  paddingRight: 30
};

const pickerStyle = {
  inputIOS: commonStyles,
  inputAndroid: commonStyles
};

export default InputSelect;
