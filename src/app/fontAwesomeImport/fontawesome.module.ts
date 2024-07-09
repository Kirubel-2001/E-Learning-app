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
  faMinus,
  faList,
  faUnlock,
  faLayerGroup,
  faUsers,
  faBullhorn,
  faStairs,
  faPlay,
  faArrowLeft,
  faX,
  faDownload,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {
  faHeart,
  faCirclePlay,
  faFile,
  faMoon,
  faSun,
  faCircleQuestion,
  faFilePdf
  faThumbsUp
} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

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
      faStarHalfStroke,
      faFacebook,
      faTwitter,
      faPinterest,
      faLinkedin,
      faTelegram,
      faList,
      faHeart,
      faUnlock,
      faLayerGroup,
      faFile,
      faCirclePlay,
      faUsers,
      faBullhorn,
      faStairs,
      faPlay,
      faArrowLeft,
      faX,
      faMoon,
      faSun,
      faCircleQuestion,
      faFilePdf,
      faDownload,
      faAngleRight,
      faThumbsUp
    );
  }
}
