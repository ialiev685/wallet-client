import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/auth-api';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; //Стоит пока как заглушка

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authApi.register(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
