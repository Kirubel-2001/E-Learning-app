import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedValue: string='';

  sort: Sort[] = [
    { value: 'Release date (newest First)', viewValue: 'Release date (newest First)' },
    { value: 'Release date (oldest First)', viewValue: 'Release date (oldest First)' },
    { value: 'Overall Rating', viewValue: 'Overall Rating' },
    { value: 'Popular (Most Viewed)', viewValue: 'Popular (Most Viewed)' }
  ];
}
interface Sort {
  value: string;
  viewValue: string;


  
}
