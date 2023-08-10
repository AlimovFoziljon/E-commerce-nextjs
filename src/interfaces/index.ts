export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    qunatity: number;
    rating: {rate: number; count: number;};
}