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

  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedHome();
  }

  ngOnInit(): void {
    switch (this.global.lang) {
      case 'en':
        this.pageTitleLocal = '';
        break;
      case 'pt':
        this.pageTitleLocal = '';
        break;
    }
    this._title.setTitle('Fisiopole Studio');
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
    }
    // end if (this.global.isSmartphone)

    if (this.global.isTablet) {
      this.global.iconMenuTheme = 'light';
    }
  }
}
