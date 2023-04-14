export interface IUser {
    id: number;
    email: string;
    photo: string;
    userName: string;
}

export interface IUserSchema {
    userData: IUser | null;
    isLoading: boolean;
    error?: string;
}
