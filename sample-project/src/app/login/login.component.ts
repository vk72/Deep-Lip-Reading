import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators, FormControl } from '@angular/forms';
import {LoginService} from "../login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  input1 = new FormControl('');
  input2 = new FormControl('');
  input3 = new FormControl('');
  input4 = new FormControl('');//pass
  input5 = new FormControl('');//retype pass
  input6 = new FormControl('');
  input7 = new FormControl('');
  input8 = new FormControl('');
  input9 = new FormControl('');
  input10 = new FormControl('');
  input11 = new FormControl('');
  input12 = new FormControl('');
  switch = true;

  OpenSignup(){
    this.switch = false;
  }

  EnterValues(){
    this.loginService.usr=this.input1.value;
    this.loginService.pwd=this.input2.value;
    console.log('recieved= key:' + this.input1.value + 'value:' + this.input2.value);
  }

  EnterSignup(){

  }

  ngOnInit() {
    FormGroup;
    FormBuilder;
    Validators
  }

}
