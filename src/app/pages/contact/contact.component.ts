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
  public pageTitleLocal: string;
  public order0fxFlexOffsetXS: string;
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
    switch (this.global.lang) {
      case 'en':
        this.pageTitleLocal = 'Contact';
        break;
      case 'pt':
        this.pageTitleLocal = 'Contato';
        break;
    }

    this._title.setTitle(`${this.pageTitleLocal} - Fisiopole Studio`);
    this.scripts.setPageTitle(this.pageTitleLocal);

    this.scripts.activeMenuItem('contact');
    this.scripts.pageIn();
  }

  onResizedContact() {
    this.global.logoTheme = 'dark';
    this.global.menuTheme = 'dark';
    this.global.socialTheme = 'dark';
    this.global.madebyTheme = 'dark';
    this.global.iconMenuTheme = 'dark';
  }
}
