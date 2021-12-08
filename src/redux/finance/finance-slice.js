import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTotalBalance,
  fetchTransactionOperation,
} from './finance-operations';



const initialState = {
  totalBalance: '',
  isFetchingTotalBalance: false,
  isLoading: false,
  dataNewTransaction: null,
  isErrorTransation: false,
  errorMessage: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [fetchTotalBalance.pending](state) {
      state.isFetchingTotalBalance = true;
      state.isLoading = true;
    },
    [fetchTotalBalance.fulfilled](state, { payload }) {
      state.totalBalance = payload;
      state.isFetchingTotalBalance = false;
      state.isLoading = false;
    },
    [fetchTotalBalance.rejected](state, _) {
      state.isFetchingTotalBalance = false;
      state.isLoading = false;
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
  },
});

export default financeSlice.reducer;
