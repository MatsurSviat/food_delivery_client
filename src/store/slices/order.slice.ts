import type { IOrderSchema } from 'store/types/order';
import { createSlice } from '@reduxjs/toolkit';

// import { confirmOrder } from 'store/services/order';

const initialState: IOrderSchema = {
    items: [],
    orderTotalAmount: 0,
    isLoading: false,
    error: undefined,
    cartMessage: 'Your Order is empty',
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

        clearOrder: state => {
            state.items = [];
        },

        setGoToOrderMessage: state => {
            state.cartMessage = 'The Order is being processed';
        },

        setDefaultMessage: state => {
            state.cartMessage = initialState.cartMessage;
        },
    },
    // extraReducers: builder =>
    //     builder
    //         .addCase(confirmOrder.pending, state => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(confirmOrder.fulfilled, state => {
    //             state.isLoading = false;
    //         })
    //         .addCase(confirmOrder.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         }),
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
