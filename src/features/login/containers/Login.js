import React from 'react';
import {Center, Text, VStack, Input, Flex, Stack} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
const Login = () => {
  const styles = StyleSheet.create({
    tinyLogo: {
      alignSelf: 'center',
      height: 220,
      width: 220,
    },
  });

  const InputForm = () => {
    const [show, setShow] = React.useState(false);
    return (
      <Stack space={4} w="100%" alignItems="center">
        <Input
          color="black.100"
          mb="1"
          px="2"
          variant={'underlined'}
          w={{
            base: '100%',
            md: '25%',
          }}
          InputLeftElement={<Icon name="at" size={20} ml="2" />}
          placeholder="Email ID"
        />
        <Input
          color="black.100"
          px="2"
          variant={'underlined'}
          w={{
            base: '100%',
            md: '25%',
          }}
          InputLeftElement={<Icon name="lock" size={20} ml="2" />}
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Icon
              name={show ? 'eye' : 'eye-slash'}
              size={20}
              mr="2"
              onPress={() => setShow(!show)}
            />
          }
          placeholder="Password"
        />
      </Stack>
    );
  };

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
          <InputForm />
          <Button size="md" bold mt="4">
            <Text>Login</Text>
          </Button>
        </VStack>
      </Center>
    </Flex>
  );
};

export default Login;
