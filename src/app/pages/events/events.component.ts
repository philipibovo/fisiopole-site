import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  constructor(private _title: Title, public scripts: ScriptsGeneral) {}

  ngOnInit(): void {
    this._title.setTitle('Eventos - Fisio Pole');

    if (this.scripts.transitionPage) {
      this.scripts.startTransitionPageIn();
    }
  }
}
