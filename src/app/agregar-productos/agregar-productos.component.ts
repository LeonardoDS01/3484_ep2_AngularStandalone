import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-productos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar-productos.component.html',
  styleUrl: './agregar-productos.component.css'
})
export class AgregarProductosComponent {
  nombreProducto='';
  categoriaProducto = '';
  precioProducto = 0;
  descripcionProducto = '';
  exitoso: boolean = false;
  mensajeFin: string = '';


  constructor(private productService: ProductService) { }

  agregarProducto() {
    const nuevoProducto: Product = {
      id: 0,
      nombre: this.nombreProducto,
      categoria: this.categoriaProducto,
      precio: this.precioProducto,
      descripcion: this.descripcionProducto
    };
    this.exitoso = false;
    console.log(nuevoProducto)
    try {
      // validar
      if (!this.nombreProducto || !this.categoriaProducto || !this.descripcionProducto) {
        throw new Error("Por favor, complete todos los campos obligatorios");
      }
      if (this.precioProducto < 1) {
        throw new Error("Ingresar un precio correcto")
      }
      // Agregar
      this.productService.addProduct(nuevoProducto);
      this.exitoso = true;
      this.mensajeFin = 'Registro exitoso';

      // Limpiar
      this.nombreProducto = '';
      this.categoriaProducto = '';
      this.precioProducto = 0;
      this.descripcionProducto = '';
    } catch (error) {
      this.exitoso = false;
      this.mensajeFin = (error as Error).message;
    }
  }



}
