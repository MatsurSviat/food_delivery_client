import type { IMealSchema } from './meal';
import type { IModalSchema } from './modal';
import type { IUserSchema } from './user';

export interface IStateSchema {
    user: IUserSchema;
    modal: IModalSchema;
    meal: IMealSchema;
}
