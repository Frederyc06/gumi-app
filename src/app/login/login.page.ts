import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class LoginPage {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.usuario === 'admin' && this.password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/tabs/tab1']);
    } else {
      alert('Usuario o contrasena incorrectos');
    }
  }
}
