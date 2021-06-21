import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons
} from '@expo/vector-icons';
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

export const MinusIcon = (props: OwnProps) => (
  <AntDesign name="minus" {...iconDefaultConfig} {...props} />
);

export const MenuIcon = (props: OwnProps) => (
  <Feather name="menu" {...iconDefaultConfig} {...props} />
);

export const ShoppingCart = (props: OwnProps) => (
  <AntDesign name="shoppingcart" {...iconDefaultConfig} {...props} />
);

export const ShoppingCartPlus = (props: OwnProps) => (
  <MaterialCommunityIcons name="cart-plus" {...iconDefaultConfig} {...props} />
);

export const ArrowLeftIcon = (props: OwnProps) => (
  <AntDesign name="arrowleft" {...iconDefaultConfig} {...props} />
);

export const TrashIcon = (props: OwnProps) => (
  <Feather name="trash-2" {...iconDefaultConfig} {...props} />
);

export const PencilIcon = (props: OwnProps) => (
  <FontAwesome name="pencil" {...iconDefaultConfig} {...props} />
);
