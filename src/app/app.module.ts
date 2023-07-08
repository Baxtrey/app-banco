import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NombreComponenteComponent } from './carpeta/nombre-componente/nombre-componente.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, NombreComponenteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,
  HttpClientModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
