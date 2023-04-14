import type { IMealSchema } from 'store/types/meal';
import { createSlice } from '@reduxjs/toolkit';

import { fetchMealsData } from 'store/services';

const initialState: IMealSchema = {
    mealData: null,
    isLoading: false,
    error: undefined,
};

export const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchMealsData.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchMealsData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.mealData = action.payload;
            })
            .addCase(fetchMealsData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export const { actions: mealActions, reducer: mealReducer } = mealSlice;
