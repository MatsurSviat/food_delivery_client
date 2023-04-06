import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type { IUser } from '../../types';
import type { AsyncThunkConfig } from '../../types/async-thunk-config';

export const fetchUserData = createAsyncThunk<IUser, void, AsyncThunkConfig<string>>(
    'user/fetchUserData',
    async (_, thunkAPI) => {
        const {
            rejectWithValue,
            extra: { api },
        } = thunkAPI;

        try {
            const response = await api.get<IUser>('/user/self');

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
