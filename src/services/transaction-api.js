import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-rf1.herokuapp.com/api/transactions';

// axios.defaults.baseURL = 'http://localhost:8081/api/transactions';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const ApiTransaction = async (validToken, data) => {
  token.set(validToken);

  const result = await axios.post('/', data);

  return result;
};
