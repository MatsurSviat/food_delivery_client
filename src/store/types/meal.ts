export interface IMeal {
    id: number;
    img: string;
    title: string;
    description: string;
    price: number;
    taste: string;
    category: string;
    cookTime: number;
    rating: number;
}

export interface IMealSchema {
    mealData: IMeal[] | null;
    isLoading: boolean;
    error?: string;
}
