import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username ='Test';
  password = 'Test@123';
  LoginComponent: any;


  constructor() { }

  ngOnInit() {
  }
  trylogin(uname,pass)
  {
    console.log(uname+" "+pass)
  }

}
