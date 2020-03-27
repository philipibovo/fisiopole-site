import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ScriptsGeneral {
  public transitionPage = false;
  public transitionPageTheme = 'light';
  public logoTheme: string;
  public menuTheme: string;
  public iconMenuTheme: string;
  public socialTheme: string;
  public madebyTheme: string;

  constructor(private _router: Router) {}

  isSmartphone() {
    if (window.innerWidth <= 599) {
      return true;
    } else {
      return false;
    }
  }

  isTablet() {
    if (window.innerWidth >= 600 && window.innerWidth <= 959) {
      return true;
    } else {
      return false;
    }
  }

  isLandscape() {
    if (window.innerWidth > window.innerHeight) {
      return true;
    } else {
      return false;
    }
  }

  actionMenu(name) {
    console.log('1');
    if (name !== 'logo' && (this.isSmartphone() || this.isTablet())) {
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

      if (name === 'logo') {
        name = '/';
      } else {
        name = `/${name}`;
      }

      if (name !== this._router.url) {
        console.log('asd');
        this._router.navigate([name]);
      }
    } else {
      //Desktop
      if (name === 'logo') {
        name = '/';
      } else {
        name = `/${name}`;
      }

      if (name !== this._router.url) {
        //transition out
        this.startTransitionPageOut();

        //active menu item
        this.activeMenuItem(name);

        setTimeout(() => {
          this._router.navigate([name]);
        }, 500);
      }
    }
  }

  activeMenuItem(name) {
    name = name.replace('/', '');

    const items = document.getElementsByClassName('menu-item');

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }

    if (name && name !== 'logo') {
      document.getElementById(`menu-item-${name}`).classList.add('active');
    }
  }

  startTransitionPageOut() {
    this.transitionPage = true;
    setTimeout(() => {
      this.logoTheme = 'dark';
      this.menuTheme = 'dark';
      this.socialTheme = 'dark';
      this.madebyTheme = 'dark';
    }, 100);
  }

  startTransitionPageIn() {
    this.transitionPage = false;
  }
}
