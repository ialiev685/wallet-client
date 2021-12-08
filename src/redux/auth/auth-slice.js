import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.registerUser.pending](state) {
      state.isLoading = true;
    },
    [authOperations.registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuth = true;
      state.isLoading = false;
    },
    [authOperations.registerUser.rejected](state) {
      state.isLoading = false;
    },

    [authOperations.logInUser.pending](state) {
      state.isLoading = true;
    },
    [authOperations.logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuth = true;
      state.isLoading = false;
    },
    [authOperations.logInUser.rejected](state) {
      state.isLoading = false;
    },

    [authOperations.logoutUser.pending](state) {
      state.isLoading = true;
    },
    [authOperations.logoutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.logoutUser.rejected](state) {
      state.isLoading = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.isLoading = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
