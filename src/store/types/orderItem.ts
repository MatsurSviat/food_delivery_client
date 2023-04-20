import type { IMeal } from './meal';

export interface IOrderItem {
    id: string;
    meal: IMeal;
    count: number;
}

export interface IOrderItemSchema {
    itemData: IOrderItem | null;
    isLoading: boolean;
    error?: string;
}
