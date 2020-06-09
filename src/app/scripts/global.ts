import { Injectable } from '@angular/core';

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
  public lang: string = 'en-us';
  // public lang: string = 'pt-br';
  public pageTitle: string;
}
