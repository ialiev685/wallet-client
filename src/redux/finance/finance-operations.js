import API from 'services/wallet-API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ApiTransaction,
  ApiTransactionCategory,
} from 'services/transaction-api';

import { closeModal } from 'redux/modal/modal-action';
const { Unauthorized } = require('http-errors');

// import {token} from '../../services/auth-api'

// const tmpToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE4MGU4YTU4YjVhNDg5ZTEzM2Y3MDMiLCJuYW1lIjoiYW5uYSIsImlhdCI6MTYzODU0MDc1NH0.qzIj6Y2tbwS8p4xZYp65Hkhtdu6VUrj8Ptge_OTB2rM';
// без операций
// const tmpToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFmNTQwOGNiMTg5YzM0OWI2YzUwZTIiLCJuYW1lIjoiSnVsaWEiLCJpYXQiOjE2Mzg4ODAzMjJ9.SvSYgAR-Vj2nwJ5Q_XYpJsYkHZ8nfNuc0DY0oyZWNqQ';
// const tmpToken = '';

// export const token = {
//   // set(tmpToken) {
//   //   axios.defaults.headers.common.Authorization = `Bearer ${tmpToken}`;
//   // },
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const fetchTotalBalance = createAsyncThunk(
  'finance/fetchBalance',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    // console.log(state);
    const persistedToken = state.auth.token;
    // const persistedToken = tmpToken;

    // token.set(persistedToken)
    // token.set(tmpToken)

    if (persistedToken !== null) {
      // if (tmpToken !== null) {
      try {
        const balance = await API.fetchTotalBalance();
        return balance;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const fetchTransactionOperation = createAsyncThunk(
  'finance/transaction',
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      // const persistedToken =
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFmYzU4ZmNlYjc2N2VlNjc5Njk2NTkiLCJuYW1lIjoiaWxmYXQiLCJpYXQiOjE2Mzg5MTEzODl9.qxTjUtYiD_5v_gFUybM4BrbqPT58DUYbXEgW9tycSkk';

      if (persistedToken) {
        const result = await ApiTransaction(persistedToken, data);

        if (result.data.data.transaction) thunkAPI.dispatch(closeModal());
        return result.data.data.transaction;
      } else {
        throw new Unauthorized('Не авторизирован');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchTransactionCategory = createAsyncThunk(
  'finance/transactionCategory',
  async (_, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const persistedToken = state.auth.token;

      const persistedToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFmYzU4ZmNlYjc2N2VlNjc5Njk2NTkiLCJuYW1lIjoiaWxmYXQiLCJpYXQiOjE2Mzg5MTEzODl9.qxTjUtYiD_5v_gFUybM4BrbqPT58DUYbXEgW9tycSkk';

      if (persistedToken) {
        const result = await ApiTransactionCategory(persistedToken);

        return result.data.data.categories;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchData = createAsyncThunk(
  'finance/fetchData',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    // const persistedToken = tmpToken;

    if (persistedToken !== null) {
      try {
        const data = await API.fetchData();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  },
);
