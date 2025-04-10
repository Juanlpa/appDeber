import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'jlop-list-client',
  imports: [MatIconModule,CommonModule],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.css'
})
export class ListClientComponent {
  clientes = [
    {  nombre: 'Pedro López', descripcion: 'Empresario en tecnología' },
    {  nombre: 'Ana Rodríguez', descripcion: 'Inversora en bienes raíces' }
  ];

  verPerfil(cliente: any) {
    console.log('Ver perfil de:', cliente.nombre);
  }
}

