import { createSelector } from '@reduxjs/toolkit';

import type { IStateSchema } from '../types/state-schema';

const selectSelf = (state: IStateSchema) => state;

export const getAllMeals = createSelector(selectSelf, state => state.meal.mealData);

export const searchQuery = createSelector(selectSelf, state => state.meal.searchQuery);

export const sortMeals = createSelector(selectSelf, state => state.meal.sortByCategory);

export const sortMealsByTaste = createSelector(selectSelf, state => state.meal.sortByTaste);

export const currentMeal = createSelector(selectSelf, state => state.meal.currentMeal);
