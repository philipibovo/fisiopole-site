import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../scripts/global';
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedEvents();
  }

  ngOnInit(): void {
    this._title.setTitle('Eventos - Fisio Pole');

    this.scripts.activeMenuItem('eventos');
    this.scripts.pageIn();
  }

  onResizedEvents() {}
}
