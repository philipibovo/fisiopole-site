import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

//Scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modalities-functional-training',
  templateUrl: './functional-training.component.html',
  styleUrls: ['./functional-training.component.scss']
})
export class FunctionalTrainingComponent implements OnInit {
  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedFunctionalTraining();
  }

  ngOnInit(): void {
    this._title.setTitle('Treinamento Funcional - Fisio Pole');

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();
  }

  onResizedFunctionalTraining() {}
}
