import { Routes } from '@angular/router';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { DetallesDeProductosComponent } from './detalles-de-productos/detalles-de-productos.component';

export const routes: Routes = [
    {path:'', redirectTo:'AgregarProductos',pathMatch:'full'},
    
    {path:'ListarProductos',component:ListarProductosComponent},
    {path:'AgregarProductos',component:AgregarProductosComponent},
    {path:'detalles/:id',component:DetallesDeProductosComponent}
];
