import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import { NativeBaseProvider } from 'native-base';
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
