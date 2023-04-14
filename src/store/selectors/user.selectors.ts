import type { IStateSchema } from '../types/state-schema';

export const getUserPhoto = (state: IStateSchema) => state.user.userData?.photo;
export const getUserId = (state: IStateSchema) => state.user.userData?.id;
export const getUserName = (state: IStateSchema) => state.user.userData?.userName;
export const getUserEmail = (state: IStateSchema) => state.user.userData?.email;
