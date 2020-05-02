import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  public actionMenu(location: string) {
    if (this.global.isSmartphone || this.global.isTablet) {
      this.showHideMenuMobile();

      this._router.navigate([`/${location}`]);

      return;
    }

    this.pageOut();

    setTimeout(() => {
      this._router.navigate([`/${location}`]);
    }, 150);
  }
  // end public actionMenu(location)

  public showHideMenuMobile() {
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
  }
  // end showHideMenuMobile()

  public activeMenuItem(name) {
    const items = document.getElementsByClassName('menu-item');

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }

    if (name) {
      document.getElementById(`menu-item-${name}`).classList.add('active');
    }
  }
  // end activeMenuItem(name)

  public pageIn() {
    setTimeout(() => {
      this.global.contentDisplay = 'show';
    }, 150);
  }
  // end public showContent()

  public pageOut() {
    this.global.contentDisplay = 'hide';
  }
  // end public pageOut()
}
