import type { IStateSchema } from '../types/state-schema';

export const getUserName = (state: IStateSchema) => state.user.userData?.userName;
