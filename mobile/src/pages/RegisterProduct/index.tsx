import React, { useState } from 'react';
import { View } from 'react-native';
import InputTextLabelCustom from '../../components/DefaultFormFields/InputTextLabelCustom';
import api from '../../services/api';
import {
  ButtonsContainer,
  ButtonText,
  CancelButton,
  ConfirmeButton,
  Container,
  Header,
  Title
} from './styles';

const RegisterProduct: React.FC = ({ navigation }: any) => {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageURI, setImageURI] = useState(null);

  const handlerOnSave = async () => {
    const data = {
      name,
      price,
      imageURI
    };

    try {
      api.post('/products', data);

      navigation.navigate('home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro de Produto</Title>
      </Header>

      <View>
        <InputTextLabelCustom
          label="Nome"
          value={name}
          onChangeText={setName}
          placeholder="Ex.: Caneca Medieval"
        />
        <InputTextLabelCustom
          label="Preço"
          value={price}
          onChangeText={setPrice}
          placeholder="Ex.: R$ 59,90"
        />
        <InputTextLabelCustom
          label="URL da Imagem"
          value={imageURI}
          onChangeText={setImageURI}
          placeholder="Ex.: https://static3.tcdn.com.br/img/img_prod/460977/caneca_medieval_brazao_lobo_400ml_62951_1_015fbca0fe11871dab4c58ab7811df06.jpeg"
          multiline
        />
      </View>

      <ButtonsContainer>
        <ConfirmeButton onPress={handlerOnSave}>
          <ButtonText>Salvar</ButtonText>
        </ConfirmeButton>
        <CancelButton onPress={() => navigation.navigate('home')}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
      </ButtonsContainer>
    </Container>
  );
};

export default RegisterProduct;
