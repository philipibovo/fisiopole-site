import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private _title: Title, public scripts: ScriptsGeneral) {}

  ngOnInit(): void {
    this._title.setTitle('Contato - Fisio Pole');

    if (this.scripts.transitionPage) {
      this.scripts.startTransitionPageIn();
    }
  }
}
