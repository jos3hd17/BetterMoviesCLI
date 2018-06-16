import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutesRoutingModule } from './routes/routes-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './modules/index/index.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { TheaterComponent } from './modules/theater/theater.component';
import { HeaderComponent } from './modules/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MoviesComponent,
    LoginComponent,
    RegisterComponent,
    TheaterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
