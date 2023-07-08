import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent implements OnInit {
  transferencias: any[] = [];
  cliente: any = null;

  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService) {}

  ngOnInit() {
    
    this.cliente = this.clienteService.leerSesion();
    console.log('logueado:', this.cliente);
    this.cargarTransferencias();
  }

  cargarTransferencias() {
    if (this.cliente && this.cliente.id) {
      this.transferenciaService.obtenerTransferenciasEnviadas(this.cliente.id)
        .subscribe((transferenciasCargadas: any) => {
          console.log(transferenciasCargadas);
          this.transferencias = transferenciasCargadas;
        });
    }
  }
}
