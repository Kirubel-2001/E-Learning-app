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
<<<<<<< HEAD
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent,HomeComponent, ContactUsComponent],
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
