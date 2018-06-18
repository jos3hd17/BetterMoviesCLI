import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { InitPageComponent } from './init-page/init-page.component';
import { HeaderComponent } from './main/header/header.component';
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import { BodyComponent } from './main/body/body.component';
import { ListComponent } from './main/body/list/list.component';
import { DetailComponent } from './main/body/detail/detail.component';
import { PlayerComponent } from './main/body/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    InitPageComponent,
    HeaderComponent,
    MainMenuComponent,
    BodyComponent,
    ListComponent,
    DetailComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
