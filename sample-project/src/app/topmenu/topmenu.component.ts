import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service"

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit() {
    // console.log(this.loginService.)
  }

}
