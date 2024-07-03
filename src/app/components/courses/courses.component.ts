import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
selectedValue: string='';

  sort: Sort[] = [
    { value: 'Release date (newest First)', viewValue: 'Release date (newest First)' },
    { value: 'Release date (oldest First)', viewValue: 'Release date (oldest First)' },
    { value: 'Price High', viewValue: 'Price High' },
    { value: 'Price Low', viewValue: 'Price Low' },
    { value: 'Overall Rating', viewValue: 'Overall Rating' },
    { value: 'Popular (Most Viewed)', viewValue: 'Popular (Most Viewed)' }
  ];

  isDisplay1 = false;
  isDisplay2 = true;
  isDisplay3 = true;
  isDisplay4 = true;
  isDisplay5 = true;
  isDisplay6 = true;

  toggleDisplay1(){
    this.isDisplay1 = !this.isDisplay1
  }
   toggleDisplay2(){
     this.isDisplay2 = !this.isDisplay2
   }
   toggleDisplay3(){
     this.isDisplay3 = !this.isDisplay3
   }
   toggleDisplay4(){
     this.isDisplay4 = !this.isDisplay4
   }
   toggleDisplay5(){
     this.isDisplay5 = !this.isDisplay5
   }
   toggleDisplay6(){
     this.isDisplay6 = !this.isDisplay6
   }

}


interface Sort {
  value: string;
  viewValue: string;
}