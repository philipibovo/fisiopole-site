import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('Equipe - Fisio Pole');
  }
}
