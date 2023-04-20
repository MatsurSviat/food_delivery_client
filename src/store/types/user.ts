import type { IMeal } from './meal';

export interface IUser {
    id: number;
    email: string;
    photo: string;
    userName: string;
    favoriteMeals: IMeal[];
}

export interface IUserSchema {
    userData: IUser | null;
    isLoading: boolean;
    error?: string;
}
