import { createSlice } from '@reduxjs/toolkit';
import { fetchTotalBalance, fetchData } from './finance-operations';

const initialState = {
  // isFetchingTotalBalance: false,
  // isFetchingData: false,
  error: null,
  totalBalance: 0,
  // data: {},
  data: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [fetchTotalBalance.pending](state, _) {
      // state.isFetchingTotalBalance = true;
      //спиннер
      state.error = null;
    },
    [fetchTotalBalance.fulfilled](state, { payload }) {
      state.totalBalance = payload;
      // state.isFetchingTotalBalance = false;
      //спиннер
    },
    [fetchTotalBalance.rejected](state, _) {
      // state.isFetchingTotalBalance = false;
      //спиннер
    },
    [fetchData.pending](state) {
      // state.isFetchingData = true;
      //спиннер
      state.error = null;
    },
    [fetchData.fulfilled](state, { payload }) {
      state.data = payload;
      // state.isFetchingData = false;
      //спиннер
    },
    [fetchData.rejected](state, { payload }) {
      // state.isFetchingData = false;
      //спиннер
      state.error = payload;
    },
  },
});

export default financeSlice.reducer;
