import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css'],
})
export class TransferenciasRecibidasComponent implements OnInit {
  transferencias: any[] = [];
  cliente: any = null;

  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService) {}

  ngOnInit() {
    
    this.cliente = this.clienteService.leerSesion();
    console.log('logueado:', this.cliente);
    this.cargarTransferenciasRecibidas();
  }

  cargarTransferenciasRecibidas() {
    if (this.cliente && this.cliente.id) {
      this.transferenciaService.obtenerTransferenciasRecibidas(this.cliente.id)
        .subscribe((transferenciasCargadasRecibidas: any) => {
          console.log(transferenciasCargadasRecibidas);
          this.transferencias = transferenciasCargadasRecibidas;
        });
    }
  }
}