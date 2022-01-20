import { Injectable } from '@angular/core';

//@Injectable(): Décorateur qui marque une classe comme disponible pour être fournie et injectée en tant que dépendance.

@Injectable({

//providedIn: Les injecteurs établissent la communication avec l'injectable qui est basé sur @NgModule ou un autre InjectorType, même en spécifiant que cet injectable doit être fourni dans l'injecteur 'root'
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  getUsers() {
    return [
    {name : 'khouloud' , 'age': 25},
    {name : 'khouloud' , 'age': 25},
    {name : 'khouloud' , 'age': 25}
  ]}
}
