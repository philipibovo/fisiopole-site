import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modalities',
  templateUrl: './modalities.component.html',
  styleUrls: ['./modalities.component.scss']
})
export class ModalitiesComponent implements OnInit {
  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('Modalidades - Fisio Pole');
  }
}
