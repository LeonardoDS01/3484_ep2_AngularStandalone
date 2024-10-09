import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { timeStamp } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[]=[];
  private idContador: number = 1;

  constructor() { }

  // Metodo Agregar
  addProduct(product:Product):void{
    product.id = this.idContador++;
    this.products.push(product);
  }

  // Metodo Eliminar
  deleteProduct(id:number):void{
    this.products=this.products.filter(product=>product.id!==id); //Ojo
  }

  // Metodo Listar
  getProducts():Product[]{
    return this.products;
  }

  // Metodo Consultar por ID
  getProductById(id:number):Product|undefined{
    return this.products.find(product=>product.id===id);
  }

}
