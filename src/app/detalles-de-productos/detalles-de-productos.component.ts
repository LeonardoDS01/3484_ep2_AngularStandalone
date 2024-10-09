import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-de-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-de-productos.component.html',
  styleUrl: './detalles-de-productos.component.css'
})
export class DetallesDeProductosComponent {

  producto:Product|undefined;

  constructor(private productservice:ProductService, private route:ActivatedRoute){}

  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productservice.getProductById(id);

    console.log(this.producto)
  }


}
