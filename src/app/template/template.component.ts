import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Scripts
import { ScriptsGeneral } from '../scripts/scripts-general';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public menuFxLayoutXS = 'column';
  public menuFxLayoutAlignXS = 'space-evenly center';
  public menuFxLayoutSM = 'column';
  public menuFxLayoutAlignSM = 'space-evenly center';
  public socialFxLayoutXS = 'row';
  public socialFxLayoutAlignXS = 'space-evenly center';
  public socialFxLayoutSM = 'column';
  public socialFxLayoutAlignSM = 'start center';

  constructor(private _router: Router, public scripts: ScriptsGeneral) {}

  ngOnInit(): void {
    this.onResized();
  }

  onResized() {
    if (this.scripts.isSmartphone()) {
      if (this.scripts.isLandscape()) {
        //menu
        this.menuFxLayoutXS = 'row';
        this.menuFxLayoutAlignXS = 'space-evenly center';
        document.getElementById('menu').classList.add('landscape');

        //social
        this.socialFxLayoutXS = 'column';
        this.socialFxLayoutAlignXS = 'start center';
        document.getElementById('social').classList.add('landscape');
        document.getElementById('social').classList.remove('portrait');
      } else {
        //menu
        this.menuFxLayoutXS = 'column';
        this.menuFxLayoutAlignXS = 'space-evenly center';
        document.getElementById('menu').classList.remove('landscape');

        //social
        this.socialFxLayoutXS = 'row';
        this.socialFxLayoutAlignXS = 'space-evenly center';
        document.getElementById('social').classList.add('portrait');
        document.getElementById('social').classList.remove('landscape');
      }

      return;
    }

    if (this.scripts.isTablet()) {
      if (this.scripts.isLandscape()) {
        //logo
        document.getElementById('logo').classList.add('landscape');
        document.getElementById('logo').classList.remove('portrait');

        //menu
        this.menuFxLayoutSM = 'row';
        this.menuFxLayoutAlignSM = 'space-evenly center';
        document.getElementById('menu').classList.add('landscape');
        document.getElementById('menu').classList.remove('portrait');
        document.getElementById('icon-menu').classList.add('landscape');
        document.getElementById('icon-menu').classList.remove('portrait');

        //social
        this.socialFxLayoutSM = 'row';
        this.socialFxLayoutAlignSM = 'start start';
        document.getElementById('social').classList.add('landscape');
        document.getElementById('social').classList.remove('portrait');

        //made by
        document.getElementById('made-by').classList.add('landscape');
        document.getElementById('made-by').classList.remove('portrait');
      } else {
        //logo
        document.getElementById('logo').classList.add('portrait');
        document.getElementById('logo').classList.remove('landscape');

        //menu
        this.menuFxLayoutSM = 'column';
        this.menuFxLayoutAlignSM = 'space-evenly center';
        document.getElementById('menu').classList.add('portrait');
        document.getElementById('menu').classList.remove('landscape');
        document.getElementById('icon-menu').classList.add('portrait');
        document.getElementById('icon-menu').classList.remove('landscape');

        //Social
        this.socialFxLayoutSM = 'column';
        this.socialFxLayoutAlignSM = 'start center';
        document.getElementById('social').classList.add('portrait');
        document.getElementById('social').classList.remove('landscape');

        //made by
        document.getElementById('made-by').classList.add('portrait');
        document.getElementById('made-by').classList.remove('landscape');
      }

      return;
    }
  }
}
