import { createSlice } from '@reduxjs/toolkit';

import type { IUserSchema } from '../types/user';
import { fetchUserData } from '../services/user/fetch-user-data';

const initialState: IUserSchema = {
    userData: null,
    isLoading: false,
    error: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchUserData.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export const { actions: userActions, reducer: userReducer } = userSlice;
