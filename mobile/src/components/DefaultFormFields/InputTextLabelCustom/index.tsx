import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { ReturnKeyTypeOptions } from 'react-native';
import { Container, InputCustom, InputWapper, Label } from './styles';

interface OwnProps {
  placeholder?: string;
  label?: string;
  value?: any;
  keyboardType?: any;
  maxLength?: number;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onChangeText: any;
  onSubmitEditing?: any;
  styles?: any;
  multiline?: boolean;
}

const InputTextLabelCustom: ForwardRefRenderFunction<unknown, OwnProps> = (
  props: OwnProps,
  ref?: React.Ref<any>
) => {
  const { label, value, onChangeText, styles, ...rest } = props;

  return (
    <Container>
      {label ? <Label>{label}</Label> : null}
      <InputWapper style={styles}>
        <InputCustom
          value={value}
          autoCorrect={false}
          onChangeText={onChangeText}
          {...rest}
          ref={ref}
        />
      </InputWapper>
    </Container>
  );
};

export default forwardRef(InputTextLabelCustom);
