import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { TOKEN_KEY } from 'shared/constants/localStorage';

import type { AsyncThunkConfig } from '../../types/async-thunk-config';

interface ISignInArgs {
    email: string;
    password: string;
}

export const signIn = createAsyncThunk<string, ISignInArgs, AsyncThunkConfig<string>>(
    'auth/signIn',
    async (authData, thunkAPI) => {
        const {
            rejectWithValue,
            extra: { api },
        } = thunkAPI;

        try {
            const response = await api.post<string>('/auth/sign-in', authData);

            localStorage.setItem(TOKEN_KEY, response.data);

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
