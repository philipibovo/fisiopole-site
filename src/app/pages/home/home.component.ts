import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public textFxLayoutAlignXS = 'center center';

  constructor(private _title: Title, public scripts: ScriptsGeneral) {}

  ngOnInit(): void {
    this._title.setTitle('Fisio Pole');
    this.onResized();

    if (this.scripts.transitionPage) {
      this.scripts.startTransitionPageIn();
    }
  }

  onResized() {
    this.scripts.transitionPageTheme = 'light';
    this.scripts.logoTheme = 'dark';
    this.scripts.menuTheme = 'dark';
    this.scripts.socialTheme = 'light';
    this.scripts.madebyTheme = 'light';

    if (this.scripts.isSmartphone()) {
      this.scripts.iconMenuTheme = 'light';
      this.scripts.menuTheme = 'dark';

      if (this.scripts.isLandscape()) {
        document.getElementById('content').classList.add('landscape');
        document.getElementById('content').classList.remove('portrait');
        this.textFxLayoutAlignXS = 'center end';
        this.scripts.socialTheme = 'light';
      } else {
        document.getElementById('content').classList.remove('landscape');
        document.getElementById('content').classList.add('portrait');
        this.textFxLayoutAlignXS = 'center center';
        this.scripts.socialTheme = 'dark';
      }

      return;
    }

    if (this.scripts.isTablet()) {
      this.scripts.iconMenuTheme = 'light';

      if (this.scripts.isLandscape()) {
        //content
        document.getElementById('content').classList.add('landscape');
        document.getElementById('content').classList.remove('portrait');
      } else {
        //content
        document.getElementById('content').classList.remove('landscape');
        document.getElementById('content').classList.add('portrait');
      }

      return;
    }
  }
}
