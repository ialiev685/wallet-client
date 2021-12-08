import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'https://wallet-rf1.herokuapp.com/api/';

export const token = {
  // set(tmpToken) {
  //   axios.defaults.headers.common.Authorization = `Bearer ${tmpToken}`;
  // },
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = async credentials => {
  const { data } = await axios.post('users/signup', credentials);
  token.set(data.token);
  return data;
};

export const logIn = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
};
