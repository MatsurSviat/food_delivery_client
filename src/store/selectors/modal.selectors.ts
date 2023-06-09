import { createSelector } from '@reduxjs/toolkit';

import type { IStateSchema } from '../types/state-schema';

const selectSelf = (state: IStateSchema) => state;

export const isModalOpen = createSelector(selectSelf, state => state.modal.isOpen);
