import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  plan:string = "";
  user:string = "";
  password:string = "";
  birthday:string = "";
  creditcard:string = "";
  ccfinish:string = "";
  cccode:string = "";

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  public register() {
    let user:any = localStorage.setItem("user", this.user);
    this.router.navigate(['movies']);
    alert("Hola " + user + ", su registro fue exitoso! ");
  }

}
