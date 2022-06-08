import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Center, Container, Heading, Stack, Text, VStack, Input, Flex, FormControl,WarningOutlineIcon } from 'native-base';
import Styles from '../containers/Styles';

const Login = () => {
  return (
    <Flex bg="purple.300" flex={1} px="2" >
        <Center bg="purple.700" mx="43" my="150" flex={2} rounded="xl" >
            <VStack space={6} >
                <Text  space="16" fontSize={45} bold>FinCat</Text>
                <FormControl w="240" maxW="300px">
                    <FormControl.Label><Text color="white" fontWeight="bold">Usuario</Text></FormControl.Label>
                    <Input placeholder="Enter User" borderColor="white" bgColor="white"/>
                    <FormControl.Label><Text color="white" fontWeight="bold">Password</Text></FormControl.Label>
                    <Input placeholder="Enter password" borderColor="white" bgColor="white"/>
            </FormControl>
            </VStack>
        </Center>
    </Flex>
  );
};

export default Login;
