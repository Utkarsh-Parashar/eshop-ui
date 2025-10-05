import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'eshop-product-banner-component',
  imports: [CommonModule],
  templateUrl: './product-banner-component.html',
  styleUrl: './product-banner-component.scss'
})
export class ProductBannerComponent {

  currentIndex:number = 0;
  bannerList : {imgUrl: string, contentAlignment: 'right'|'left'|'center', subtitle: string, title: string}[] = [
    {imgUrl: '../image/landing-page/poster-img3.webp', contentAlignment: 'center', subtitle: 'New Collection', title: 'SPRING<br>SUMMER 2025'},
    {imgUrl: '../image/landing-page/poster-img.webp', contentAlignment: 'right', subtitle: 'ROG Gaming Laptop - The Rise Of Gamers', title: 'UNLOCK NEXT-LEVEL<br>PERFORMANCE'},
    {imgUrl: '../image/landing-page/poster-img2.jpg', contentAlignment: 'left', subtitle: 'ROG Gaming Laptop - The Rise Of Gamers', title: 'UNLOCK NEXT-LEVEL<br>PERFORMANCE'}
  ];

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}
