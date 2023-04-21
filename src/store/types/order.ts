import type { IMeal } from './meal';

export interface IOrderSchema {
    orderItems: IMeal[];
    orderTotalQuantity: number;
    orderTotalAmount: number;
}
