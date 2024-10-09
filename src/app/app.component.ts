import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { DetallesDeProductosComponent } from './detalles-de-productos/detalles-de-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ListarProductosComponent,AgregarProductosComponent,DetallesDeProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
