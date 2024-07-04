import { NgModule } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faPhone,
  faUser,
  faLocationDot,
  faClock,
  faPlus,
  faBars,
  faPrint,
  faStar,
  faMagnifyingGlass,
  faStarHalfStroke,
  faMinus
} from '@fortawesome/free-solid-svg-icons';
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontAwesomeImportModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPhone,
      faLocationDot,
      faUser,
      faClock,
      farClock,
      faBars,
      faMagnifyingGlass,
      faPrint,
      faEnvelope,
      faPlus,
      faMinus,
      faStar,
      farStar,
      faStarHalfStroke
    );
  }
}
