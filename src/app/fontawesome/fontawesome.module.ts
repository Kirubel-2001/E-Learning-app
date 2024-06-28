import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  imports: [  ]
})
export class FontawesomeModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faPhone,faLocationDot,faUser,faClock);
  }
}
