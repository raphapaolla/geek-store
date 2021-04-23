import React from 'react';
import { Container, InputCustom, InputWapper } from './styles';

interface OwnProps {
  placeholder?: string;

  value?: any;
  onChangeText: any;
  Icon?: any;
  iconConfig?: any;
  iconLeft?: boolean;
  error?: any;
}

const InputSearch: React.FC<OwnProps> = (props: OwnProps) => {
  const {
    error,
    value,
    iconConfig,
    Icon,
    onChangeText,
    iconLeft,
    ...rest
  } = props;

  return (
    <Container>
      <InputWapper>
        {Icon && iconLeft ? <Icon {...iconConfig} /> : null}

        <InputCustom
          value={value}
          autoCorrect={false}
          onChangeText={onChangeText}
          {...rest}
        />

        {Icon && !iconLeft ? <Icon {...iconConfig} /> : null}
      </InputWapper>
    </Container>
  );
};

export default InputSearch;
