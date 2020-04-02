import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  public isSmartphone: boolean;
  public isTablet: boolean;
  public isDesktop: boolean;
  public isPortrait: boolean;
  public isLandscape: boolean;
  public transitionPage = false;
  public logoTheme: string;
  public menuTheme: string;
  public iconMenuTheme: string;
  public socialTheme: string;
  public madebyTheme: string;
}
