import React from 'react';
import {Center, Text, VStack, Flex} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import { LoginForm } from '../components/LoginForm';

const Login = () => {
  const styles = StyleSheet.create({
    tinyLogo: {
      alignSelf: 'center',
      height: 220,
      width: 220,
    },
  });
  
  return (
    <Flex flex={1}>
      <Center flex={2} rounded="xl">
        <VStack space={1} w="75%" maxW="300px" mx="auto">
          <Image
            style={styles.tinyLogo}
            source={require('../../../assets/munchkin.png')}
          />
          <Text fontSize={40} bold color="black.100">
            Login
          </Text>
          <LoginForm />
        </VStack>
      </Center>
    </Flex>
  );
};

export default Login;
