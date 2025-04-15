import { Injectable } from '@angular/core';

export interface IContacto {
  nombre: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private storageKey = 'contactos';  // Clave para guardar los contactos en localStorage

  // Recupera los contactos desde localStorage o usa valores predeterminados
  getContactos(): IContacto[] {
    const contactos = localStorage.getItem(this.storageKey);
    return contactos ? JSON.parse(contactos) : [
      { nombre: 'Carlos Ramírez', telefono: '0995737456' },
      { nombre: 'Laura Fernández', telefono: '0983011509' }
    ];
  }

  // Guarda los contactos en localStorage
  agregarContacto(contacto: IContacto): void {
    const contactos = this.getContactos();  // Obtener la lista actual de contactos
    contactos.push(contacto);  // Agregar el nuevo contacto
    localStorage.setItem(this.storageKey, JSON.stringify(contactos));  // Guardar la lista actualizada en localStorage
  }
}
