import { createSelector } from '@reduxjs/toolkit';

import type { IStateSchema } from '../types/state-schema';

const selectSelf = (state: IStateSchema) => state;

export const getUserPhoto = createSelector(selectSelf, state => state.user.userData?.photo);
export const getUserId = createSelector(selectSelf, state => state.user.userData?.id);
export const getUserName = createSelector(selectSelf, state => state.user.userData?.userName);
export const getUserEmail = createSelector(selectSelf, state => state.user.userData?.email);
export const getFavoriteMeals = createSelector(selectSelf, state => state.user.userData?.favoriteMeals);
