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
  public pageTitleLocal: string;

  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {}

  ngOnInit(): void {
    switch (this.global.lang) {
      case 'en':
        this.pageTitleLocal = 'Studio';
        break;
      case 'pt':
        this.pageTitleLocal = 'Estúdio';
        break;
    }

    this._title.setTitle(`${this.pageTitleLocal} - Fisio Pole`);
    this.scripts.setPageTitle(this.pageTitleLocal);

    this.scripts.activeMenuItem('studio');
    this.scripts.pageIn();

    this.onResizedStudio();
  }

  onResizedStudio() {
    this.global.logoTheme = 'dark';
    this.global.menuTheme = 'dark';
    this.global.socialTheme = 'dark';
    this.global.madebyTheme = 'dark';

    if (this.global.isSmartphone) {
      this.global.iconMenuTheme = 'dark';
      this.global.madebyTheme = 'light';
    }

    if (this.global.isTablet) {
      this.global.iconMenuTheme = 'dark';
      this.global.madebyTheme = 'light';
    }
    // end if (this.global.isTablet)
  }
}
