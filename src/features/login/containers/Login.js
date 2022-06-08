import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Center, Container, Heading} from 'native-base';

const Login = () => {
  return (
    <Center bg="primary.500" p="4" style={styles.flex1}>
      <Container>
        <Heading>
          <Text>Hola</Text>
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
      </Container>
    </Center>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});

export default Login;
