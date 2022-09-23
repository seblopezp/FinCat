import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import { NativeBaseProvider } from 'native-base';
import { extendTheme } from 'native-base';

export default function App() {

  const theme = extendTheme({
    colors: {
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E'
      },
      amber: {
        400: '#d97706'
      },
      black:{
        100:'#000'
      },
      red:{
        100:'#F32013'
      }
    },
    config: {
      initialColorMode: 'dark'
    }
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer  >
        <StackNavigator  />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
