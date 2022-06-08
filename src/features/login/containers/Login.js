import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Center, Container, Heading, Stack, Text, VStack, Input, Flex } from 'native-base';
import Styles from '../containers/Styles';

const Login = () => {
  return (
    <Center bg="purple.500" flex={1} p="1">
      <Container bg="purple.400" borderRadius="md" w="100%" >
        <Heading />
        <Flex  h="50%" alignItems="center" >
          <Box >
            <Center size={90} bg="primary.500">
              <Text bold fontSize="3xl" fontStyle="italic">FinCat</Text>
            </Center>
            <Stack >
              <Input size="lg" variant="rounded" placeholder="lg Input" />
              <Input size="lg" variant="rounded" placeholder="lg Input" />
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Center>
  );
};

export default Login;
