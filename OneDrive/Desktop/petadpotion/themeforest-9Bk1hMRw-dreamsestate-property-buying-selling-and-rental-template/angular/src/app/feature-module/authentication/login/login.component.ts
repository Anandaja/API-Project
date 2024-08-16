import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public routes = routes
  public show_password = true;
  togglePassword() {
    this.show_password = !this.show_password;
  }
}
