import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    let user:any = localStorage.getItem("user");
    if (user == undefined) {
      this.router.navigate(["index"]);
    }
  }

  public theater() {
    this.router.navigate(["theater"]);
  }

}
