import { AnyAction, combineReducers } from '@reduxjs/toolkit';

import type { IStateSchema } from './types/state-schema';
import { logoutAction } from './actions/logout.action';
import { userReducer } from './slices';

const createCombinedReducers = combineReducers<IStateSchema>({
    user: userReducer,
});

export const rootReducers = (state: IStateSchema | undefined, action: AnyAction) => {
    if (action.type === logoutAction.type) {
        state = undefined;
    }

    return createCombinedReducers(state, action);
};