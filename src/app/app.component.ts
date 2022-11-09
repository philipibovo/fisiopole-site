import { Component, OnInit } from '@angular/core';

import pkgApp from '../../package.json';

//Scripts
import { Global } from './scripts/global';
import { ScriptsGeneral } from './scripts/scripts-general';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public global: Global, public scripts: ScriptsGeneral) {
    // this.scripts.setLanguage();
    this.scripts.start();
  }

  title = 'Fisiopole Studio';

  ngOnInit() {
    this.onResizedApp();
  }

  onResizedApp() {
    this.scripts.verifyDevice();
    this.scripts.verifyOrientation();

    if (this.global.isSmartphone) {
      document.getElementById('menu').style.height = `${window.innerHeight -
        29}px`;
    }
    //end if (this.global.isSmartphone)

    if (this.global.isTablet) {
      document.getElementById('menu').style.height = `${window.innerHeight}px`;
      return;
    }
    // end if (this.global.isTablet)
  }
}
