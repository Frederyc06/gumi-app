import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab2Page {
  clientes = [
    { nombre: 'Bodega El Sol', ruc: '10456789123', telefono: '987-654-321' },
    { nombre: 'Minimarket Luna', ruc: '10321456789', telefono: '976-543-210' },
    { nombre: 'Restaurante Mar Azul', ruc: '20456123789', telefono: '965-432-109' },
    { nombre: 'Tienda Don Pepe', ruc: '10789456123', telefono: '954-321-098' },
  ];
}