import React, { useState } from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';
import { MinusIcon, PlusIcon } from '../../styles/icons';

interface OwnProps {
  itemProps: ItemCart;
  reloadList: () => void;
}

interface ItemCart {
  id: number;
  image: string;
  name: string;
  price: number;
  amount: number;
}

const CartItem: React.FC<OwnProps> = ({ itemProps, reloadList }) => {
  const [item, setItem] = useState(itemProps);

  const handlerMinusAmount = async () => {
    if (item.amount === 1) {
      return;
    }

    const itemUpdated = { ...item, amount: item.amount - 1 };

    try {
      await api.put(`/cart/${item.id}`, itemUpdated);
      setItem(itemUpdated);
      reloadList();
    } catch (err) {
      Alert.alert('Erro', 'Ocorreu um erro!');
    }
  };

  const handlerPlusAmount = async () => {
    const itemUpdated = { ...item, amount: item.amount + 1 };

    try {
      await api.put(`/cart/${item.id}`, itemUpdated);
      setItem(itemUpdated);
      reloadList();
    } catch (err) {
      Alert.alert('Erro', 'Ocorreu um erro!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentImageTitle}>
        <Image
          style={styles.image}
          source={{
            uri: item.image
          }}
        />
        <Text numberOfLines={1} style={styles.itemName}>
          {item.name}
        </Text>
      </View>

      <View style={styles.contentTotalPrice}>
        <Text style={styles.totalValue}>
          R$ {(item.price * item.amount).toFixed(2)}
        </Text>

        <View style={styles.amountBox}>
          <TouchableOpacity
            style={styles.amountButtons}
            onPress={handlerMinusAmount}
          >
            <MinusIcon size={amountTextSize} />
          </TouchableOpacity>
          <Text style={styles.amountText}>{item.amount}</Text>
          <TouchableOpacity
            style={styles.amountButtons}
            onPress={handlerPlusAmount}
          >
            <PlusIcon size={amountTextSize} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const amountTextSize = 18;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 4,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  contentImageTitle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: deviceWidth / 3
  },

  contentTotalPrice: {
    alignItems: 'flex-end'
  },

  amountBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    marginTop: 8,
    width: 140
  },
  amountButtons: {
    padding: 10
  },

  amountButtonLeft: {
    borderRightWidth: 1,
    borderColor: '#000'
  },

  itemName: {
    fontSize: 24,
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'center',
    marginLeft: 4
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10
  },
  amountText: {
    fontSize: amountTextSize,
    fontFamily: 'Roboto_500Medium',
    paddingHorizontal: 12,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#838282'
  },
  totalValue: {
    fontSize: 24,
    fontFamily: 'Roboto_500Medium',
    marginHorizontal: 12
  }
});

export default CartItem;
