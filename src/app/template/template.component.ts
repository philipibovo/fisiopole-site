import { Component, OnInit } from '@angular/core';

//Scripts
import { ScriptsGeneral } from '../scripts/scripts-general'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(public scripts: ScriptsGeneral) { }

  ngOnInit(): void {
  }

}
