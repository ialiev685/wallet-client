import { createSlice } from '@reduxjs/toolkit';
import { fetchTotalBalance, fetchData } from './finance-operations';

const initialState = {
  totalBalance: '',
  isFetchingTotalBalance: false,
  isLoading: false,
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
  },
});

export default financeSlice.reducer;
