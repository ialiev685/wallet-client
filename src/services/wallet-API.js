import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-rf1.herokuapp.com/api/';

async function fetchTotalBalance() {
  const info = await axios.get('/users/current');
  const balance = info.data.data.balance;
  return balance;
}

async function fetchData(page) {
  const data = await axios.get(`/transactions?page=${page}`);

  const transactions = data.data.userTransactions;
  return transactions;
}

async function fetchDataByCategory() {
  const { data } = await axios.get('/transactions/statistic');
  const transactionsByCategory = data.data.statistic;
  return transactionsByCategory;
}

async function fetchDataByQuery({ month, year }) {
  const { data } = await axios.get(
    `/transactions/statistic?month=${month}&year=${year}`,
  );
  const transactionsByQuery = data.data.statistic;
  return transactionsByQuery;
}

const API = {
  fetchTotalBalance,
  fetchData,
  fetchDataByCategory,
  fetchDataByQuery,
};
export default API;
