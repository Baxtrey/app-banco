import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ClienteService } from '../services/cliente/cliente.service';

export const loginGuard: CanActivateFn = (route, state) => {
  // inyectar servicio cliente
  const clienteService: ClienteService = inject(ClienteService)
  // leer la sesion  actual si 
  const sesion = clienteService.leerSesion();
  if(sesion){
    return true;
  } else{
    return false;
  }
  
};
