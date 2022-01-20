import { Component, OnInit } from '@angular/core';
import { ServiceWithObservableService } from 'src/app/services/service-with-observable.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  // injecter le service dans le composant account
  constructor(private userService : ServiceWithObservableService    ) { }

  ngOnInit(): void {
    // la valeur sera changé de '1' à str='khouloud'
    this.userService.setSUbject('khouloud'); 
  }
  
}
