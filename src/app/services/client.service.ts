import { Injectable } from '@angular/core';

export interface ICliente {
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private storageKey = 'clientes';  // Clave para guardar los clientes en localStorage

  // Recupera los clientes desde localStorage o usa valores predeterminados
  getClientes(): ICliente[] {
    const clientes = localStorage.getItem(this.storageKey);
    return clientes ? JSON.parse(clientes) : [
      { nombre: 'Pedro López', descripcion: 'Empresario en tecnología' },
      { nombre: 'Ana Rodríguez', descripcion: 'Inversora en bienes raíces' }
    ];
  }

  // Guarda los clientes en localStorage
  agregarCliente(cliente: ICliente): void {
    const clientes = this.getClientes();  // Obtener la lista actual de clientes
    clientes.push(cliente);  // Agregar el nuevo cliente
    localStorage.setItem(this.storageKey, JSON.stringify(clientes));  // Guardar la lista actualizada en localStorage
  }
}
