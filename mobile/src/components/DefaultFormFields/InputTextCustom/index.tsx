import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { ReturnKeyTypeOptions } from 'react-native';
import {
  Container,
  ErrorText,
  InputCustom,
  InputWapper,
  Label
} from './styles';

interface OwnProps {
  placeholder?: string;
  label?: string;
  value?: any;
  Icon?: any;
  iconConfig?: any;
  iconLeft?: boolean;
  error?: any;
  keyboardType?: any;
  maxLength?: number;
  secureTextEntry?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onChangeText: any;
  onSubmitEditing?: any;
  styles?: any;
}

const InputTextCustom: ForwardRefRenderFunction<unknown, OwnProps> = (
  props: OwnProps,
  ref?: React.Ref<any>
) => {
  const {
    label,
    error,
    value,
    iconConfig,
    Icon,
    onChangeText,
    iconLeft,
    styles,
    ...rest
  } = props;

  return (
    <Container>
      {label ? <Label>{label}</Label> : null}
      <InputWapper style={styles} hasError={!!error}>
        {Icon && iconLeft ? <Icon {...iconConfig} /> : null}

        <InputCustom
          value={value}
          autoCorrect={false}
          onChangeText={onChangeText}
          {...rest}
          ref={ref}
        />

        {Icon && !iconLeft ? <Icon {...iconConfig} /> : null}
      </InputWapper>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default forwardRef(InputTextCustom);
