import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('Eventos - Fisio Pole');
  }
}
