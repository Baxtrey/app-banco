import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-detalle-transferencia',
  templateUrl: './detalle-transferencia.component.html',
  styleUrls: ['./detalle-transferencia.component.css']
})
export class DetalleTransferenciaComponent implements OnInit {
  // Para guardar la transferencia leída
  transferencia: any = null;

  // ActivatedRoute permite hacer operaciones con la ruta, como leer parámetros
  constructor(
    private route: ActivatedRoute,
    private transferenciaService: TransferenciaService
  ) {}

  ngOnInit(): void {
    // Leemos el parámetro 'id' de la ruta actual
    const transferenciaIdString = this.route.snapshot.paramMap.get('id');
    let transfereniciaId;
    
    // Si hay un 'id', lo convertimos a número, ya que se lee como texto
    if (transferenciaIdString) {
      const transferenciaId = parseInt(transferenciaIdString);
      console.log({ transferenciaId });

      // Obtenemos la transferencia a partir del 'id'
      this.transferenciaService
        .obtenerTransferenciaPorId(transferenciaId)
        .subscribe((transferencia) => {
          // Aquí ya tenemos la transferencia
          console.log({ transferencia });
          this.transferencia = transferencia;
        });
    }
  }
}

