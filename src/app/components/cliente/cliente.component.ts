import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../../services/cliente.service';
import { Clientes } from 'src/app/model/clientes';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  clientes: Clientes[] = [];
  constructor( private clienteServer: ClienteService) { }

  ngOnInit(): void {
    this.mostrar();
  }

  mostrar() {
    this.clienteServer.AllClientes().subscribe(data => {
      this.clientes = [];
      data.forEach((element: any) => {
        this.clientes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.clientes);
    });
  }
  eliminar($event: any,cliente: Clientes) {
    $event.preventDefault();
    Swal.fire({ title: '¿Esta Seguro de Borrar?',
      text: "Se Borrara definitivamente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'}).then((result) => {
        if (result.isConfirmed) {
          this.clienteServer.borrarCliente((String)(cliente.id));
          Swal.fire(
            'Borrado!',
            'Su item fue borrardo.',
            'success'
          )
        }
      })
  }

}
