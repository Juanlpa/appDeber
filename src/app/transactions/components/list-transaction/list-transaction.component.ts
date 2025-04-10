import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'jlop-list-transaction',
  imports: [CommonModule,MatIconModule],
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.css'
})
export class ListTransactionComponent {
  transacciones = [
    { id: 'T001', fecha: '2025-03-25', monto: '500 USD', tipo: 'Ingreso' },
    { id: 'T002', fecha: '2025-03-26', monto: '200 USD', tipo: 'Egreso' }
  ];

  verDetalle(transaccion: any) {
    console.log('Ver detalle de la transacción:', transaccion.id);
  }
}
