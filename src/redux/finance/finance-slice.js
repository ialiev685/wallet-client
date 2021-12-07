import { createSlice } from '@reduxjs/toolkit';
import { fetchTotalBalance, fetchData } from './finance-operations';

const initialState = {
  // totalBalance: '',
  isFetchingTotalBalance: false,
  isFetchingData: false,
  error: null,
  // totalBalance: { balance: 0 },
  totalBalance: 0,
  data: {
    transactionType: false,
    sum: 0,
    date: '',
    trDay: 0,
    trMonth: 0,
    trYear: 0,
    comment: '',
    category: '',
    balance: 0,
  },
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [fetchTotalBalance.pending](state, _) {
      state.isFetchingTotalBalance = true;
      state.error = null;
    },
    [fetchTotalBalance.fulfilled](state, { payload }) {
      console.log(payload);
      state.totalBalance = payload;
      // state.totalBalance = payload;
      state.isFetchingTotalBalance = false;
    },
    [fetchTotalBalance.rejected](state, _) {
      state.isFetchingTotalBalance = false;
    },
    [fetchData.pending](state) {
      state.isFetchingData = true;
      state.error = null;
    },
    [fetchData.fulfilled](state, { payload }) {
      state.data = payload;
      state.isFetchingData = false;
    },
    [fetchData.rejected](state, { payload }) {
      state.isFetchingData = false;
      state.error = payload;
    },
  },
});

export default financeSlice.reducer;
