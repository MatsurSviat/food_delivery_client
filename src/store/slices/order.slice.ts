import type { IOrderSchema } from 'store/types/order';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IOrderSchema = {
    items: [],
    orderTotalAmount: 0,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToOrder: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.items[itemIndex].count += 1;
            } else {
                const tempMeal = { ...action.payload, count: 1 };

                state.items.push(tempMeal);
            }
        },

        decreaseOrder: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (state.items[itemIndex].count > 1) {
                state.items[itemIndex].count -= 1;
            } else if (state.items[itemIndex].count === 1) {
                const filteredItems = state.items.filter(item => item.id !== action.payload.id);

                state.items = filteredItems;
            }
        },

        getTotal: state => {
            state.orderTotalAmount = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
        },
    },
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
