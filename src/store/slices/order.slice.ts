import type { IOrderSchema } from 'store/types/order';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IOrderSchema = {
    orderData: null,
    isLoading: false,
    error: undefined,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItemToOrder: (state, action) => {
            if (state.orderData) {
                state.orderData.items.push(action.payload);
            }
        },
    },
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
