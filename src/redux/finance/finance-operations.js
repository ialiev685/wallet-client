import API from 'services/wallet-API';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
