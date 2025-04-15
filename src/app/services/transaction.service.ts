import { Injectable } from '@angular/core';

export interface ITransaccion {
nombre: string;  // Nombre de la transacción
descripcion: string;  // Descripción de la transacción
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private storageKey = 'transacciones';  // Clave para guardar las transacciones en localStorage

  // Recupera las transacciones desde localStorage o usa valores predeterminados
  getTransacciones(): ITransaccion[] {
    const transacciones = localStorage.getItem(this.storageKey);
    return transacciones ? JSON.parse(transacciones) : [
      { nombre: 'T001', descripcion: '2025-03-25' },
      { nombre: 'T002', descripcion: '2025-03-26' }
    ];
  }

  // Guarda las transacciones en localStorage
  agregarTransaccion(transaccion: ITransaccion): void {
    const transacciones = this.getTransacciones();  // Obtener la lista actual de transacciones
    transacciones.push(transaccion);  // Agregar la nueva transacción
    localStorage.setItem(this.storageKey, JSON.stringify(transacciones));  // Guardar la lista actualizada en localStorage
  }
}
