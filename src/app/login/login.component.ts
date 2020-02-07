import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username ='admin';
  password = 'admin';
  LoginComponent: any;
  message: string;


  constructor() { }

  ngOnInit() {
  }
  trylogin(uname,pass)
  {
    console.log(uname+" "+pass)
    if(uname === this.username && pass === this.password) {
      this.message = "Login Successfull"
    }else {
      this.message = "Invalid Credentials"
    }
  }

}
