import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showLostPassword: boolean = false;

  toggleLostPassword() {
    this.showLostPassword = !this.showLostPassword;
  }
}
