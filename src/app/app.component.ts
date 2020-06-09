import { Component, OnInit } from '@angular/core';

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
    this.scripts.setLanguage();
  }

  title = 'Fisio Pole';

  ngOnInit() {
    this.onResizedApp();
  }

  onResizedApp() {
    this.scripts.verifyDevice();
    this.scripts.verifyOrientation();
  }
}
