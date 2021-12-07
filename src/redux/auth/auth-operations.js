import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/auth-api';

export const registerUser = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authApi.register(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const finance = await authApi.logIn(credentials);
      return finance;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => await authApi.logout(),
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    const user = await authApi.fetchCurrent(persistedToken);
    return user;
  },
);
