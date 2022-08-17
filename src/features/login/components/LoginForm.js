import React, {useState} from 'react';
import {Text, Input, Stack, Button, FormControl} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {login} from '../services/loginService';
import PropTypes from 'prop-types';
export const LoginForm = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState(false);

  const handleUserInput = UserEmail => {
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    if (UserEmail.length === 0) {
      setErrortext('Ingresa tu email');
    } else if (reg.test(UserEmail) === false) {
      setErrortext('Ingresa un email valido');
    } else if (reg.test(UserEmail) === true) {
      setErrortext('');
    }
  };

  const handlePasswordInput = UserPassword => {
    if (UserPassword.length === 0) {
      setErrortext('Ingresa tu contraseña');
    } else {
      setErrortext('');
    }
  };

  const handleSubmitPress = () => {
    /**  
    * TODO: se debe implementar llamada al servicio
    */
    navigation.navigate('Home');
  };

  return (
    <Stack space={4} w="100%" alignItems="center">
      <FormControl maxW="300px">
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
          value={userEmail.value}
          onChangeText={value => {
            setUserEmail(value);
            handleUserInput(value);
          }}
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          spellCheck={false}
          autoCorrect={false}
        />

        <Input
          value={userPassword}
          onChangeText={value => {
            setUserPassword(value);
            handlePasswordInput(value);
          }}
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
        {errortext ? <Text color="red.100">{errortext}</Text> : null}

        <Button
          w="100%"
          size="md"
          bold
          mt="4"
          isDisabled={
            errortext || !userEmail && !userPassword
          }
          onPress={() => handleSubmitPress(userEmail, userPassword)}>
          <Text>Login</Text>
        </Button>
      </FormControl>
    </Stack>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};
