import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type { AsyncThunkConfig } from '../../types/async-thunk-config';
import { fetchFavoriteMeals } from './fetch-favorite-meals';

export const removeFavoriteMeal = createAsyncThunk<void, string, AsyncThunkConfig<string>>(
    'user/removeFavoriteMeal',
    async (mealId, thunkAPI) => {
        const {
            rejectWithValue,
            dispatch,
            extra: { api },
        } = thunkAPI;

        try {
            const response = await api.delete<void>(`/user/${mealId}/favorite`);

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
