import { Component, OnInit } from '@angular/core';
import { ServiceWithObservableService } from 'src/app/services/service-with-observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  data!: string;
  constructor(private userService:ServiceWithObservableService) { }

  ngOnInit(): void {
    // pour afficher data dans le html du composant contact
    this.userService.getSUbject().subscribe(
      res => {
        this.data = res;
        console.log(this.data, 'sera déconnecté');
      })
  }

}
