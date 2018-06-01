import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuComponent} from '/home/lenin/Escritorio/2018A/JavaScript/VSCode/ProyectoFinal/ProyectoFinal/DetectorHumo-app/src/app/menu/menu.component';

import {PanelMenuModule} from 'primeng/panelmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    PanelMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }