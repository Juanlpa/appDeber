import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'jlop-list-property',
  imports: [MatIconModule,CommonModule],
  templateUrl: './list-property.component.html',
  styleUrl: './list-property.component.css'
})
export class ListPropertyComponent {
  propiedades = [
    {  nombre: 'Casa en la playa', descripcion: 'Hermosa casa frente al mar, ideal para vacaciones', precio: '300,000 USD' },
    { nombre: 'Apartamento en la ciudad', descripcion: 'Apartamento moderno en el centro de la ciudad', precio: '150,000 USD' }
  ];

  verDetalle(propiedad: any) {
    console.log('Ver detalle de la propiedad:', propiedad.nombre);
  }
}
