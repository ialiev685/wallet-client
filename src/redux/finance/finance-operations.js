import API from 'services/wallet-API';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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
