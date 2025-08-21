import { Component, input, Input } from '@angular/core';
import { ImageSlider } from '../image-slider/image-slider';
import { Product } from '../../interfaces/product';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'eshop-product-card',
  imports: [ImageSlider, MatIconModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input({required: true}) product !: Product;
}
