import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-rf1.herokuapp.com/api';



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

  const result = await axios.post('/transactions', data);

  return result;
};

export const ApiTransactionCategory = async validToken => {
  token.set(validToken);

  const result = await axios.get('/transactions/categories');

  return result;
};
