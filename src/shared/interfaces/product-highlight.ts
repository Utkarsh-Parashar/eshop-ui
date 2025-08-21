import { ProductHighlightType } from "../enums/product-highlight-type";

export interface ProductHighlight {
    id: number;
    text: string;
    type: ProductHighlightType
}
