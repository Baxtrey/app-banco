import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {


constructor(private http: HttpClient) { }
  
urlApi: string = "http://localhost:8082/transferencia";

// traer todas las transferencias
obtenerTransferencias(){
  return this.http.get(this.urlApi);
}
// traer una transferencia por id
obtenerTransferenciasEnviadas(ordenante: number){
  return this.http.get(this.urlApi + "/ordenante/"+ ordenante);

}

obtenerTransferenciasRecibidas(beneficiario: number){
  return this.http.get(this.urlApi + "/beneficiario/"+ beneficiario); }

  obtenerTransferenciaPorId(id: number){

    return this.http.get(this.urlApi + "/" + id)
  }

  // guardar una transferencia

  guardar(transferencia: any){
return this.http.post(this.urlApi, transferencia);
  }

}




// borrar una transferencia por id



