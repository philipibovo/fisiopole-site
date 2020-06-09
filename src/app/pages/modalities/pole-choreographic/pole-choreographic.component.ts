import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Navona
import { Navona } from '../../../scripts/navona';

//Scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modalities-pole-choreographic',
  templateUrl: './pole-choreographic.component.html',
  styleUrls: ['./pole-choreographic.component.scss']
})
export class PoleChoreographicComponent implements OnInit {
  public pageTitleLocal: string;
  public contentFxLayoutAlignXS: string;
  public optionsFxLayoutAlignXS: string;
  public contentFxLayoutAlignSM: string;

  constructor(
    private _title: Title,
    private _navona: Navona,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedPoleChoreographic();
  }

  ngOnInit(): void {
    switch (this.global.lang) {
      case 'en-us':
        this.pageTitleLocal = 'Pole Choreographic';
        break;
      case 'pt-br':
        this.pageTitleLocal = 'Pole Coreográfico';
        break;
    }

    this._title.setTitle(`${this.pageTitleLocal} - Fisio Pole`);
    this.scripts.setPageTitle(this.pageTitleLocal);

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();

    this._navona.start();
  }

  onResizedPoleChoreographic() {
    this.global.logoTheme = 'dark';
    this.global.menuTheme = 'dark';
    this.global.socialTheme = 'dark';
    this.global.madebyTheme = 'dark';

    if (this.global.isSmartphone) {
      this.global.iconMenuTheme = 'dark';
      this.global.madebyTheme = 'light';

      if (this.global.isPortrait) {
        this.contentFxLayoutAlignXS = 'center center';
        this.optionsFxLayoutAlignXS = 'center center';
      } else {
        this.contentFxLayoutAlignXS = 'start start';
        this.optionsFxLayoutAlignXS = 'end start';
      }
    }

    if (this.global.isTablet) {
      this.global.iconMenuTheme = 'dark';
      this.global.madebyTheme = 'light';

      if (this.global.isPortrait) {
        this.contentFxLayoutAlignSM = 'start start';
      } else {
        this.contentFxLayoutAlignSM = 'start start';
      }
    }
  }
}
