import { Injectable } from '@angular/core';


export interface IMenu{
  title: string;
  url: string;
  icon: string;
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private listMenu: IMenu[] =[

    {
      title: 'Agentes',
      url: '/agents',
      icon: 'agent'
    },
    {
      title: 'Clientes',
      url: '/clients',
      icon: 'client'
    },
    
    {
      title: 'Contactos',
      url: '/contacts',
      icon: 'contact'
    },
    {
      title: 'Favoritos',
      url: '/favorites',
      icon: 'favorite'
    }
    ,
    {
      title: 'Propiedades',
      url: '/properties',
      icon: 'property'
    },
    {
      title: 'Transacciones',
      url: '/transactions',
      icon: 'transaction'
    }

  ];
  constructor() { }

  getMenu(){
    return [...this.listMenu];   
  }

  getMenuByUrl(url: string):IMenu{
    return this.listMenu.find(
      (menu)=> menu.url.toLowerCase() === url.toLocaleLowerCase()
    ) as IMenu; 
  }
  
}
