import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'jlop-list-contact',
  imports: [MatIconModule,CommonModule],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.css'
})
export class ListContactComponent {
  contactos = [
    {  nombre: 'Carlos Ramírez', telefono: '0995737456', email: 'carlos@gmail.com' },
    { nombre: 'Laura Fernández', telefono: '0983011509', email: 'laura@egmail.com' }
  ];

  verDetalle(contacto: any) {
    console.log('Ver detalles de:', contacto.nombre);
  }
}


