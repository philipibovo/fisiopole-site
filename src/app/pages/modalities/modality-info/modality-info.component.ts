import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//Navona
import { Navona } from '../../../scripts/navona';

// models
import { InstructorModel } from '../../../models/team/instructor-model';
import { ModalityModel } from '../../../models/modalities/modality-model';

// scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-modality-info',
  templateUrl: './modality-info.component.html',
  styleUrls: ['./modality-info.component.scss']
})
export class ModalityInfoComponent implements OnInit {
  public pageTitleLocal: string;
  public modality: ModalityModel = {};
  public instructors: InstructorModel[] = [];

  constructor(
    private _title: Title,
    private _navona: Navona,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    const pathSplit = window.location.pathname.split('/');

    this.modality = this.global.modalities.filter(
      c => c.idName === pathSplit[pathSplit.length - 1]
    )[0];

    this.global.instructors.forEach(instructor => {
      instructor.modality.forEach(instructorModality => {
        if (instructorModality.id === this.modality.id) {
          this.instructors.push(instructor);
        }
      });
    });
  }

  ngOnInit(): void {
    switch (this.global.lang) {
      case 'en':
        this.pageTitleLocal = this.modality.name.en;
        break;
      case 'pt':
        this.pageTitleLocal = this.modality.name.pt;
        break;
    }

    this._title.setTitle(`${this.pageTitleLocal} - Fisio Pole`);
    this.scripts.setPageTitle(this.pageTitleLocal);

    this.scripts.activeMenuItem('modalities');
    this.scripts.pageIn();

    this._navona.start();
  }
  // end ngOnInit()
}
