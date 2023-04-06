import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type { AsyncThunkConfig } from '../../types/async-thunk-config';

interface ISignUpArgs {
    userName: string;
    email: string;
    password: string;
}

export const signUp = createAsyncThunk<void, ISignUpArgs, AsyncThunkConfig<string>>(
    'auth/signUp',
    async (registrationData, thunkAPI) => {
        const {
            rejectWithValue,
            extra: { api },
        } = thunkAPI;

        try {
            const response = await api.post<void>('/auth/sign-up', registrationData);

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
