import { Component, OnInit, signal, Signal } from '@angular/core';
import { ProductBannerComponent } from '../../../shared/components/product-banner-component/product-banner-component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { interval, map, Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'eshop-home-component',
  imports: [ProductBannerComponent, CommonModule, MatButtonModule, RouterModule, MatIconModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent implements OnInit {
  categoryList: string[] = ['Electronics', 'Clothing', 'Books', 'Home Appliances', 'Toys', 'Sports', 'Beauty'];
  topCategories = [
    {
      title: "Smartphone",
      subtitle: "Latest gadgets and devices",
      image: "../image/categories/smartphone.webp",
      redirectUrl: "/category/electronics"
    },
    {
      title: "Furniture",
      subtitle: "Stylish and functional furniture",
      image: "../image/categories/furniture.webp",
      redirectUrl: "/category/furniture"
    },
    {
      title: "Clothing",
      subtitle: "Fashionable apparel for everyone",
      image: "../image/categories/clothing.jpg",
      redirectUrl: "/category/clothing"
    },
    {
      title: "Footwear",
      subtitle: "Stylish shoes and accessories",
      image: "../image/categories/footwear.jpg",
      redirectUrl: "/category/footwear"
    }
  ];
  remainingTime = signal<{days: number, hour: number, minute: number, second: number}>({days: 0, hour: 0, minute: 0, second: 0});
  countdownSubscription: Subscription | undefined;
  festiveOffers = [
    "../image/landing-page/festive-offer/img1.webp",
    "../image/landing-page/festive-offer/img2.webp",
    "../image/landing-page/festive-offer/img3.webp",
    "../image/landing-page/festive-offer/img4.webp",
    "../image/landing-page/festive-offer/img5.webp",
    "../image/landing-page/festive-offer/img6.webp"
  ];

  ngOnInit(): void {
    const currentDate = new Date();
    const offerEndDate = new Date();
    offerEndDate.setDate(currentDate.getDate() + 5); //Assuming offer is valid for 5 days.
    offerEndDate.setHours(4, 0, 0); //Assuming sale will end at 4:00AM

    this.countdownSubscription = interval(1000).pipe(
      map(() => this.calculateRemainingTime(offerEndDate))
    ).subscribe(res => {
      if(res.days <= 0 && res.hour <= 0 && res.minute <= 0 && res.second <= 0) {
        this.unsubscribeTimeCalculator();
      }
      else {
        this.remainingTime.set(res);
      }
    });
  }

  private calculateRemainingTime(endDate: Date) : {days: number, hour: number, minute: number, second: number} {
    const currentDate = new Date();
    const timeDifference = endDate.getTime() - currentDate.getTime();

    if(timeDifference <= 0) {
      return {days: 0, hour: 0, minute: 0, second: 0};
    }

    const days = Math.floor(timeDifference/(1000 * 60 * 60 * 24));
    const hour = Math.floor((timeDifference/(1000 * 60 * 60)) % 24);
    const minute = Math.floor((timeDifference/(1000 * 60)) % 60);
    const second = Math.floor((timeDifference/1000) % 60);

    return {days: days, hour: hour, minute: minute, second: second};
  }

  private unsubscribeTimeCalculator() : void {
    this.countdownSubscription?.unsubscribe();
    this.remainingTime.set({days: 0, hour: 0, minute: 0, second: 0});
  }
}
