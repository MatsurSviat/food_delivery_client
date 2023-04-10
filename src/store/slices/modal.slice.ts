import type { IModalSchema } from 'store/types/modal';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IModalSchema = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: state => {
            state.isOpen = true;
        },
        closeModal: state => {
            state.isOpen = false;
        },
    },
});

export const { actions: modalActions, reducer: modalReducer } = modalSlice;
