import type { IStateSchema } from '../types/state-schema';

export const getAllMeals = (state: IStateSchema) => state.meal.mealData;

// state.user.userData?.photo;
