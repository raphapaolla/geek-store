import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import CustomDrawerContent from './components/CustomDrawerContent';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import RegisterProduct from './pages/RegisterProduct';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="login"
        screenOptions={{
          unmountOnBlur: true
        }}
      >
        <Drawer.Screen
          name="login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Drawer.Screen
          name="home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name="registerProduct"
          component={RegisterProduct}
          options={{ title: 'Registrar Produto' }}
        />

        <Drawer.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ title: 'Detalhes do Produto' }}
        />

        <Drawer.Screen
          name="cart"
          component={Cart}
          options={{ title: 'Cart' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
