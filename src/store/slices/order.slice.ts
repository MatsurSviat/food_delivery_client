import type { IOrderSchema } from 'store/types/order';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IOrderSchema = {
    orderItems: [],
    orderTotalQuantity: 0,
    orderTotalAmount: 0,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToOrder: (state, action) => {
            state.orderItems.push(action.payload);
        },
    },
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
