import axios from 'axios';
// http://localhost:8081/api/users/current

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; //Стоит пока как заглушка
axios.defaults.baseURL = 'http://localhost:8081/api/'; //Стоит пока как заглушка
const tmpToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE4MGU4YTU4YjVhNDg5ZTEzM2Y3MDMiLCJuYW1lIjoiYW5uYSIsImlhdCI6MTYzODU0MDc1NH0.qzIj6Y2tbwS8p4xZYp65Hkhtdu6VUrj8Ptge_OTB2rM';
axios.defaults.headers.common.Authorization = `Bearer ${tmpToken}`;

async function fetchTotalBalance() {
  // const data = await axios.get('/finance'); // путь потом изменить
  // const data = await axios.get('users/current');
  const info = await axios.get('users/current');
  // console.log('голые данные запроса', info);
  const balance = info.data.data.balance;
  // console.log(balance);
  // console.log(data);
  // return data;
  return balance;
}
async function fetchData() {
  // const data = await axios.get('/finance'); // путь потом изменить
  const data = await axios.get('/transactions');
  console.log('голые данные с запроса', data);
  const transactions = data.data.userTransactions.transactions;
  console.log('transactions', transactions);
  // return data;
  return transactions;
}

const API = {
  fetchTotalBalance,
  fetchData,
};
export default API;
