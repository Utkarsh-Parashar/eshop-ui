import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'eshop-product-filter-component',
  imports: [MatSliderModule, MatCheckboxModule, CommonModule, MatIconModule, FormsModule, MatButtonToggleModule],
  templateUrl: './product-filter-component.html',
  styleUrl: './product-filter-component.scss'
})
export class ProductFilterComponent {

  minPriceValue: number = 0;
  maxPriceValue: number = 400;
  starRatingPreference: 0|1|2|3|4|5 = 3;
  brandList: string[] = ['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'ASUS', 'HP', 'Dell'];
  paymentOptions: string[] = ['CARD/UPI', 'COD', 'EMI'];

  onStarClick(rating: number) : void {
    this.starRatingPreference = rating as 0|1|2|3|4|5;
  }

  resetStarRatingPref() : void {
    this.starRatingPreference = 0;
  }

  onBrandChange(event: any) : void {
    console.log('Brand changed: ', event);
  }

  onPaymentMethodSelection(method: string) : void{
    console.log('Toggled method: ', method);
  }
}
