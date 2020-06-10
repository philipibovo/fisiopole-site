import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// models
import { InstructorModel } from '../../../models/team/instructor-model';
import { ModalityModel } from '../../../models/modalities/modality-model';

// scripts
import { Global } from '../../../scripts/global';
import { ScriptsGeneral } from '../../../scripts/scripts-general';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  public pageTitleLocal: string;
  public instructor: InstructorModel = {};
  public modalities: ModalityModel[] = [];

  constructor(
    private _title: Title,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {
    const pathSplit = window.location.pathname.split('/');

    this.instructor = this.global.instructors.filter(
      c => c.idName === pathSplit[pathSplit.length - 1]
    )[0];

    const totalModalities = this.instructor.modality.length;
    this.instructor.modality.forEach((element, i) => {
      let modality: ModalityModel = {};

      modality = this.global.modalities.filter(c => c.id === element.id)[0];

      if (i + 1 !== totalModalities) {
        modality.name.en += ',';
        modality.name.pt += ',';
      }

      this.modalities.push(modality);
    });
  }

  ngOnInit(): void {
    this.pageTitleLocal = `${this.instructor.name} ${this.instructor.surname}`;

    this._title.setTitle(`${this.pageTitleLocal} - Fisio Pole`);
    this.scripts.setPageTitle(this.pageTitleLocal);

    this.scripts.activeMenuItem('team');
    this.scripts.pageIn();
  }
}
