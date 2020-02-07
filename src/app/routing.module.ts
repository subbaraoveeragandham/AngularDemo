import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AppComponent } from './app.component';

const routes:Routes=[
  {
    path:'Home',component:AppComponent
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Register',component:RegisterComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
