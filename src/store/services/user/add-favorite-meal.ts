import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type { AsyncThunkConfig } from '../../types/async-thunk-config';
import { fetchFavoriteMeals } from './fetch-favorite-meals';

export const addFavoriteMeal = createAsyncThunk<string[], string, AsyncThunkConfig<string>>(
    'user/addFavoriteMeal',
    async (mealId, thunkAPI) => {
        const {
            rejectWithValue,
            dispatch,
            extra: { api },
        } = thunkAPI;

        try {
            const response = await api.put<string[]>(`/user/${mealId}/favorite`);

            dispatch(fetchFavoriteMeals());

            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err.response?.data.message);
            }

            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }

            throw new Error(`Unexpected error: ${err}`);
        }
    },
);
