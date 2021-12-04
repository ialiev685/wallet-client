import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; //Стоит пока как заглушка

async function fetchTotalBalance() {
  const data = await axios.get('/finance'); // путь потом изменить
  return data;
}

const API = {
  fetchTotalBalance,
};
export default API;
