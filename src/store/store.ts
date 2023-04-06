import { configureStore } from '@reduxjs/toolkit';

import type { IThunkExtraArg } from './types/async-thunk-config';
import { apiInstance } from '../shared/api/api-instance';
import { rootReducers } from './rootReducer';

export function createReduxStore() {
    const extraArgument: IThunkExtraArg = {
        api: apiInstance,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
            }),
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
