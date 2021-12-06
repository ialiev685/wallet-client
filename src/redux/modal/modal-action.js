import { createAction } from '@reduxjs/toolkit';

export const openModal = createAction('modal/openModal');

export const closeModal = createAction('modal/closeModal');

//=====================================================

export const openLogoutModal = createAction('modal/openLogoutModal');

export const closeLogouteModal = createAction('modal/closeLogouteModal');