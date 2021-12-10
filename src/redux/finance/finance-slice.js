import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactionOperation,
  fetchTransactionCategory,
} from './finance-operations';

import { fetchTotalBalance, fetchData } from './finance-operations';

const initialState = {
  // isFetchingTotalBalance: false,
  // isFetchingData: false,
  error: null,
  totalBalance: 0,
  // data: {},
  data: null,
  isLoading: false,
  dataNewTransaction: null,
  listCategories: [],
  isErrorTransation: false,
  errorMessage: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [fetchTotalBalance.pending](state, _) {
      // state.isFetchingTotalBalance = true;
      state.isLoading = true;
      state.error = null;
    },
    [fetchTotalBalance.fulfilled](state, { payload }) {
      state.totalBalance = payload;
      // state.isFetchingTotalBalance = false;
      state.isLoading = false;
    },
    [fetchTotalBalance.rejected](state, _) {
      // state.isFetchingTotalBalance = false;
      // state.isFetchingTotalBalance = false;
      state.isLoading = false;
      //спиннер
    },
    [fetchData.pending](state) {
      // state.isFetchingData = true;
      //спиннер
      state.isLoading = true;
      state.error = null;
    },
    [fetchData.fulfilled](state, { payload }) {
      state.data = payload;
      state.isLoading = false;
      // state.isFetchingData = false;
      //спиннер
    },
    [fetchData.rejected](state, { payload }) {
      // state.isFetchingData = false;
      state.isLoading = false;
      //спиннер

      state.error = payload;
    },

    [fetchTransactionOperation.pending](state) {
      state.isErrorTransation = false;
      state.errorMessage = null;
      state.isLoading = true;
    },

    [fetchTransactionOperation.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.dataNewTransaction = payload;
    },

    [fetchTransactionOperation.rejected](state, { payload }) {
      state.isLoading = false;
      state.errorMessage = payload;
      state.isErrorTransation = true;
    },

    [fetchTransactionCategory.pending](state) {
      state.isErrorTransation = false;
      state.errorMessage = null;
      state.isLoading = true;
    },

    [fetchTransactionCategory.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.listCategories = payload;
    },

    [fetchTransactionCategory.rejected](state, { payload }) {
      state.isLoading = false;
      state.errorMessage = payload;
      state.isErrorTransation = true;
    },
  },
});
//fetchTransactionCategory
export default financeSlice.reducer;
