import type { AxiosInstance } from 'axios';

import type { IStateSchema } from './state-schema';

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export type AsyncThunkConfig<RejectValue> = {
    rejectValue: RejectValue;
    extra: IThunkExtraArg;
    state: IStateSchema;
};
