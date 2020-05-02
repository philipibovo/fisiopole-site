import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modalities-pole-dance',
  templateUrl: './pole-dance.component.html',
  styleUrls: ['./pole-dance.component.scss']
})
export class PoleDanceComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedPoleDance();
  }

  ngOnInit(): void {
    this._title.setTitle('Pole Dance - Fisio Pole');

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();
  }

  onResizedPoleDance() {}
}
