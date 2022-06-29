import React, {useState} from 'react';
import {Text, Input, Stack} from 'native-base';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {login} from '../services/loginService';
export const LoginForm = () => {
    
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUserChange = text => setUsername(text);
  const handlePasswordChange = text => setPassword(text);
  console.log(username);

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
        h="10"
        InputLeftElement={<Icon name="at" size={20} ml="2" />}
        placeholder="Email ID"
        value={username}
        onChangeText={handleUserChange}
        autoCapitalize="none"
      />
      <Input
        value={password}
        onChangeText={handlePasswordChange}
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
      <Button
        w="100%"
        size="md"
        bold
        mt="4"
        onPress={() => login(username, password)}>
        <Text>Login</Text>
      </Button>
    </Stack>
  );
};
