import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-rf1.herokuapp.com/api';

// axios.defaults.baseURL = 'http://localhost:8081/api/transactions';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const ApiCategoriesTransactions = async validToken => {
  token.set(validToken);

  const result = await axios.get('/transactions/categories');
  // result.data.data.categories

  return result.data.data.categories;
};

export const ApiAddCategorieTransactions = async (validToken, data) => {
  token.set(validToken);

  const result = await axios.post('/transactions/categories', data);

  return result;
};
