import { Component, OnInit } from '@angular/core';

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
  public socialFxLayoutXS = 'row';
  public socialFxLayoutAlignXS = 'space-evenly center';

  constructor(public scripts: ScriptsGeneral) {}

  ngOnInit(): void {
    this.onResized();
  }

  onResized() {
    if (this.scripts.isSmartphone() && this.scripts.isLandscape()) {
      //menu
      this.menuFxLayoutXS = 'row';
      this.menuFxLayoutAlignXS = 'space-evenly center';
      document.getElementById('menu').classList.add('landscape');

      //socila
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
  }

  toggleMenu() {
    if (this.scripts.isSmartphone()) {
      document.getElementById('menu-shadow-2').classList.toggle('active');
      document.getElementById('menu-shadow-1').classList.toggle('active');
      document.getElementById('menu').classList.toggle('active');
      setTimeout(function() {
        document
          .getElementById('icon-menu')
          .firstElementChild.classList.toggle('fa-bars');

        document
          .getElementById('icon-menu')
          .firstElementChild.classList.toggle('fa-times');
      }, 150);
    }
  }
}
