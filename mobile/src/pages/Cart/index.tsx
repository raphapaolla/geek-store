import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import CartItem from '../../components/CartItem';
import api from '../../services/api';
import { ContainerList } from './styles';

const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const findAllProductsInCart = async () => {
      try {
        const response = await api.get('/cart');

        let totalPriceCart = 0;

        response.data.forEach((item: any) => {
          totalPriceCart += item.price * item.amount;
        });

        setTotalPrice(totalPriceCart);
        setCartProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    findAllProductsInCart();
  }, []);

  const reloadList = async () => {
    try {
      const response = await api.get('/cart');

      let totalPriceCart = 0;

      response.data.forEach((item: any) => {
        totalPriceCart += item.price * item.amount;
      });

      setTotalPrice(totalPriceCart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ContainerList>
        <FlatList
          data={cartProducts}
          renderItem={({ item }) => (
            <CartItem itemProps={item} reloadList={reloadList} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => String(item.id)}
        />
      </ContainerList>
      <View style={styles.footer}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceLabel}>Total</Text>
          <Text style={styles.totalPriceValue}>R$ {totalPrice.toFixed(2)}</Text>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.buttonBuy}>
          <Text style={styles.buttonBuyText}>Finalizar compra</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    // marginTop: 20,
    backgroundColor: '#e2e2e2',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20
    // borderWidth: 1,
    // borderColor: '#ddd'
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  totalPriceLabel: {
    fontSize: 24,
    fontFamily: 'Roboto_500Medium'
  },
  totalPriceValue: {
    fontSize: 26,
    fontFamily: 'Ubuntu_700Bold'
  },
  buttonBuy: {
    backgroundColor: '#34cb79',
    padding: 16,
    marginBottom: 30,
    borderRadius: 4,
    marginTop: 4
  },
  buttonBuyText: {
    fontFamily: 'Ubuntu_500Medium',
    color: '#fff',
    textAlign: 'center',
    fontSize: 24
  }
});

export default Cart;
