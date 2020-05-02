import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../scripts/global';
import { ScriptsGeneral } from '../../scripts/scripts-general';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedTeam();
  }

  ngOnInit(): void {
    this._title.setTitle('Equipe - Fisio Pole');

    this.scripts.activeMenuItem('equipe');
    this.scripts.pageIn();
  }

  onResizedTeam() {}
}
