import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab3Page {
  productos = [
    { nombre: 'Agua San Luis 600ml', stock: 120 },
    { nombre: 'Inca Kola 1.5L', stock: 80 },
    { nombre: 'Coca Cola 3L', stock: 15 },
    { nombre: 'Sprite 500ml', stock: 95 },
    { nombre: 'Gatorade Azul 500ml', stock: 8 },
  ];
}