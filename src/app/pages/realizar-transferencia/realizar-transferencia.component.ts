import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-realizar-transferencia',
  templateUrl: './realizar-transferencia.component.html',
  styleUrls: ['./realizar-transferencia.component.css']
})
export class RealizarTransferenciaComponent implements OnInit {
  realizarTransferencia: any = {
    ordenante: {
      id: null,
    },
    beneficiario: {
      id: null,
    },
    concepto: "",
    importe: 0,
  };

  // para guardar el cliente ya logueado y usarlo como ordenante
  ordenante: any = null;
  feedback: string = "" ;


  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService) { }
  ngOnInit(): void {
    this.ordenante = this.clienteService.leerSesion();
  }

  enviarTransferencia() {
    if (this.ordenante) {
      // asignamos el id del ordenante
      this.realizarTransferencia.ordenante.id = this.ordenante.id;
      // enviar la transferencia al backend
      this.transferenciaService
        .guardar(this.realizarTransferencia)
        .subscribe((transferenciaGuardada) => {
          // aqui ya tendremos guardada la transferenica
          console.log({ transferenciaGuardada });
          this.feedback = "Transferencia enviada"
        },
        (error)=>{
          console.log(error);
this.feedback = "Error al enviar transferencia"
        }
        );
    }
  }
}

