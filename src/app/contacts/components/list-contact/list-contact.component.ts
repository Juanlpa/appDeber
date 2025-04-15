import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactService, IContacto } from '../../../services/contact.service';
import { EntityDialogComponent } from '../../../components/app/shared/components/entity-dialog/entity-dialog.component';

@Component({
  selector: 'jlop-list-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.css',
})
export class ListContactComponent {
  contactos: IContacto[] = [];

  private contactService = inject(ContactService);
  private dialog = inject(MatDialog);

  constructor() {
    this.contactos = this.contactService.getContactos();
  }

  verDetalle(contacto: IContacto) {
    console.log('Ver detalles de:', contacto.nombre);
  }

  agregarContacto() {
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      width: '400px',
      data: { tipo: 'Contacto' },
    });

    dialogRef.afterClosed().subscribe((result: IContacto) => {
      if (result) {
        console.log('Nuevo contacto:', result);  // Verificamos el valor recibido del diálogo
        // Agregar el contacto al arreglo del servicio
        this.contactService.agregarContacto(result);
        // Recargar la lista de contactos desde localStorage
        this.contactos = this.contactService.getContactos();
        console.log('Lista de contactos después de agregar:', this.contactos);  // Verificamos la lista
      }
    });
  }
}
