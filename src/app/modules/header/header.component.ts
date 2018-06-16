import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user:any = "";

  constructor(private router:Router) { }

  ngOnInit() {
    this.user = localStorage.getItem("user");
  }
    
  public logout() {
    localStorage.removeItem("user");
    this.router.navigate(["index"]);
  }

}
