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
  }

  onResized() {
    if (this.scripts.isSmartphone()) {
      this.scripts.logoTheme = 'dark';
      this.scripts.iconMenuTheme = 'light';
      this.scripts.menuTheme = 'dark';
      this.scripts.madebyTheme = 'light';

      if (this.scripts.isLandscape()) {
        this.scripts.socialTheme = 'light';
        this.textFxLayoutAlignXS = 'center end';
        document.getElementById('text').classList.add('landscape');
      } else {
        this.scripts.socialTheme = 'dark';
        this.textFxLayoutAlignXS = 'center center';
        document.getElementById('text').classList.remove('landscape');
      }

      return;
    }

    if (this.scripts.isTablet()) {
      this.scripts.logoTheme = 'dark';
      this.scripts.menuTheme = 'dark';
      this.scripts.madebyTheme = 'light';

      if (!this.scripts.isLandscape()) {
        //content
        document.getElementById('content').classList.remove('landscape');
        document.getElementById('content').classList.add('portrait');

        this.scripts.iconMenuTheme = 'light';
        this.scripts.socialTheme = 'light';
      } else {
        //content
        document.getElementById('content').classList.add('landscape');
        document.getElementById('content').classList.remove('portrait');

        this.scripts.socialTheme = 'dark';
      }

      return;
    }

    //Desktop
    this.scripts.logoTheme = 'dark';
    this.scripts.menuTheme = 'dark';
    this.scripts.socialTheme = 'light';
    this.scripts.madebyTheme = 'light';
  }
}
