export interface IMeal {
    id: string;
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
    mealData: IMeal[];
    isLoading: boolean;
    error?: string;
    searchQuery: string;
    sort: string;
}
