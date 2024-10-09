import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {
  productos: Product[] = [];
  categorias: string[] = ['Electrónica', 'Ropa', 'Hogar', 'Otros'];
  categoriaSeleccionada: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit():void{
    this.productos=this.productService.getProducts();
  }

  eliminarProducto(id:number){
    this.productService.deleteProduct(id);
    this.productos=this.productService.getProducts();
  }

  filtrarPorCategoria(){
    return this.productos.filter(producto=>this.categoriaSeleccionada?
        producto.categoria===this.categoriaSeleccionada:true);
  }

}
