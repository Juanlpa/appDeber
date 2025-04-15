import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AgentService, IAgente } from '../../../services/agent.service';
import { EntityDialogComponent } from '../../../components/app/shared/components/entity-dialog/entity-dialog.component';

@Component({
  selector: 'jlop-list-agent',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './list-agent.component.html',
  styleUrl: './list-agent.component.css',
})
export class ListAgentComponent {
  agentes: IAgente[] = [];

  private agentService = inject(AgentService);
  private dialog = inject(MatDialog);

  constructor() {
    this.agentes = this.agentService.getAgentes();
  }

  verPerfil(agente: IAgente) {
    console.log('Ver perfil de:', agente.nombre);
  }

  agregarAgente() {
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      width: '400px',
      data: { tipo: 'Agente' },
    });

    dialogRef.afterClosed().subscribe((result: IAgente) => {
      if (result) {
        console.log('Nuevo agente:', result);  // Verificamos el valor recibido del diálogo
        // Agregar el agente al arreglo del servicio
        this.agentService.agregarAgente(result);
        // Recargar la lista de agentes desde localStorage
        this.agentes = this.agentService.getAgentes();
        console.log('Lista de agentes después de agregar:', this.agentes);  // Verificamos la lista
      }
    });
  }
}