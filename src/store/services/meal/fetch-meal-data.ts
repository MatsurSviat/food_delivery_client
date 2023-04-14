import type { AsyncThunkConfig } from 'store/types/async-thunk-config';
import type { IMeal } from 'store/types/meal';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export const fetchMealsData = createAsyncThunk<IMeal[], void, AsyncThunkConfig<string>>(
    'meal/fetchMealsData',
    async (_, thunkAPI) => {
        const {
            rejectWithValue,
            extra: { api },
        } = thunkAPI;

        try {
            const response = await api.get<IMeal[]>('/meals');

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
