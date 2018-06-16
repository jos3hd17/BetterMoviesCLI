import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string = "";
  password:string = "";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public login() {
    localStorage.setItem("user", this.user);
    this.router.navigate(["movies"]);
  }

}
