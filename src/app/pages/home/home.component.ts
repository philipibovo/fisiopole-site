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
  constructor(private _title: Title, public scripts: ScriptsGeneral) {}

  ngOnInit(): void {
    this.scripts.logoTheme = 'dark';
    this.scripts.menuTheme = 'dark';
    this.scripts.socialTheme = 'light';
    this.scripts.madebyTheme = 'light';

    this._title.setTitle('Fisio Pole');
  }
}
