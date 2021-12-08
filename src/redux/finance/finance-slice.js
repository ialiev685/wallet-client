import { createSlice } from '@reduxjs/toolkit';
import { fetchTotalBalance, fetchData } from './finance-operations';

const initialState = {
  // isFetchingTotalBalance: false,
  // isFetchingData: false,
  error: null,
  totalBalance: 0,
  // data: {},
  data: null,
  isLoading: false,
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
    [fetchTotalBalance.rejected](state, { payload }) {
      // state.isFetchingTotalBalance = false;
      // state.isFetchingTotalBalance = false;
      state.isLoading = false;
      state.error = payload;
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
  },
});

export default financeSlice.reducer;
