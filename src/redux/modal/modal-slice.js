import { createSlice } from '@reduxjs/toolkit';
import * as modalAction from './modal-action';

const initialState = {
  isOpenModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  extraReducers: {
    [modalAction.openModal](state) {
      state.isOpenModal = true;
    },

    [modalAction.closeModal](state) {
      state.isOpenModal = false;
    },
  },
});

export default modalSlice.reducer;
