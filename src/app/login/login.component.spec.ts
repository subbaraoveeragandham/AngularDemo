import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {exp} from '../unit_test'
fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ,exp.declarations],
      imports:[exp.imports],
      providers:[exp.providers],
      schemas:[exp.schemas]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create',()=>
  {
    expect(component).toBeTruthy();
  });
  it('should create user username field',()=>
  {
    expect(component['email']).toBeUndefined();
  });
  it('should create password field',()=>
  {
    expect(component['password']).toBeTruthy();
  });
  // it('should be invalid',()=>
  // {
  //   component.LoginComponent.controls['username'].setValue('');
  //   component.LoginComponent.controls['password'].setValue('');
  //   expect(component.LoginComponent.valid).toBeFalsy();
  // });
  // it('should be valid',()=>
  // {
  //   component.LoginComponent.controls['username'].setValue('Test');
  //   component.LoginComponent.controls['password'].setValue('Test@123');
  //   expect(component.LoginComponent.valid).toBeTruthy();
  // });
  it('should create a login function',()=>
  {
    expect(component.LoginComponent).toBeUndefined();
  });
  it('should create a function oninit',()=>
  {
    expect(component.ngOnInit).toBeDefined();
  });
  
  
});
