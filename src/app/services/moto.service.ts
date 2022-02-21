import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Moto as Coleccion } from '../model/moto'

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  constructor(private fdb: AngularFirestore) { }

  getItem(id:string){
    return this.fdb.collection('moto').doc(id).snapshotChanges();
  }

  agregarMoto(moto: any){
    return this.fdb.collection<Coleccion>('moto').doc().set(Object.assign({},moto));
  }

  mostrarMotos(){
    return this.fdb.collection<Coleccion>('moto').snapshotChanges();
  }

  borrar(id:string){
    return this.fdb.collection('moto').doc(id).delete();
  }

  actualizarMoto(id: string, data:Coleccion) {
    return this.fdb.collection('moto').doc(id).update(data);
  }
}
