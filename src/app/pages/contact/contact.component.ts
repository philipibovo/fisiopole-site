import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('Contato - Fisio Pole');
  }
}
