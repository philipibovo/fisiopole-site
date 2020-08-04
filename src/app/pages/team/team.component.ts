import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../scripts/global';
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public pageTitleLocal: string;
  public itemsFxLayoutSM: string;
  public fxLayoutGapSM: string;

  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedTeam();
  }

  ngOnInit(): void {
    switch (this.global.lang) {
      case 'en':
        this.pageTitleLocal = 'Team';
        break;
      case 'pt':
        this.pageTitleLocal = 'Equipe';
        break;
    }

    this._title.setTitle(`${this.pageTitleLocal} - Fisiopole Studio`);
    this.scripts.setPageTitle(this.pageTitleLocal);

    this.scripts.activeMenuItem('team');
    this.scripts.pageIn();
  }
  // end ngOnInit()

  onResizedTeam() {
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

      if (this.global.isPortrait) {
        this.itemsFxLayoutSM = 'row';
        this.fxLayoutGapSM = '25px';
      } else {
        this.itemsFxLayoutSM = 'column';
        this.fxLayoutGapSM = '0px';
      }
    }
  }
  // end onResizedTeam()
}
