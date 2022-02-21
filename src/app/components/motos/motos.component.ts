import { Component, OnInit } from '@angular/core';
import { MotoService } from 'src/app/services/moto.service';
import { Moto } from 'src/app/model/moto';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit {

  lista:Moto[] = [];

  constructor(private motoService:MotoService) { }

  ngOnInit(): void {
    this.motoService.mostrarMotos().subscribe( datosServer => {
      this.lista=datosServer.map(item => {
        return Object.assign({
          key:item.payload.doc.id,
          patente:item.payload.doc.data().patente,
          modelo:item.payload.doc.data().modelo,
          marca:item.payload.doc.data().marca,
          matricula:item.payload.doc.data().matricula,
          foto:item.payload.doc.data().foto
        });
      })
    })
  }

  eliminar($event: any, moto:Moto) {
    $event.preventDefault();
    Swal.fire({ title: '¿Esta Seguro de Borrar?',
      text: "Se Borrara definitivamente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'}).then((result) => {
        if (result.isConfirmed) {
          this.motoService.borrar((String)(moto.key));
          Swal.fire(
            'Borrado!',
            'Su item fue borrardo.',
            'success'
          )
        }
      })
  }

}
