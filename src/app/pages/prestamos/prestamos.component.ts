import { Component } from '@angular/core';
import { prestamos } from 'src/app/datos/prestamos-prestamos';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent {
prestamos: any[] = prestamos;

}



