import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts
} from '@expo-google-fonts/roboto';
import {
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import Routes from './src/routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={28} color="#000" />;
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
};

export default App;
