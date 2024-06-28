import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faUser = faUser;
  faClock = faClock;
  phoneIcon: IconDefinition = faPhone;
  // locationIcon: IconDefinition = faLocationDot;
  // userIcon: IconDefinition = faUser;
  // clockIcon: IconDefinition = faClock;
}
