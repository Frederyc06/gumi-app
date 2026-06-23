import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
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
  private readonly USER = 'admin';
  private readonly PASS = '1234';
  constructor(private alertCtrl: AlertController) {}
  async iniciarSesion() {
    if (this.usuario === this.USER && this.password === this.PASS) {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/tabs/tab1';
    } else {
      const alert = await this.alertCtrl.create({ header: 'Error', message: 'Usuario o contrasena incorrectos.', buttons: ['OK'] });
      await alert.present();
    }
  }
}
