import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';

interface OwnProps {
  name?: any;
  size?: number;
  color?: string;
  style?: any;
}
const iconDefaultConfig = {
  size: 24,
  color: '#000'
};

export const UserIcon = (props: OwnProps) => (
  <Feather name="user" {...iconDefaultConfig} {...props} />
);

export const Padlock = (props: OwnProps) => (
  <Feather name="lock" {...iconDefaultConfig} {...props} />
);

export const CartIcon = (props: OwnProps) => (
  <AntDesign name="shoppingcart" {...iconDefaultConfig} {...props} />
);

export const SearchIcon = (props: OwnProps) => (
  <AntDesign name="search1" {...iconDefaultConfig} {...props} />
);

export const PlusIcon = (props: OwnProps) => (
  <AntDesign name="plus" {...iconDefaultConfig} {...props} />
);

export const MenuIcon = (props: OwnProps) => (
  <Feather name="menu" {...iconDefaultConfig} {...props} />
);
