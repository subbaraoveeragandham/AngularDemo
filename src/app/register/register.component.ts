import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {RouterModule,Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  successmessage=null;
  errormessage=null;
  constructor(private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.email]],
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

}
