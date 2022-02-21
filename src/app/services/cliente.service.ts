import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Clientes as Coleccion } from '../model/clientes'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private dbF:AngularFirestore) { }
  AllClientes(){
    return this.dbF.collection<Coleccion>('clientes').snapshotChanges();
  }
  
  borrarCliente(id:string){
    return this.dbF.collection('clientes').doc(id).delete();
  }
}
