import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.sass']
})
export class LoginIndexComponent implements OnInit {
  public showCad: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
