import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';

const menuItens = [
  {
    id: 2,
    label: 'Home',
    route: 'home'
  },
  {
    id: 3,
    label: 'Registrar Produto',
    route: 'registerProduct'
  }
];

const CustomDrawerContent: React.FC<any> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        {menuItens.map(({ label, route, id }) => (
          <DrawerItem
            key={id}
            label={label}
            onPress={() => props.navigation.navigate(route)}
          />
        ))}
      </View>
      <View>
        <DrawerItem
          key={1}
          label="Sair"
          onPress={() => {
            props.navigation.navigate('login');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
