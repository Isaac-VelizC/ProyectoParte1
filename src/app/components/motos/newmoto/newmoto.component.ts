import { Component, OnInit } from '@angular/core';
import { MotoService } from 'src/app/services/moto.service';
import { Moto } from 'src/app/model/moto';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newmoto',
  templateUrl: './newmoto.component.html',
  styleUrls: ['./newmoto.component.css']
})
export class NewmotoComponent implements OnInit {

  item:Moto=new Moto();
  edit:boolean = false;
  titulo = 'Agregar Empleado';
  constructor( private motoService: MotoService, 
    private router: Router,
    private ActRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActRouter.params.subscribe((params:any) => {
      if (params.id) {
        this.edit=true;
        this.item.key=params.id
        this.motoService.getItem(params.id).subscribe(
          a=>{
            let mot:any;
            mot=a.payload.data();
            this.item= Object.assign({
              key:a.payload.id,
              patente:mot.patente,
              modelo:mot.modelo,
              marca:mot.marca,
              matricula:mot.matricula,
              foto:mot.foto
            });
          });
      }else
      {
        this.edit=false;
      }
    });
  }

  Enviar(){
    if (this.edit) {
      this.motoService.actualizarMoto((String)(this.item.key),this.item);
    } else {
      this.motoService.agregarMoto(this.item).then(a => {
        console.log("datos serve", a);
      });
    }
    Swal.fire({ title: 'Datos guardados',
      confirmButtonText:'OK'}).then((result) => {
        if (result.isConfirmed) { }
        this.router.navigate(['moto']);
      })
  }
  salir(){
    this.router.navigate(['moto']);
  }

}
