import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../scripts/global';
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public order0FxLayoutXS: string;
  public order0FxLayoutSM: string;

  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedContact();
  }

  ngOnInit(): void {
    this._title.setTitle('Contato - Fisio Pole');

    this.scripts.activeMenuItem('contato');
    this.scripts.pageIn();
  }

  onResizedContact() {
    this.global.logoTheme = 'dark';
    this.global.menuTheme = 'dark';
    this.global.socialTheme = 'dark';
    this.global.madebyTheme = 'dark';

    if (this.global.isSmartphone) {
      if (this.global.isPortrait) {
        this.order0FxLayoutXS = 'column';
      } else {
        this.order0FxLayoutXS = 'row';
      }
    }

    if (this.global.isTablet) {
      if (this.global.isPortrait) {
        this.order0FxLayoutSM = 'column';
      } else {
        this.order0FxLayoutSM = 'row';
      }
    }
  }
}
