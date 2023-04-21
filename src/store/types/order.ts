import type { IMeal } from './meal';

export interface IItems extends IMeal {
    count: number;
}

export interface IOrderSchema {
    items: IItems[];
    orderTotalAmount: number;
}
