import API from 'services/wallet-API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiTransaction } from 'services/transaction-api';

export const fetchTotalBalance = createAsyncThunk(
  'finance/fetchBalance',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken !== null) {
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
  async (data, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const persistedToken = state.auth.token;

      if (persistedToken) {
        const result = await ApiTransaction(persistedToken, data);
        return result;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
