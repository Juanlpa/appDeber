import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FavoriteService, IFavorito } from '../../../services/favorite.service';
import { EntityDialogComponent } from '../../../components/app/shared/components/entity-dialog/entity-dialog.component';

@Component({
  selector: 'jlop-list-favorite',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './list-favorite.component.html',
  styleUrl: './list-favorite.component.css',
})
export class ListFavoriteComponent {
  favoritos: IFavorito[] = [];

  private favoriteService = inject(FavoriteService);
  private dialog = inject(MatDialog);

  constructor() {
    this.favoritos = this.favoriteService.getFavoritos();
  }

  verDetalle(favorito: IFavorito) {
    console.log('Ver detalle de:', favorito.nombre);
  }

  agregarFavorito() {
    const dialogRef = this.dialog.open(EntityDialogComponent, {
      width: '400px',
      data: { tipo: 'Favorito' },
    });

    dialogRef.afterClosed().subscribe((result: IFavorito) => {
      if (result) {
        console.log('Nuevo favorito:', result);  // Verificamos el valor recibido del diálogo
        // Agregar el favorito al arreglo del servicio
        this.favoriteService.agregarFavorito(result);
        // Recargar la lista de favoritos desde localStorage
        this.favoritos = this.favoriteService.getFavoritos();
        console.log('Lista de favoritos después de agregar:', this.favoritos);  // Verificamos la lista
      }
    });
  }
}
