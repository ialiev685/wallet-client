import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8081/api/'; //Стоит пока как заглушка
axios.defaults.baseURL = 'https://wallet-rf1.herokuapp.com/api/';
//токен с транзакциями
const tmpToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE4MGU4YTU4YjVhNDg5ZTEzM2Y3MDMiLCJuYW1lIjoiYW5uYSIsImlhdCI6MTYzODU0MDc1NH0.qzIj6Y2tbwS8p4xZYp65Hkhtdu6VUrj8Ptge_OTB2rM';
//токен без транзакций
// const tmpToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFmNTQwOGNiMTg5YzM0OWI2YzUwZTIiLCJuYW1lIjoiSnVsaWEiLCJpYXQiOjE2Mzg4ODAzMjJ9.SvSYgAR-Vj2nwJ5Q_XYpJsYkHZ8nfNuc0DY0oyZWNqQ';
// const tmpToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwNGNkM2FiZjg5ZmE1NTJiOWIxYjMiLCJuYW1lIjoiSnVsaWEiLCJpYXQiOjE2Mzg5NDQwMzJ9.fv9_FDtnHeQAyEUw_Nc-Zrg6RruUx_rExMRYUeQBDGw';
axios.defaults.headers.common.Authorization = `Bearer ${tmpToken}`;

async function fetchTotalBalance() {
  const info = await axios.get('/users/current');
  const balance = info.data.data.balance;
  return balance;
}
async function fetchData() {
  const data = await axios.get('/transactions');
  const transactions = data.data.userTransactions.transactions;
  return transactions;
}

const API = {
  fetchTotalBalance,
  fetchData,
};
export default API;
