
import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonBadge, IonSearchbar, IonList, IonItem, IonLabel, AlertController, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline, basketOutline, addOutline } from 'ionicons/icons';
interface Producto { id: number; nombre: string; categoria: string; precio: number; stock: number; }
interface ItemCarrito extends Producto { cantidad: number; }
@Component({ selector: 'app-tab1', templateUrl: './tab1.page.html', styleUrls: ['./tab1.page.scss'], standalone: true, imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonBadge, IonSearchbar, IonList, IonItem, IonLabel] })
export class Tab1Page implements OnInit {
  busqueda = ''; carrito: ItemCarrito[] = [];
  productos: Producto[] = [{id:1,nombre:'Inca Kola 600ml',categoria:'Gaseosa',precio:2.50,stock:120},{id:2,nombre:'Coca Cola 600ml',categoria:'Gaseosa',precio:2.50,stock:98},{id:3,nombre:'Agua San Luis 625ml',categoria:'Agua',precio:1.20,stock:200},{id:4,nombre:'Sporade 500ml',categoria:'Isotonica',precio:2.80,stock:45},{id:5,nombre:'Cifrut 500ml',categoria:'Jugo',precio:1.80,stock:60},{id:6,nombre:'Pilsen 620ml',categoria:'Cerveza',precio:4.50,stock:3},{id:7,nombre:'Cristal 620ml',categoria:'Cerveza',precio:4.20,stock:0},{id:8,nombre:'Pepsi 600ml',categoria:'Gaseosa',precio:2.30,stock:75}];
  productosFiltrados: Producto[] = [];
  constructor(private zone: NgZone, private alertCtrl: AlertController, private toastCtrl: ToastController) { addIcons({cartOutline, basketOutline, addOutline}); }
  ngOnInit() { this.productosFiltrados = [...this.productos]; }
  filtrarProductos() { this.zone.run(() => { const t = this.busqueda.toLowerCase(); this.productosFiltrados = this.productos.filter(p => p.nombre.toLowerCase().includes(t)); }); }
  agregarAlCarrito(producto: Producto) { this.zone.run(() => { const e = this.carrito.find(i => i.id === producto.id); if(e) { e.cantidad++; } else { this.carrito.push({...producto, cantidad:1}); } this.mostrarToast(producto.nombre + ' agregado'); }); }
  get totalItems() { return this.carrito.reduce((s,i) => s+i.cantidad, 0); }
  get totalVenta() { return this.carrito.reduce((s,i) => s+(i.precio*i.cantidad*1.18), 0); }
  async mostrarToast(m: string) { const t = await this.toastCtrl.create({message:m,duration:1500,position:'bottom'}); await t.present(); }
}
// fix
