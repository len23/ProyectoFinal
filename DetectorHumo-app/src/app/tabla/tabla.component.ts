import { Component, OnInit } from '@angular/core';
import {CONSULTAS} from '../moks-consulta';
import {Consulta} from '../consulta'

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  consultas=CONSULTAS;
   
  constructor() { }

  ngOnInit() {
  }

}
