import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

export default function App(){
  return(
  <NavigationContainer>
    <StatusBar backgroundColor="0000000" borderStyle="light-content" />
    <Routes/>
  </NavigationContainer>
  );
}
