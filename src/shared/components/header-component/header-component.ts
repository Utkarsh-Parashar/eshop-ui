import { Component } from '@angular/core';
import { SearchComponent } from '../search-component/search-component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'eshop-header-component',
  imports: [SearchComponent, MatIconModule, MatBadgeModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {

  isUserLoggedIn = false;

  onLoginClick() : void {
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

  onProfileClick() : void {
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }
}
