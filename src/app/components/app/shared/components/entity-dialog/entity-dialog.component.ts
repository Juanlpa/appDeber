import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface EntityDialogData {
  tipo: string; // Ej: 'Agente', 'Cliente', etc.
}

@Component({
  selector: 'jlop-entity-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './entity-dialog.component.html'
})
export class EntityDialogComponent {
  nombre = '';
  descripcion = '';

  constructor(
    public dialogRef: MatDialogRef<EntityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EntityDialogData
  ) {}

  guardar() {
    if (this.nombre && this.descripcion) {
      // Pasamos el nuevo agente al cerrar el diálogo
      this.dialogRef.close({ nombre: this.nombre, descripcion: this.descripcion });
    }
  }

  cancelar() {
    this.dialogRef.close();
  }
}
