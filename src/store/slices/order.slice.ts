import type { IOrderSchema } from 'store/types/order';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IOrderSchema = {
    items: [],
    orderTotalAmount: 0,
    isLoading: false,
    error: undefined,
    cartMessage: 'Your Order is empty',
    currentMeal: {
        id: '',
        img: '',
        title: '',
        description: '',
        price: 0,
        taste: '',
        category: '',
        cookTime: 0,
        rating: 0,
        count: 1,
    },
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

        setCurrentMeal: (state, action) => ({
            ...state,
            currentMeal: {
                id: action.payload.currentId,
                img: action.payload.currentImg,
                title: action.payload.currentTitle,
                description: action.payload.currentDescription,
                price: action.payload.currentPrice,
                taste: action.payload.currentTaste,
                category: action.payload.currentCategory,
                cookTime: action.payload.currentCookTime,
                rating: action.payload.currentRating,
                count: initialState.currentMeal.count,
            },
        }),

        addCurrentMealToOrder: (state, _) => {
            const itemIndex = state.items.findIndex(item => item.id === state.currentMeal.id);

            if (itemIndex >= 0) {
                state.items[itemIndex].count += state.currentMeal.count;
            } else {
                state.items.push(state.currentMeal);
            }
        },

        increaseCurrentMealCount: state => {
            state.currentMeal.count += 1;
        },

        decreaseCurrentMealCount: state => {
            if (state.currentMeal.count <= 1) {
                state.currentMeal.count = initialState.currentMeal.count;
            } else {
                state.currentMeal.count -= 1;
            }
        },
    },
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
