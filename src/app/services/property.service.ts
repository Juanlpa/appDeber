import { Injectable } from '@angular/core';

export interface IPropiedad {
  nombre: string;
  descripcion: string;
  precio: string;
}

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private storageKey = 'propiedades';  // Clave para guardar las propiedades en localStorage

  // Recupera las propiedades desde localStorage o usa valores predeterminados
  getPropiedades(): IPropiedad[] {
    const propiedades = localStorage.getItem(this.storageKey);
    return propiedades ? JSON.parse(propiedades) : [
      { nombre: 'Casa en la playa', descripcion: 'Hermosa casa frente al mar, ideal para vacaciones', precio: '300,000 USD' },
      { nombre: 'Apartamento en la ciudad', descripcion: 'Apartamento moderno en el centro de la ciudad', precio: '150,000 USD' }
    ];
  }

  // Guarda las propiedades en localStorage
  agregarPropiedad(propiedad: IPropiedad): void {
    const propiedades = this.getPropiedades();  // Obtener la lista actual de propiedades
    propiedades.push(propiedad);  // Agregar la nueva propiedad
    localStorage.setItem(this.storageKey, JSON.stringify(propiedades));  // Guardar la lista actualizada en localStorage
  }
}
