import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'courses', component: CoursesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
