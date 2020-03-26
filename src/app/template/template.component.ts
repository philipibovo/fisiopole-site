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

    if (this.scripts.isTablet()) {
      if (this.scripts.isLandscape()) {
        //logo
        document.getElementById('logo').classList.add('landscape');
        document.getElementById('logo').classList.remove('portrait');

        //menu
        document.getElementById('menu').classList.add('landscape');
        document.getElementById('menu').classList.remove('portrait');
        document.getElementById('icon-menu').classList.add('landscape');
        document.getElementById('icon-menu').classList.remove('portrait');

        //social
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
        document.getElementById('menu').classList.add('portrait');
        document.getElementById('menu').classList.remove('landscape');
        document.getElementById('icon-menu').classList.add('portrait');
        document.getElementById('icon-menu').classList.remove('landscape');

        //Social
        document.getElementById('social').classList.add('portrait');
        document.getElementById('social').classList.remove('landscape');

        //made by
        document.getElementById('made-by').classList.add('portrait');
        document.getElementById('made-by').classList.remove('landscape');
      }
    }
  }

  actionMenu(e) {
    if (
      this.scripts.isSmartphone() ||
      (this.scripts.isTablet() && !this.scripts.isLandscape())
    ) {
      document.getElementById('menu-shadow-2').classList.toggle('active');
      document.getElementById('menu-shadow-1').classList.toggle('active');
      document.getElementById('menu').classList.toggle('active');
      setTimeout(function() {
        document.getElementById('icon-menu').classList.toggle('active');
        document
          .getElementById('icon-menu')
          .firstElementChild.classList.toggle('fa-bars');

        document
          .getElementById('icon-menu')
          .firstElementChild.classList.toggle('fa-times');
      }, 150);
    } else {
      const items = document.getElementsByClassName('menu-item');

      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
      }

      e.target.classList.add('active');
    }
  }
}
