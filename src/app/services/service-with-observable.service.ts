import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWithObservableService {

  // creer behaviourSubject de type string
  userSubject = new BehaviorSubject<string>('1');
  constructor() { }

  getSUbject() 
  {
    return this.userSubject.asObservable(); 
  }

  // changer behaviourSubject : userSubject par str par l'intermediaire de la methode next
  setSUbject(str: string)
  { 
    this.userSubject.next(str);
    console.log(this.userSubject) // userSubjet reçoit la valeur str
  }
}
