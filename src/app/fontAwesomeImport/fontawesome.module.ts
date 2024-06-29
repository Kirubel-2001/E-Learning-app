import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  imports: [ FontAwesomeModule ],
  exports: [FontAwesomeModule],
})
export class FontAwesomeImportModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faPhone,faLocationDot,faUser,faClock,faBars,faMagnifyingGlass);
  }
}
