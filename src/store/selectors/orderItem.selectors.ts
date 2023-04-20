import { createSelector } from '@reduxjs/toolkit';

import type { IStateSchema } from '../types/state-schema';

const selectSelf = (state: IStateSchema) => state;

export const itemData = createSelector(selectSelf, state => state.orderItem.itemData);
