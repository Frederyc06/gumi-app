import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab2Page {
  busqueda: string = '';
  clientes = [
    { nombre: 'Juan Perez', ruc: '10234567890', telefono: '987654321' },
    { nombre: 'Maria Lopez', ruc: '10345678901', telefono: '976543210' },
    { nombre: 'Carlos Ruiz', ruc: '10456789012', telefono: '965432109' },
  ];
  get clientesFiltrados() {
    if (!this.busqueda) return this.clientes;
    return this.clientes.filter(c => c.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }
  abrirFormulario() { alert('Agregar cliente'); }
}
