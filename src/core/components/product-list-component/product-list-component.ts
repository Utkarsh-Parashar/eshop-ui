import { Component } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-product-list-component',
  imports: [ProductCard],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss'
})
export class ProductListComponent {
  headphoneImageList = [
    { src: '../products/headph-1/img.webp', alt: 'Soundcore Space One' },
    { src: '../products/headph-1/img-1.webp', alt: 'Soundcore Space One - Alternate View' },
    { src: '../products/headph-1/img-2.webp', alt: 'Soundcore Space One - Side View' }
  ];

  jeansImageList = [
    { src: '../products/jeans-1/img1.webp', alt: 'Levi\'s Original' },
    { src: '../products/jeans-1/img2.webp', alt: 'Levi\'s Original - Alternate View' },
    { src: '../products/jeans-1/img3.webp', alt: 'Levi\'s Original - Back View' },
    { src: '../products/jeans-1/img4.webp', alt: 'Levi\'s Original - Side View' }
  ];

  products: Product[] = [
    {
      "id": 1,
      "name": "Dell Laptop",
      "brandName": "Dell",
      "category": "Electronics",
      "images": [
        { "id": 1, "link": "../image/laptop/img1.webp", "description": "Soundcore Space One" },
        { "id": 2, "link": "../image/laptop/img2.webp", "description": "Soundcore Space One - Alternate View" },
        { "id": 3, "link": "../image/laptop/img3.webp", "description": "Soundcore Space One - Side View" },
        { "id": 4, "link": "../image/laptop/img4.webp", "description": "Soundcore Space One - Side View" }
      ],
      "price": 34500.5,
      "rating": 4.5,
      "noOfPeopleRated": 1287,
      "discount": 20,
      "shortDescription": "Black color, 1TB Storage, 15GB RAM, 16Inch Display",
      "highlight": {
        "id": 1,
        "text": "20% OFF",
        "type": 0
      }
    },
    {
      "id": 2,
      "name": "Zebronics Headphones",
      "brandName": "Zebronics",
      "category": "Electronics",
      "images": [
        { "id": 1, "link": "../image/headph-1/img.webp", "description": "Soundcore Space One" },
        { "id": 2, "link": "../image/headph-1/img-1.webp", "description": "Soundcore Space One - Alternate View" },
        { "id": 3, "link": "../image/headph-1/img-2.webp", "description": "Soundcore Space One - Side View" },
      ],
      "price": 12050,
      "rating": 3.7,
      "noOfPeopleRated": 638,
      "discount": 10,
      "shortDescription": "Zebronics Zeb-Storm Wired On Ear Headphone",
      "highlight": {
        "id": 2,
        "text": "NEW ARRIVAL",
        "type": 1
      }
    },
    {
      "id": 3,
      "name": "Levi's Jeans",
      "brandName": "Levi's",
      "category": "Clothing",
      "images": [
        { "id": 1, "link": "../image/jeans-1/img1.webp", "description": "Soundcore Space One" },
        { "id": 2, "link": "../image/jeans-1/img2.webp", "description": "Soundcore Space One - Alternate View" },
        { "id": 3, "link": "../image/jeans-1/img3.webp", "description": "Soundcore Space One - Side View" },
        { "id": 4, "link": "../image/jeans-1/img4.webp", "description": "Soundcore Space One - Side View" }
      ],
      "price": 2500,
      "rating": 4.8,
      "noOfPeopleRated": 829,
      "discount": 0,
      "shortDescription": "Levi's Original 501 Jeans",
      "highlight": {
        "id": 3,
        "text": "BEST SELLER",
        "type": 2
      }
    }
  ]
}
