import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InputSearch from '../../components/DefaultFormFields/InputSearch';
import api from '../../services/api';
import { CartIcon, MenuIcon, PlusIcon, SearchIcon } from '../../styles/icons';
import {
  AddToCartButton,
  ButtonAdd,
  ButtonMenu,
  Card,
  CardFooter,
  CardImage,
  CardInfo,
  CardPrice,
  CardTitle,
  Container,
  Header,
  Title
} from './styles';

const Home: React.FC = ({ navigation }: any) => {
  const [itens, setItens] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const findAllProducts = async () => {
      try {
        const response = await api.get('/products');

        setItens(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    findAllProducts();
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ButtonMenu onPress={() => navigation.toggleDrawer()}>
            <MenuIcon />
          </ButtonMenu>
          <Title>Lista de Produtos</Title>
          <ButtonAdd onPress={() => navigation.navigate('registerProduct')}>
            <PlusIcon />
          </ButtonAdd>
        </Header>

        <View style={{ marginBottom: 40 }}>
          <InputSearch
            onChangeText={setSearch}
            value={search}
            placeholder="Buscar"
            Icon={SearchIcon}
            iconConfig={{ color: '#050505' }}
            iconLeft
          />
        </View>

        {itens.map((item, index) => (
          <Card
            key={item.id}
            style={{ marginBottom: index >= itens.length ? 180 : 20 }}
          >
            <CardImage source={{ uri: item.imageURI }} resizeMode="contain" />
            <CardFooter>
              <CardInfo>
                <CardTitle>{item.name}</CardTitle>
                <CardPrice>{item.price} R$</CardPrice>
              </CardInfo>
              <AddToCartButton>
                <CartIcon />
              </AddToCartButton>
            </CardFooter>
          </Card>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Home;
