import type { AsyncThunkConfig } from 'store/types/async-thunk-config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { TOKEN_KEY } from 'shared/constants/localStorage';

interface ISignInArgs {
    tokenId: string;
}

export const googleSign = createAsyncThunk<string, ISignInArgs, AsyncThunkConfig<string>>(
    'auth/signIn',
    async ({ tokenId }, thunkAPI) => {
        const {
            rejectWithValue,
            extra: { api },
        } = thunkAPI;

        try {
            const response = await api.post<string>('/auth/google', { tokenId });

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
