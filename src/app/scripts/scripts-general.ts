import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//Scripts
import { Global } from './global';

@Injectable()
export class ScriptsGeneral {
  constructor(private _router: Router, public global: Global) {}

  start = () => {
    // Verify and set language
    if (window.localStorage.getItem('lang')) {
      this.setLang(window.localStorage.getItem('lang'));
    } else {
      this.setLang('pt');
    }
    // end else -> if (window.localStorage.getItem('theme'))
  };
  // end start = ()

  setLang = (lang: string) => {
    this.global.lang = lang;
    window.localStorage.setItem('lang', lang);
  };
  // end setLang = (lang: string)

  verifyDevice = () => {
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
  };
  // end verifyDevice = ()

  verifyOrientation = () => {
    if (window.innerWidth > window.innerHeight) {
      this.global.isLandscape = true;
      this.global.isPortrait = false;
    } else {
      this.global.isLandscape = false;
      this.global.isPortrait = true;
    }
  };
  // end verifyOrientation = ()

  actionMenu = (location: string, showHideMenu: boolean) => {
    if (window.location.pathname === `${location}`) {
      return;
    }

    if (this.global.isSmartphone || this.global.isTablet) {
      if (showHideMenu) {
        this.showHideMenuMobile();
      }

      this._router.navigate([`${location}`]);

      return;
    }

    //Desktop
    this.redirectAnimatePageOut(location);
  };
  // end actionMenu = (location: string, showHideMenu: boolean)

  redirectAnimatePageOut = (location: string) => {
    this.pageOut();

    setTimeout(() => {
      this._router.navigate([`${location}`]);
    }, 150);
  };
  // end redirectAnimatePageOut = (location: string)

  showHideMenuMobile = () => {
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

      document.getElementById('language-choose').classList.toggle('hide');
    }, 150);
  };
  // end showHideMenuMobile = ()

  activeMenuItem = (name: string) => {
    const items = document.getElementsByClassName('menu-item');

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }

    if (name) {
      document.getElementById(`menu-item-${name}`).classList.add('active');
    }
  };
  // end activeMenuItem = (name: string)

  setPageTitle = (title: string) => {
    document.getElementById('page-title').classList.remove('show');
    setTimeout(() => {
      this.global.pageTitle = title;
      document.getElementById('page-title').classList.add('show');
    }, 300);
  };
  // end setPageTitle = (title: string)

  pageIn = () => {
    setTimeout(() => {
      this.global.contentDisplay = 'show';
    }, 150);
  };
  // end pageIn = ()

  pageOut = () => {
    this.global.contentDisplay = 'hide';
  };
  // end pageOut = ()

  showHideTemplateMobileWhenNavona = navonaIsActive => {
    this.global.navonaActive = navonaIsActive;
  };
  // end showHideTemplateMobileWhenNavona = (navonaIsActive)
}
