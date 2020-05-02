import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modalities-pole-choreographic',
  templateUrl: './pole-choreographic.component.html',
  styleUrls: ['./pole-choreographic.component.scss']
})
export class PoleChoreographicComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedPoleChoreographic();
  }

  ngOnInit(): void {
    this._title.setTitle('Pole Coreográfico - Fisio Pole');

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();
  }

  onResizedPoleChoreographic() {}
}
