import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'eshop-search-component',
  imports: [MatFormFieldModule, MatInput, MatIcon],
  templateUrl: './search-component.html',
  styleUrl: './search-component.scss'
})
export class SearchComponent {
  
  searchValueChanged() : void {
    console.log("value changed")
  }
}
