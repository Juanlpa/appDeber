import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'jlop-list-agent',
  imports: [CommonModule,MatIconModule],
  templateUrl: './list-agent.component.html',
  styleUrl: './list-agent.component.css'
})
export class ListAgentComponent {
  agentes = [
    {  nombre: 'Juan Pérez', descripcion: 'Especialista en inversiones financieras' },
    {  nombre: 'María Gómez', descripcion: 'Experta en bienes raíces' }
  ];

  verPerfil(agente: any) {
    console.log('Ver perfil de:', agente.nombre);
  }
}
