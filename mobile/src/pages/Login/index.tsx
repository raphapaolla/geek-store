import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import InputTextCustom from '../../components/DefaultFormFields/InputTextCustom';
import { Padlock, UserIcon } from '../../styles/icons';
import {
  Circle,
  Container,
  ContinueButton,
  ContinueButtonIconContainer,
  ContinueButtonText,
  Form,
  Title,
  TitleContainer
} from './styles';

const imageURI =
  'https://images.unsplash.com/photo-1523843268911-45a882919fec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80';

const Login: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<any>();

  const handlerLogin = () => {
    navigation.navigate('home');
  };

  return (
    <Container source={{ uri: imageURI }} blurRadius={0.4}>
      <TitleContainer>
        <Title>Bem Vindo!!!</Title>
      </TitleContainer>

      <Form>
        <InputTextCustom
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          styles={styles.formFields}
          Icon={UserIcon}
        />

        <InputTextCustom
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          ref={passwordRef}
          returnKeyType="send"
          styles={styles.formFields}
          Icon={Padlock}
        />
      </Form>

      <ContinueButton onPress={handlerLogin}>
        <ContinueButtonIconContainer>
          <Circle tam={72}>
            <Circle tam={56}>
              <Circle tam={40}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={32}
                  color="black"
                />
              </Circle>
            </Circle>
          </Circle>
        </ContinueButtonIconContainer>
        <ContinueButtonText>Acessar</ContinueButtonText>
      </ContinueButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  formFields: {
    backgroundColor: 'rgba(255,255,255,0.7)'
  }
});

export default Login;
