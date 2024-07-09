import { FontAwesomeImportModule } from './fontAwesomeImport/fontawesome.module';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SecondHeaderComponent } from './components/second-header/second-header.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SpecificCourseComponent } from './components/courses/specific-course/specific-course.component';
import { LessonComponent } from './components/courses/lesson/lesson.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, ContactUsComponent, AboutUsComponent,FooterComponent, SecondHeaderComponent, LoginComponent,CoursesComponent, SpecificCourseComponent, LessonComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    FontAwesomeImportModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
