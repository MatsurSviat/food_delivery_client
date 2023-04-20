import type { IOrderItemSchema } from 'store/types/orderItem';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IOrderItemSchema = {
    itemData: null,
    isLoading: false,
    error: undefined,
};

const orderItemSlice = createSlice({
    name: 'orderItem',
    initialState,
    reducers: {
        addItem: (state, action) => {
            if (state.itemData) {
                state.itemData.meal = action.payload;
                state.itemData.count = 1;
            }
        },
    },
});

export const { actions: orderItemActions, reducer: orderItemReducer } = orderItemSlice;
