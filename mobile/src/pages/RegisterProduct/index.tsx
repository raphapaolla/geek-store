import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import InputSelect from '../../components/DefaultFormFields/InputSelect';
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

const RegisterProduct: React.FC = ({ navigation, route }: any) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const [categoryId, setCategoryId] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (route?.params?.id) {
      const findProductsDetails = async () => {
        try {
          const response = await api.get(
            `/products/${route.params.id}?_expand=category`
          );

          const { data } = response;

          const product = {
            ...data,
            price: Number(data.price).toFixed(2)
          };
          setId(product.id);
          setName(product.name);
          setPrice(product.price);
          setDescription(product.description);
          setCategoryId(product.category.id);
          setImage1(product.images[0]);
          setImage2(product.images[1]);
          setImage3(product.images[2]);
        } catch (err) {
          console.log(err);
        }
      };

      findProductsDetails();
    }
  }, []);

  useEffect(() => {
    const findAllCategories = async () => {
      try {
        const response = await api.get('/categories');

        const data = response.data.map((item: any) => ({
          label: item.name,
          value: item.id
        }));

        console.log(data);

        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };

    findAllCategories();
  }, []);

  const handlerOnSave = async () => {
    const data: any = {
      name,
      price,
      description,
      categoryId,
      images: [image1, image2, image3].filter((item) => !!item)
    };

    try {
      if (id) {
        console.log('alterou');

        data.id = id;
        api.put(`/products/${id}`, data);
      } else {
        console.log('salvou');
        api.post('/products', data);
      }

      navigation.navigate('home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <View style={{ paddingVertical: 60 }}>
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

          <InputSelect
            label="Categoria"
            value={categoryId}
            items={categories}
            onChangeValue={setCategoryId}
          />

          <InputTextLabelCustom
            label="descrição"
            value={description}
            onChangeText={setDescription}
            placeholder="Ex.: Esse produtos realiza a função ..."
            multiline
          />
          <InputTextLabelCustom
            label="URL da Imagem"
            value={image1}
            onChangeText={setImage1}
            placeholder="Ex.: https://static3.tcdn.com.br/img/img_prod/460977/caneca_medieval_brazao_lobo_400ml_62951_1_015fbca0fe11871dab4c58ab7811df06.jpeg"
            multiline
          />
          <InputTextLabelCustom
            label="URL da Imagem"
            value={image2}
            onChangeText={setImage2}
            placeholder="Ex.: https://static3.tcdn.com.br/img/img_prod/460977/caneca_medieval_brazao_lobo_400ml_62951_1_015fbca0fe11871dab4c58ab7811df06.jpeg"
            multiline
          />
          <InputTextLabelCustom
            label="URL da Imagem"
            value={image3}
            onChangeText={setImage3}
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
      </View>
    </Container>
  );
};

export default RegisterProduct;
