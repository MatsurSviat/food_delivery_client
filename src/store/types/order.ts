import type { IOrderItem } from './orderItem';

export interface IOrder {
    id: string;
    items: IOrderItem[];
    deliveryCost: number;
    deliveryTime: number;
    completed: boolean;
}

export interface IOrderSchema {
    orderData: IOrder | null;
    isLoading: boolean;
    error?: string;
}
