import { createSelector } from '@reduxjs/toolkit';

import type { IStateSchema } from '../types/state-schema';

const selectSelf = (state: IStateSchema) => state;

export const orderItems = createSelector(selectSelf, state => state.order.items);

export const totalPrice = createSelector(selectSelf, state => state.order.orderTotalAmount);

export const cartMessage = createSelector(selectSelf, state => state.order.cartMessage);

export const currentMeal = createSelector(selectSelf, state => state.order.currentMeal);
