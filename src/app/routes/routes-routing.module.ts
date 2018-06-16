import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../modules/index/index.component';
import { LoginComponent } from '../modules/login/login.component';
import { MoviesComponent } from '../modules/movies/movies.component';
import { RegisterComponent } from '../modules/register/register.component';
import { TheaterComponent } from '../modules/theater/theater.component';

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "movies",
    component: MoviesComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "theater",
    component: TheaterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
