import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../scripts/global';
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-modalities',
  templateUrl: './modalities.component.html',
  styleUrls: ['./modalities.component.scss']
})
export class ModalitiesComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedModalities();
  }

  ngOnInit(): void {
    this._title.setTitle('Modalidades - Fisio Pole');

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();
  }

  onResizedModalities() {
    this.global.logoTheme = 'dark';
    this.global.menuTheme = 'dark';
    this.global.socialTheme = 'dark';
    this.global.madebyTheme = 'dark';

    if (this.global.isSmartphone) {
      this.global.iconMenuTheme = 'dark';
      this.global.madebyTheme = 'light';
    }
  }
}
