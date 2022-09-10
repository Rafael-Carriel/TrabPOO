import { Injectable } from '@angular/core';
import { Hardware } from '../models/hardware';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {
  private _hardwares : Hardware[] = [];

  constructor() {
    let _hardware = new Hardware("placa mae", "asrock", "h 510", "500", "2");
    this.inserir(_hardware);
   }

   cadastrar(a,b,c,d,e,f){
    return true
   }

   public get hardwares() : Hardware[]{
    return this._hardwares;
   }
   public inserir(hardware : Hardware){
    this._hardwares.push(hardware);
   }
   //desconto fio dps de preco
   public editar(hardware : Hardware, 
    tipo : string, marca : string, modelo : string, 
    preco : string, quantidade : string) : boolean{
      for(let i=0; i < this._hardwares.length; i++){
        if(this._hardwares[i].id == hardware.id){
          this._hardwares[i].tipo = tipo;
          this._hardwares[i].marca = marca;
          this._hardwares[i].modelo = modelo;
          this._hardwares[i].preco = preco;
          this._hardwares[i];
          return true;
        }
        return false
      }
      
   }
   public excluir(hardware : Hardware) : boolean{
    for(let i = 0; i < this._hardwares.length; i++){
      if(this._hardwares[i].id == hardware.id){
        this._hardwares.splice(i, 1);
        return true;
      }
    }
    return false;
   }
}
