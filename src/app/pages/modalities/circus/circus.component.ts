import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modalities-circus',
  templateUrl: './circus.component.html',
  styleUrls: ['./circus.component.scss']
})
export class CircusComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedCircus();
  }

  ngOnInit(): void {
    this._title.setTitle('Circo - Fisio Pole');

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();
  }

  onResizedCircus() {}
}
