import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public greeting: string = '';
  public username: string = '';
  public balance: number = 0;
  public clientSince: string = '';
  cliente: any = null;
  newPassword: string = '';

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.cliente = this.clienteService.leerSesion();
    console.log('logueado:', this.cliente);

    const fecha = new Date();
    const hora = fecha.getHours();

    if (hora < 12) {
      this.greeting = 'Buenos días';
    } else if (hora < 18) {
      this.greeting = 'Buenas tardes';
    } else {
      this.greeting = 'Buenas noches';
    }

    if (this.cliente) {
      this.username = this.cliente.usuario;
      this.balance = this.cliente.saldo;
      this.clientSince = this.cliente.fechaRegistro;
    }
  }

  cerrarSesion(): void {
    // Aquí puedes agregar la lógica para cerrar la sesión
    this.clienteService.cerrarSesion(); // Ejemplo de llamada al método del servicio

    // Redirige al usuario a la página de inicio de sesión o a otra página deseada
    // utilizando las funciones de enrutamiento de Angular
    this.router.navigate(['/auth/login']); // Ejemplo de redirección a la página de inicio de sesión
  }
  cambiarContrasena(): void {
  this.cliente.password = this.newPassword
    this.clienteService.cambiarContrasena(this.cliente)
      .subscribe(
        (response) => {
          // La contraseña se cambió exitosamente
          console.log('Contraseña cambiada correctamente');
          // Aquí puedes realizar alguna acción adicional, como mostrar un mensaje al usuario
        },
        (error) => {
          // Ocurrió un error al cambiar la contraseña
          console.error('Error al cambiar la contraseña:', error);
          // Aquí puedes realizar alguna acción adicional, como mostrar un mensaje de error al usuario
        }
      );
  }
}

