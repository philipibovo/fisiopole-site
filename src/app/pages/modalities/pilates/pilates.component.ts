import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modalities-pilates',
  templateUrl: './pilates.component.html',
  styleUrls: ['./pilates.component.scss']
})
export class PilatesComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedPilates();
  }

  ngOnInit(): void {
    this._title.setTitle('Pilates - Fisio Pole');

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();
  }

  onResizedPilates() {}
}
