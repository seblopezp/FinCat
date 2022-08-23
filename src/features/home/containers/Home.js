import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Stack} from 'native-base';

const Home = ({route}) => {
  const {
    data: {nombre, email},
  } = route.params;
  
  /**
     * TODO: se debe implementar diseño final de pantalla
     * 
     */
  return (
    <Stack space={4} w="100%" alignItems="center">

    <Text>
      hola {nombre} {email}
    </Text>
    </Stack>
  );
};

Home.propTypes = {
  route: PropTypes.any.isRequired,
};
export default Home;
