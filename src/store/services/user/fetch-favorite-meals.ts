import type { IMeal } from 'store/types/meal';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type { AsyncThunkConfig } from '../../types/async-thunk-config';

export const fetchFavoriteMeals = createAsyncThunk<IMeal[], void, AsyncThunkConfig<string>>(
    'user/getFavoriteMeals',
    async (_, thunkAPI) => {
        const {
            rejectWithValue,
            extra: { api },
        } = thunkAPI;

        try {
            const response = await api.get<IMeal[]>('/user/favorite-meals');

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
