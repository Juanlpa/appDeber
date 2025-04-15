import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PropertyService, IPropiedad } from '../../../services/property.service';
import { EntityDialogComponent } from '../../../components/app/shared/components/entity-dialog/entity-dialog.component';

@Component({
  selector: 'jlop-list-property',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './list-property.component.html',
  styleUrl: './list-property.component.css',
})
export class ListPropertyComponent {
  propiedades: IPropiedad[] = [];
  mostrarTabla = false;

  private propertyService = inject(PropertyService);
  private dialog = inject(MatDialog);

  constructor() {
    this.propiedades = this.propertyService.getPropiedades();
  }

  verDetalle(propiedad: IPropiedad) {
    console.log('Ver detalle de la propiedad:', propiedad.nombre);
    this.mostrarTabla = true;
  }

  agregarPropiedad() {
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      width: '400px',
      data: { tipo: 'Propiedad' },
    });

    dialogRef.afterClosed().subscribe((result: IPropiedad) => {
      if (result) {
        console.log('Nueva propiedad:', result);  // Verificamos el valor recibido del diálogo
        // Agregar la propiedad al arreglo del servicio
        this.propertyService.agregarPropiedad(result);
        // Recargar la lista de propiedades desde localStorage
        this.propiedades = this.propertyService.getPropiedades();
        console.log('Lista de propiedades después de agregar:', this.propiedades);  // Verificamos la lista
      }
    });
  }
}
