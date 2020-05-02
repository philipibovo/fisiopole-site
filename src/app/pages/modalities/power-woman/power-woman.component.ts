import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modalities-power-woman',
  templateUrl: './power-woman.component.html',
  styleUrls: ['./power-woman.component.scss']
})
export class PowerWomanComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedPowerWoman();
  }

  ngOnInit(): void {
    this._title.setTitle('Power Woman - Fisio Pole');

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();
  }

  onResizedPowerWoman() {}
}
