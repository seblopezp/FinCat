import axios from 'axios';
import endpoints from '../../../constants/endpoints';

const loginUrl = 'users/login';

const login = async (user, password) => {
  const options = {
    method: 'POST',
    url: `${endpoints.URL_API}${loginUrl}`,
    data: {
      email: user,
      password: password,
    },
  };
  const data = await axios
    .request(options)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return data;
};

export default login;
