import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css',
})
export class LessonComponent {
  // click button to toggle sidenav and change icon from menubar to x
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  isSidenavOpen: boolean | undefined;
  toggleSidenav() {
    this.sidenav.toggle();

    this.isSidenavOpen = !this.isSidenavOpen;
  }

  // scroll to specific page when clicked

  @ViewChild('scrollToLesson') scrollToLesson:
    | ElementRef<HTMLElement>
    | undefined;
  @ViewChild('scrollToMaterial') scrollToMaterial:
    | ElementRef<HTMLElement>
    | undefined;

  constructor(private elementRef: ElementRef) {}

  scrollTo(sectionId: string): void {
    const element = this.elementRef.nativeElement.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  // Change color when button clicked
  activeText: string = 'lesson'; // Track which text is currently active

  toggleActiveText(text: string) {
    if (this.activeText === text) {
      this.activeText = ''; // Toggle off if clicked again
    } else {
      this.activeText = text; // Set active text to the clicked text
    }
  }
// change navbar view
currentDiv: string = 'introduction'; // Initialize with the default div to display

showDiv(divName: string) {
  this.currentDiv = divName;
}
}
