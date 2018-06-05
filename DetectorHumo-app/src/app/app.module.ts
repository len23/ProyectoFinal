import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import {MenuComponent} from '/home/lenin/Escritorio/2018A/JavaScript/VSCode/ProyectoFinal/ProyectoFinal/DetectorHumo-app/src/app/menu/menu.component';
import {TablaComponent} from './tabla/tabla.component'
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule ,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }