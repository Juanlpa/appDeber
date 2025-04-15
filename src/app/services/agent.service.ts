import { Injectable } from '@angular/core';

export interface IAgente {
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  private storageKey = 'agentes';  // Clave para guardar los agentes en localStorage

  // Recupera los agentes desde localStorage o usa valores predeterminados
  getAgentes(): IAgente[] {
    const agentes = localStorage.getItem(this.storageKey);
    return agentes ? JSON.parse(agentes) : [
      { nombre: 'Juan Pérez', descripcion: 'Especialista en inversiones financieras' },
      { nombre: 'María Gómez', descripcion: 'Experta en bienes raíces' }
    ];
  }

  // Guarda los agentes en localStorage
  agregarAgente(agente: IAgente): void {
    const agentes = this.getAgentes();  // Obtener la lista actual de agentes
    agentes.push(agente);  // Agregar el nuevo agente
    localStorage.setItem(this.storageKey, JSON.stringify(agentes));  // Guardar la lista actualizada en localStorage
  }
}
