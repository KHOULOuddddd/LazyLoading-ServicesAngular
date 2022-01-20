import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
  
})
export class LoginComponent implements OnInit {

  table  : [] = [];
  constructor(private userServices : UserService ) { }


  ngOnInit(): void {
    console.log(this.userServices.getUsers);
  }


}
