import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import{exp} from '../unit_test'

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ,exp.declarations],
      imports:[exp.imports],
      providers:[exp.providers],
      schemas:[exp.schemas]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create register component', () => {
    expect(component).toBeTruthy();
  });
  it('should create register component', () => {
    expect(component).toBeTruthy();
  });
  it('should create register component', () => {
    expect(component).toBeTruthy();
  });
  // it('should create name field',()=>
  // {
  //   expect(component.registerForm.controls['name']).toBeTruthy();
  // });
  // it('should create email field',()=>
  // {
  //   expect(component.registerForm.controls['email']).toBeTruthy();
  // });
  // it('should create username field',()=>
  // {
  //   expect(component.registerForm.controls['username']).toBeTruthy();
  // });
  // it('should create password field',()=>
  // {
  //   expect(component.registerForm.controls['password']).toBeTruthy();
  // });
  // it('form should be invalid',()=>
  // {
  //   component.registerForm.controls['name'].setValue('');
  //   component.registerForm.controls['email'].setValue('');
  //   component.registerForm.controls['username'].setValue('');
  //   component.registerForm.controls['password'].setValue('');
  //   expect(component.registerForm.valid).toBeFalsy();
  // });
  // it('form should valid',()=>
  // {
  //   component.registerForm.controls['name'].setValue('Testing');
  //   component.registerForm.controls['email'].setValue('test@gmail.com');
  //   component.registerForm.controls['username'].setValue('Test');
  //   component.registerForm.controls['password'].setValue('Test@123');
  //   expect(component.registerForm.valid).toBeTruthy();
  // });
  
});
