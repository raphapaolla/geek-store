import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';
import { ArrowLeftIcon, ShoppingCartPlus } from '../../styles/icons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

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

const ProductDetails: React.FC = ({ navigation, route }: any) => {
  const [activeBarIndex, setActiveBarIndex] = useState(0);
  const [productDetails, setProductDetails] = useState<IProduct | null>(null);

  const ImageItem = ({ imageURI }: any) => {
    return <Image source={{ uri: imageURI }} style={styles.image} />;
  };

  const BarItem = ({ active, index, imagesLength }: any) => {
    const width = (deviceWidth - 16 * imagesLength) / imagesLength;

    return (
      <View
        style={[
          styles.bar,
          { width: width },
          index === activeBarIndex && styles.barActive
        ]}
      />
    );
  };

  const handlerModifyBarActive = (offsetX: number) => {
    const position = Math.ceil(offsetX / deviceWidth);
    setActiveBarIndex(position);
  };

  useEffect(() => {
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

        setProductDetails(product);
      } catch (err) {
        console.log(err);
      }
    };

    findProductsDetails();
  }, [route.params.id]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.goBackWrapper}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.navigate('home')}
          >
            <ArrowLeftIcon />
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          pagingEnabled
          data={productDetails?.images}
          renderItem={({ item, index }) => <ImageItem imageURI={item} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item)}
          onScroll={({ nativeEvent }) => {
            handlerModifyBarActive(nativeEvent.contentOffset.x);
          }}
        />
        {productDetails && productDetails?.images.length > 1 && (
          <FlatList
            style={styles.barContainer}
            horizontal
            data={productDetails?.images}
            renderItem={({ item, index }) => (
              <BarItem
                active={true}
                index={index}
                imagesLength={productDetails?.images.length}
              />
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: any) => String(item)}
          />
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.category}>{productDetails?.category.name}</Text>
          <TouchableOpacity>
            <View style={styles.buttonCart}>
              <ShoppingCartPlus />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{productDetails?.name}</Text>

        <Text style={styles.description}>{productDetails?.description}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.priceWrapper}>
          <Text style={styles.priceSymblo}>R$</Text>
          <Text style={styles.priceValue}>{productDetails?.price}</Text>
        </View>
        <View style={styles.buttonBuy}>
          <Text style={styles.buttonBuyText}>Comprar agora</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingVertical: 16,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 20,
    flexDirection: 'row'
  },
  bar: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
    marginHorizontal: 8
  },
  barActive: {
    backgroundColor: '#5294d6'
  },
  imageContainer: {
    height: deviceHeight / 2,
    position: 'relative',
    backgroundColor: '#eee'
  },
  image: {
    height: deviceHeight / 2,
    width: deviceWidth
  },
  buttonActions: {
    flexDirection: 'row'
  },
  alterButton: {
    height: 32,
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginRight: 16
  },
  deleteButton: {
    height: 32,
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 4,
    marginLeft: 16
  },
  category: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    color: '#8b8b8b'
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 32,
    marginTop: 24
  },
  description: {
    marginTop: 24,
    fontSize: 18,
    fontFamily: 'Roboto_400Regular'
  },

  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  priceValue: {
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold'
  },
  priceSymblo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 4,
    fontFamily: 'Ubuntu_500Medium_Italic'
  },
  buttonBuy: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ccc',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBuyText: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderColor: '#ccc',
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  buttonCart: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ccc',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  goBackWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    left: 10,
    top: 60,
    zIndex: 1
  },
  goBackButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.5)'
  }
});

export default ProductDetails;
