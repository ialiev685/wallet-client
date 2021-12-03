import { createSlice } from '@reduxjs/toolkit';
import { fetchTotalBalance } from './finance-operations';

const initialState = {
  totalBalance: '',
  isFetchingTotalBalance: false,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [fetchTotalBalance.pending](state) {
      state.isFetchingTotalBalance = true;
    },
    [fetchTotalBalance.fulfilled](state, { payload }) {
      state.totalBalance = payload;
      state.isFetchingTotalBalance = false;
    },
    [fetchTotalBalance.rejected](state, _) {
      state.isFetchingTotalBalance = false;
    },
  },
});

export default financeSlice.reducer;
