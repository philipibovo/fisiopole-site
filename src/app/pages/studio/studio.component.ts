import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {
  public displayStart;
  constructor(private _title: Title, public scripts: ScriptsGeneral) {}

  ngOnInit(): void {
    this._title.setTitle('O Estúdio - Fisio Pole');

    this.onResized();

    this.scripts.activeMenuItem('estudio');

    if (this.scripts.transitionPage) {
      this.scripts.startTransitionPageIn();
    }

    setTimeout(() => {
      this.displayStart = 'true';
    }, 300);
  }

  onResized() {
    this.scripts.transitionPageTheme = 'dark';
    this.scripts.logoTheme = 'dark';
    this.scripts.menuTheme = 'light';
    this.scripts.socialTheme = 'light';
    this.scripts.madebyTheme = 'light';
  }
}
