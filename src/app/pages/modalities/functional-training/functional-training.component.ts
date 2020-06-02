import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Navona
import { Navona } from '../../../scripts/navona';

//Scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modalities-functional-training',
  templateUrl: './functional-training.component.html',
  styleUrls: ['./functional-training.component.scss']
})
export class FunctionalTrainingComponent implements OnInit {
  public pageTitle: string;
  public contentFxLayoutAlignXS: string;
  public optionsFxLayoutAlignXS: string;
  public contentFxLayoutAlignSM: string;

  constructor(
    private _title: Title,
    private _navona: Navona,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    this.onResizedFunctionalTraining();
  }

  ngOnInit(): void {
    this.pageTitle = 'Treinamento Funcional';
    this._title.setTitle(`${this.pageTitle} - Fisio Pole`);

    this.scripts.activeMenuItem('modalidades');
    this.scripts.pageIn();

    this._navona.start();
  }

  onResizedFunctionalTraining() {
    this.global.logoTheme = 'dark';
    this.global.menuTheme = 'dark';
    this.global.socialTheme = 'dark';
    this.global.madebyTheme = 'dark';

    if (this.global.isSmartphone) {
      this.global.iconMenuTheme = 'dark';
      this.global.madebyTheme = 'light';

      if (this.global.isPortrait) {
        this.contentFxLayoutAlignXS = 'center center';
        this.optionsFxLayoutAlignXS = 'center center';
      } else {
        this.contentFxLayoutAlignXS = 'start start';
        this.optionsFxLayoutAlignXS = 'end start';
      }
    }

    if (this.global.isTablet) {
      this.global.iconMenuTheme = 'dark';
      this.global.madebyTheme = 'light';

      if (this.global.isPortrait) {
        this.contentFxLayoutAlignSM = 'start start';
      } else {
        this.contentFxLayoutAlignSM = 'start start';
      }
    }
  }
}
