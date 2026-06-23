import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab1Page {
  busqueda: string = '';
  productos = [
    { nombre: 'Agua San Luis 600ml', precio: 1.50, stock: 120 },
    { nombre: 'Inca Kola 1.5L', precio: 4.50, stock: 80 },
    { nombre: 'Coca Cola 3L', precio: 9.00, stock: 60 },
    { nombre: 'Sprite 500ml', precio: 2.50, stock: 95 },
    { nombre: 'Gatorade Azul 500ml', precio: 4.00, stock: 45 },
  ];
  carrito: any[] = [];
  get productosFiltrados() {
    if (!this.busqueda) return this.productos;
    return this.productos.filter(p => p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }
  constructor(private alertCtrl: AlertController) {}
  agregarAlCarrito(producto: any) {
    const existe = this.carrito.find(p => p.nombre === producto.nombre);
    if (existe) { existe.cantidad++; } else { this.carrito.push({ ...producto, cantidad: 1 }); }
  }
  quitarDelCarrito(item: any) {
    item.cantidad--;
    if (item.cantidad === 0) { this.carrito = this.carrito.filter(p => p.nombre !== item.nombre); }
  }
  subtotal() { return this.carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0); }
  igv() { return this.subtotal() * 0.18; }
  total() { return this.subtotal() + this.igv(); }
  async registrarVenta() {
    if (this.carrito.length === 0) return;
    const alert = await this.alertCtrl.create({ header: 'Venta Registrada', message: 'Total: S/. ' + this.total().toFixed(2), buttons: ['Aceptar'] });
    await alert.present();
    this.carrito = [];
  }
}
