import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import {MenuComponent} from '/home/lenin/Escritorio/2018A/JavaScript/VSCode/ProyectoFinal/ProyectoFinal/DetectorHumo-app/src/app/menu/menu.component';
import {TablaComponent} from './tabla/tabla.component'

import {PanelMenuModule} from 'primeng/panelmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TablaComponent
    
  ],
  imports: [
    BrowserModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }