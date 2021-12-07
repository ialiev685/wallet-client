import { createSlice } from '@reduxjs/toolkit';
import * as loaderAction from './loader-action';

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  extraReducers: {
    [loaderAction.showLoader](state) {
      state.isLoading = true;
    },

    [loaderAction.hideLoader](state) {
      state.isLoading = false;
    },
  },
});

export default loaderSlice.reducer;
