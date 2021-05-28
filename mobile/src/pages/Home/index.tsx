import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import InputSearch from '../../components/DefaultFormFields/InputSearch';
import api from '../../services/api';
import {
  CartIcon,
  MenuIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  ShoppingCart,
  TrashIcon
} from '../../styles/icons';
import {
  ButtonAdd,
  ButtonMenu,
  CardPrimary,
  CardPrimaryCart,
  CardPrimaryFooter,
  CardPrimaryImage,
  CardPrimaryInfo,
  CardPrimaryPrice,
  CardPrimaryTitle,
  CardSecundary,
  CardSecundaryCart,
  CardSecundaryFooter,
  CardSecundaryImage,
  CardSecundaryInfo,
  CardSecundaryPrice,
  CardSecundaryTitle,
  Container,
  Title
} from './styles';

interface IProduct {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
  };
  description: string;
}

const Home: React.FC = ({ navigation }: any) => {
  const [itens, setItens] = useState<IProduct[]>([]);
  const [search, setSearch] = useState('');

  const [itensFilter, setItensFilter] = useState<IProduct[]>([]);

  useEffect(() => {
    const findAllProducts = async () => {
      try {
        const response = await api.get('/products?_expand=category');

        setItens(response.data);
        setItensFilter(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    findAllProducts();
  }, []);

  useEffect(() => {
    setItensFilter(itens);
  }, [itens]);

  const filterItens = (value: string) => {
    setSearch(value);

    const filter = itens.filter((item) =>
      String(item.name).toLowerCase().includes(value.toLowerCase())
    );
    setItensFilter(filter);
  };

  const handlerRemove = (id: number) => {
    try {
      api.delete(`/products/${id}`);

      setItens(itens.filter((item) => item.id != id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <View>
        <View style={styles.headerButton}>
          <ButtonMenu onPress={() => navigation.toggleDrawer()}>
            <MenuIcon />
          </ButtonMenu>
          <Title>Lista de Produtos</Title>
          <ButtonAdd onPress={() => navigation.navigate('registerProduct')}>
            <PlusIcon />
          </ButtonAdd>
        </View>
        <View style={styles.headerButton}>
          <InputSearch
            onChangeText={filterItens}
            value={search}
            placeholder="Buscar"
            Icon={SearchIcon}
            iconConfig={{ color: '#050505' }}
            iconLeft
          />

          <ButtonAdd style={{ marginLeft: 16 }}>
            <ShoppingCart />
          </ButtonAdd>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Destaques</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView showsVerticalScrollIndicator={false} horizontal>
            {itensFilter
              .filter((item) => item.category.id == 1)
              .map((item, index) => (
                <CardPrimary
                  key={item.id}
                  style={{ marginBottom: index >= itens.length ? 180 : 20 }}
                  onPress={() =>
                    navigation.navigate('ProductDetails', {
                      id: item.id
                    })
                  }
                >
                  <CardPrimaryImage
                    source={{ uri: item.images[0] }}
                    resizeMode="contain"
                  />
                  <CardPrimaryFooter>
                    <CardPrimaryInfo>
                      <CardPrimaryTitle>{item.name}</CardPrimaryTitle>
                      <CardPrimaryPrice>{item.price} R$</CardPrimaryPrice>
                    </CardPrimaryInfo>
                    <CardPrimaryCart>
                      <CartIcon />
                    </CardPrimaryCart>
                  </CardPrimaryFooter>
                </CardPrimary>
              ))}
          </ScrollView>
        </View>
        <Text style={styles.sectionTitle}>Recomendados</Text>
        <View>
          {itensFilter
            .filter((item) => item.category.id == 2)
            .map((item, index) => (
              <Swipeable
                key={item.id}
                overshootRight={false}
                renderRightActions={() => (
                  <Animated.View>
                    <View style={styles.buttonActions}>
                      <View>
                        <RectButton
                          style={styles.editButton}
                          onPress={() =>
                            navigation.navigate('registerProduct', {
                              id: item.id
                            })
                          }
                        >
                          <PencilIcon />
                        </RectButton>
                      </View>
                      <View>
                        <RectButton
                          style={styles.buttonRemove}
                          onPress={() => handlerRemove(item.id)}
                        >
                          <TrashIcon color="white" />
                        </RectButton>
                      </View>
                    </View>
                  </Animated.View>
                )}
              >
                <CardSecundary
                  style={{ marginBottom: index >= itens.length ? 180 : 20 }}
                  onPress={() =>
                    navigation.navigate('ProductDetails', {
                      id: item.id
                    })
                  }
                >
                  <CardSecundaryImage
                    source={{ uri: item.images[0] }}
                    resizeMode="contain"
                  />
                  <CardSecundaryFooter>
                    <CardSecundaryInfo>
                      <CardSecundaryTitle numberOfLines={1}>
                        {item.name}
                      </CardSecundaryTitle>
                      <CardSecundaryPrice>{item.price} R$</CardSecundaryPrice>
                    </CardSecundaryInfo>
                    <CardSecundaryCart
                      onPress={() => console.log('teste carrinho')}
                    >
                      <CartIcon />
                    </CardSecundaryCart>
                  </CardSecundaryFooter>
                </CardSecundary>
              </Swipeable>
            ))}
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  buttonRemove: {
    width: 80,
    height: 100,
    backgroundColor: '#E83F5B',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4
  },
  editButton: {
    width: 80,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4
  },
  buttonActions: {
    flexDirection: 'row'
  }
});

export default Home;
