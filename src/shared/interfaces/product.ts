import { ProductDescription } from "./product-description";
import { ProductHighlight } from "./product-highlight";
import { ProductImage } from "./product-image";

export interface Product {
    id: number;
    name: string;
    brandName: string;
    category: string;
    images: ProductImage[];
    price: number;
    rating: number;
    noOfPeopleRated: number;
    discount: number;
    shortDescription: string;
    highlight: ProductHighlight
}