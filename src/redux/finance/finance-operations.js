import API from 'services/wallet-API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ApiTransaction,
  ApiTransactionCategory,
} from 'services/transaction-api';

import { closeModal } from 'redux/modal/modal-action';
const { Unauthorized } = require('http-errors');

export const fetchTotalBalance = createAsyncThunk(
  'finance/fetchBalance',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    const persistedToken = state.auth.token;

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
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

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
  async (page, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken !== null) {
      try {
        const data = await API.fetchData(page);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const fetchDataByCategory = createAsyncThunk(
  'finance/fetchDataByCategory',
  async (_, { rejectWithValue }) => {
    try {
      const dataByCategory = await API.fetchDataByCategory();
      console.log('без годов', dataByCategory);
      return dataByCategory;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchDataByQuery = createAsyncThunk(
  'finance/fetchDataByQuery',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const dataByQuery = await API.fetchDataByQuery({ month, year });
      console.log('с годами', dataByQuery);
      return dataByQuery;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
