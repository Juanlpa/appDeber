import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'jlop-list-favorite',
  imports: [MatIconModule,CommonModule],
  templateUrl: './list-favorite.component.html',
  styleUrl: './list-favorite.component.css'
})
export class ListFavoriteComponent {
  favoritos = [
    { nombre: 'Kevin Flores', descripcion: 'Inversionista ' },
    { nombre: 'Alex Medina', descripcion: 'Abogado de Imagic' }
  ];

  verDetalle(favorito: any) {
    console.log('Ver detalle de:', favorito.nombre);
  }
}
