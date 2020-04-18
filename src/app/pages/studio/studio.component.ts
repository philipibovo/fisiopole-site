import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../scripts/global';
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {
  public displayStart;
  public textFxFlexOffsetSM: string;

  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {}

  ngOnInit(): void {
    this._title.setTitle('O Estúdio - Fisio Pole');

    this.onResizedStudio();

    this.scripts.activeMenuItem('estudio');

    setTimeout(() => {
      this.displayStart = 'show';
    }, 300);
  }

  onResizedStudio() {
    this.global.logoTheme = 'light';
    this.global.menuTheme = 'light';
    this.global.socialTheme = 'light';
    this.global.madebyTheme = 'light';

    if (this.global.isSmartphone) {
      this.global.iconMenuTheme = 'light';

      if (this.global.isLandscape) {
        this.global.socialTheme = 'light';
      } else {
        this.global.socialTheme = 'dark';
      }
    }
    //end if (this.global.isSmartphone)

    if (this.global.isTablet) {
      this.global.iconMenuTheme = 'light';

      if (this.global.isLandscape) {
        this.textFxFlexOffsetSM = '60px';
      } else {
        this.textFxFlexOffsetSM = '0px';
      }
    }
    // end if (this.global.isTablet)
  }
}
