import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { orderActions } from 'store/slices';

import type { AsyncThunkConfig } from '../../types/async-thunk-config';

export const confirmOrder = createAsyncThunk<void, void, AsyncThunkConfig<string>>(
    'order/confirmOrder',
    async (_, thunkAPI) => {
        const {
            rejectWithValue,
            getState,
            dispatch,
            extra: { api },
        } = thunkAPI;

        const state = getState();
        const items = state.order.items.map(item => ({
            mealId: item.id,
            count: item.count,
        }));

        try {
            const response = await api.post<void>('/orders', { items });

            dispatch(orderActions.clearOrder());
            dispatch(orderActions.setGoToOrderMessage());

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
