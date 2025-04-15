import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ClientService, ICliente } from '../../../services/client.service';
import { EntityDialogComponent } from '../../../components/app/shared/components/entity-dialog/entity-dialog.component';

@Component({
  selector: 'jlop-list-client',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.css',
})
export class ListClientComponent {
  clientes: ICliente[] = [];

  private clientService = inject(ClientService);
  private dialog = inject(MatDialog);

  constructor() {
    this.clientes = this.clientService.getClientes();
  }

  verPerfil(cliente: ICliente) {
    console.log('Ver perfil de:', cliente.nombre);
  }

  agregarCliente() {
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      width: '400px',
      data: { tipo: 'Cliente' },
    });

    dialogRef.afterClosed().subscribe((result: ICliente) => {
      if (result) {
        console.log('Nuevo cliente:', result);  // Verificamos el valor recibido del diálogo
        // Agregar el cliente al arreglo del servicio
        this.clientService.agregarCliente(result);
        // Recargar la lista de clientes desde localStorage
        this.clientes = this.clientService.getClientes();
        console.log('Lista de clientes después de agregar:', this.clientes);  // Verificamos la lista
      }
    });
  }
}
