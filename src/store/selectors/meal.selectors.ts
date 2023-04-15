import type { IStateSchema } from '../types/state-schema';

export const getAllMeals = (state: IStateSchema) => state.meal.mealData;

export const searchQuery = (state: IStateSchema) => state.meal.searchQuery;

export const sortMeals = (state: IStateSchema) => state.meal.sort;

export const currentMeal = (state: IStateSchema) => state.meal.currentMeal;
