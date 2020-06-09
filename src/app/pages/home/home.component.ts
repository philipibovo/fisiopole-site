import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../scripts/global';
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pageTitleLocal: string;
  public textFxLayoutAlignXS: string;

  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedHome();
  }

  ngOnInit(): void {
    switch (this.global.lang) {
      case 'en-us':
        this.pageTitleLocal = '';
        break;
      case 'pt-br':
        this.pageTitleLocal = '';
        break;
    }
    this._title.setTitle('Fisio Pole');
    this.scripts.setPageTitle(this.pageTitleLocal);

    this.scripts.activeMenuItem('');
    this.scripts.pageIn();
  }

  onResizedHome() {
    this.global.logoTheme = 'dark';
    this.global.menuTheme = 'dark';
    this.global.socialTheme = 'light';
    this.global.madebyTheme = 'light';

    if (this.global.isSmartphone) {
      this.global.iconMenuTheme = 'light';

      if (this.global.isLandscape) {
        this.textFxLayoutAlignXS = 'center end';
        this.global.socialTheme = 'light';
      } else {
        this.textFxLayoutAlignXS = 'center center';
        this.global.socialTheme = 'dark';
      }

      return;
    }
    // end if (this.global.isSmartphone)

    if (this.global.isTablet) {
      this.global.iconMenuTheme = 'light';

      return;
    }
  }
}
