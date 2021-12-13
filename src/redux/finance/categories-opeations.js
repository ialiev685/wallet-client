import {
  ApiCategoriesTransactions,
  ApiAddCategorieTransactions,
} from 'services/categories-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCatgories = createAsyncThunk(
  'finance/catgories',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    const persistedToken = state.auth.token;

    if (persistedToken) {
      try {
        console.log(111);
        const result = await ApiCategoriesTransactions(persistedToken);
        return result;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const fetchAddCatgories = createAsyncThunk(
  'finance/catgories',
  async (data, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const persistedToken = state.auth.token;

      if (persistedToken) {
        const result = await ApiAddCategorieTransactions(persistedToken, data);

        return result;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

fetchCatgories();
