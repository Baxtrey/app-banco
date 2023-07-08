import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  intentos: number = 0;

  constructor(private clienteService: ClienteService, private router: Router) { }

  enviarLogin() {
    if (this.intentos < 3) {
      this.clienteService.login(this.email, this.password).subscribe(
        cliente => {
          console.log({ cliente });
          if (cliente) {
            this.clienteService.crearSesion(cliente);
            this.router.navigateByUrl('/pages/dashboard');
          } else {
            this.intentos++;
            console.error("Login incorrecto");
            const intentosRestantes = 3 - this.intentos;
            window.alert(`Credenciales incorrectas. Intentos restantes: ${intentosRestantes}`);
          }
        },
        error => {
          console.log({ error });
        }
      );
    } else {
      window.alert('Has excedido el número máximo de intentos');

    }

  }
}

