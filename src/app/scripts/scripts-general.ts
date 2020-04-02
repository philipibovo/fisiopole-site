import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

//Scripts
import { Global } from './global';

@Injectable()
export class ScriptsGeneral {
  constructor(private _router: Router, public global: Global) {}

  public verifyDevice() {
    if (window.innerWidth <= 599) {
      this.global.isSmartphone = true;
      this.global.isTablet = false;
      this.global.isDesktop = false;
      return;
    }

    if (window.innerWidth >= 600 && window.innerWidth <= 959) {
      this.global.isSmartphone = false;
      this.global.isTablet = true;
      this.global.isDesktop = false;
      return;
    }

    if (window.innerWidth >= 960) {
      this.global.isSmartphone = false;
      this.global.isTablet = false;
      this.global.isDesktop = true;
      return;
    }
  }
  // end public verifyDevice()

  public verifyOrientation() {
    if (window.innerWidth > window.innerHeight) {
      this.global.isLandscape = true;
      this.global.isPortrait = false;
    } else {
      this.global.isLandscape = false;
      this.global.isPortrait = true;
    }
  }
  // end public verifyOrientation()

  actionMenu(name) {
    if (name !== 'logo' && (this.global.isSmartphone || this.global.isTablet)) {
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

      if (name === 'iconMenu') {
        return;
      }

      if (name === 'logo') {
        name = '/';
      } else {
        name = `/${name}`;
      }

      if (name !== this._router.url) {
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
    // end else if (name !== 'logo' && (this.global.isSmartphone || this.global.isTablet))
  }
  // end actionMenu(name)

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
  // end activeMenuItem(name)

  startTransitionPageOut() {
    this.global.transitionPage = true;
    setTimeout(() => {
      this.global.logoTheme = 'dark';
      this.global.menuTheme = 'dark';
      this.global.socialTheme = 'dark';
      this.global.madebyTheme = 'dark';
    }, 100);
  }
  // end startTransitionPageOut()

  startTransitionPageIn() {
    this.global.transitionPage = false;
  }
  // end startTransitionPageIn()
}
