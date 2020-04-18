import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Scripts
import { Global } from '../scripts/global';
import { ScriptsGeneral } from '../scripts/scripts-general';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public menuFxLayoutXS: string;
  public menuFxLayoutAlignXS: string;
  public menuFxLayoutSM: string;
  public menuFxLayoutAlignSM: string;
  public socialFxLayoutXS: string;
  public socialFxLayoutAlignXS: string;

  constructor(
    private _router: Router,
    public global: Global,
    public scripts: ScriptsGeneral
  ) {}

  ngOnInit(): void {
    this.onResizedTemplate();
  }

  onResizedTemplate() {
    if (this.global.isSmartphone) {
      if (this.global.isLandscape) {
        //menu
        this.menuFxLayoutXS = 'row';
        this.menuFxLayoutAlignXS = 'space-evenly center';

        //social
        this.socialFxLayoutXS = 'row';
        this.socialFxLayoutAlignXS = 'start center';
      } else {
        //menu
        this.menuFxLayoutXS = 'column';
        this.menuFxLayoutAlignXS = 'space-evenly center';

        //social
        this.socialFxLayoutXS = 'row';
        this.socialFxLayoutAlignXS = 'space-evenly center';
      }

      return;
    }
    //end if (this.global.isSmartphone)

    if (this.global.isTablet) {
      if (this.global.isLandscape) {
        //menu
        this.menuFxLayoutSM = 'row';
        this.menuFxLayoutAlignSM = 'space-evenly center';
      } else {
        //menu
        this.menuFxLayoutSM = 'column';
        this.menuFxLayoutAlignSM = 'space-evenly center';
      }

      return;
    }
    // end if (this.global.isTablet)
  }
}
