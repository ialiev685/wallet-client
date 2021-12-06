import { createSlice } from '@reduxjs/toolkit';
import * as modalAction from './modal-action';

const initialState = {
  isOpenModal: false,
  isOpenLogoutModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  extraReducers: {
    [modalAction.openModal](state, _) {
      state.isOpenModal = true;
    },

    [modalAction.closeModal](state, _) {
      state.isOpenModal = false;
    },

    [modalAction.openLogoutModal](state, _) {
      state.isOpenLogoutModal = true;
    },

    [modalAction.closeLogouteModal](state, _) {
      state.isOpenLogoutModal = false;
    }
  },
});

export default modalSlice.reducer;
