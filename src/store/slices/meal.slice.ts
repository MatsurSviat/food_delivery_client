import type { IMealSchema } from 'store/types/meal';
import { createSlice } from '@reduxjs/toolkit';

import { fetchMealsData } from 'store/services';

const initialState: IMealSchema = {
    mealData: [],
    isLoading: false,
    error: undefined,
    searchQuery: '',
    sort: 'all',
};

export const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => ({ ...state, searchQuery: action.payload.toLocaleLowerCase() }),
        setSort: (state, action) => ({ ...state, sort: action.payload }),
    },
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
