import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {
  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('O Estúdio - Fisio Pole');
  }
}
