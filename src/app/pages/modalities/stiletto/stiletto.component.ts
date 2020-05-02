import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modalities-stiletto',
  templateUrl: './stiletto.component.html',
  styleUrls: ['./stiletto.component.scss']
})
export class StilettoComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedStiletto();
  }

  ngOnInit(): void {
    this._title.setTitle('Stiletto - Fisio Pole');

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();
  }

  onResizedStiletto() {}
}
