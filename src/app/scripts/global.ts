import { Injectable } from '@angular/core';

// JSON Data
import dataMainMenu from '../json/main-menu.json';
import dataModalities from '../json/modalities.json';
import dataInstructors from '../json/instructors.json';

// Models
import { MainMenuModel } from '../models/menus/main-menu-model';
import { ModalityModel } from '../models/modalities/modality-model';
import { InstructorModel } from '../models/team/instructor-model';

@Injectable()
export class Global {
  public contentDisplay: string = 'show';
  public isSmartphone: boolean;
  public isTablet: boolean;
  public isDesktop: boolean;
  public isPortrait: boolean;
  public isLandscape: boolean;
  public logoTheme: string = 'dark';
  public menuTheme: string = 'dark';
  public iconMenuTheme: string = 'dark';
  public socialTheme: string = 'dark';
  public madebyTheme: string = 'dark';
  public lang: string;
  public pageTitle: string;
  public navonaActive: boolean = false;

  // Data Objects
  public mainMenu: MainMenuModel[] = dataMainMenu;
  public modalities: ModalityModel[] = dataModalities;
  public instructors: InstructorModel[] = dataInstructors;
}
