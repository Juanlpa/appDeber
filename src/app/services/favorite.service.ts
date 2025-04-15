import { Injectable } from '@angular/core';

export interface IFavorito {
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private storageKey = 'favoritos';  // Clave para guardar los favoritos en localStorage

  // Recupera los favoritos desde localStorage o usa valores predeterminados
  getFavoritos(): IFavorito[] {
    const favoritos = localStorage.getItem(this.storageKey);
    return favoritos ? JSON.parse(favoritos) : [
      { nombre: 'Kevin Flores', descripcion: 'Inversionista' },
      { nombre: 'Alex Medina', descripcion: 'Abogado de Imagic' },
    ];
  }

  // Guarda los favoritos en localStorage
  agregarFavorito(favorito: IFavorito): void {
    const favoritos = this.getFavoritos();  // Obtener la lista actual de favoritos
    favoritos.push(favorito);  // Agregar el nuevo favorito
    localStorage.setItem(this.storageKey, JSON.stringify(favoritos));  // Guardar la lista actualizada en localStorage
  }
}
