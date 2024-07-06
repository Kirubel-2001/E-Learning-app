import { Component } from '@angular/core';

@Component({
  selector: 'app-specific-course',
  templateUrl: './specific-course.component.html',
  styleUrl: './specific-course.component.css',
})
export class SpecificCourseComponent {
  selectedContent: string = 'description';

  showContent(content: string) {
    this.selectedContent = content;
  }
}
