import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state) {
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
