import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductoComponent } from "src/app/components/producto/producto.component";
import {  RouterModule } from '@angular/router';
import { ProductonuevoComponent } from "src/app/components/producto/productonuevo/productonuevo.component";
import { ClienteComponent } from "src/app/components/cliente/cliente.component";
import { MotosComponent } from "src/app/components/motos/motos.component";
import { NewmotoComponent } from "src/app/components/motos/newmoto/newmoto.component";
//export 
const AdminLayoutRoutes:Routes=[
    {
        path:'producto', component:ProductoComponent
    },
    {
        path:'productoform', component:ProductonuevoComponent
    },
    {
        path:'productoform/:id', component:ProductonuevoComponent
    },
    {
        path: 'cliente', component:ClienteComponent
    },
    {
        path: 'moto', component:MotosComponent
    },
    {
        path: 'FormMoto', component:NewmotoComponent
    },
    {
        path: 'FormMoto/:id', component:NewmotoComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}