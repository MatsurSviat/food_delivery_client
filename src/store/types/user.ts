export interface IUser {
    id: number;
    email: string;
    userName: string;
}

export interface IUserSchema {
    userData: IUser | null;
    isLoading: boolean;
    error?: string;
}
