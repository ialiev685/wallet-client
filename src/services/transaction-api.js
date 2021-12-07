import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-rf1.herokuapp.com';

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
  console.log(result);
  return result;
};
