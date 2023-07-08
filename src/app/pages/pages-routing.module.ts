import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { DetalleTransferenciaComponent } from './detalle-transferencia/detalle-transferencia.component';
import { RealizarTransferenciaComponent } from './realizar-transferencia/realizar-transferencia.component';
import { loginGuard } from '../guards/login.guard';

const routes: Routes = [
  
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [loginGuard]
    },
    {
      path: 'transferencias-recibidas',
      component: TransferenciasRecibidasComponent,
      canActivate: [loginGuard]
    },
    {
      path: 'transferencias-enviadas',
      component: TransferenciasEnviadasComponent,
      canActivate: [loginGuard]
    },
    {
      path: 'prestamos',
      component: PrestamosComponent,
      canActivate: [loginGuard]
    },
    {
      path: 'transferencias/:id',
      component: DetalleTransferenciaComponent,
      canActivate: [loginGuard]
    },
    {
      path: 'realizar-transferencias',
      component: RealizarTransferenciaComponent,
      canActivate: [loginGuard]
    },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
