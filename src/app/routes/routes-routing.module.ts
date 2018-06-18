import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { InitPageComponent } from '../init-page/init-page.component';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { RegisterComponent } from '../register/register.component';
import { patch } from 'webdriver-js-extender';
import { DetailComponent } from '../main/body/detail/detail.component';
import { ListComponent } from '../main/body/list/list.component';


const routes: Routes = [
  {
    path: "index",
    component: InitPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "main",
    component: MainComponent,
    children:[
      {
        path:"detail",
        component: DetailComponent
      },
      {
        path:'list',
        component:ListComponent
      }
    ]
  },
  {
    path: "register",
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
