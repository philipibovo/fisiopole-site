export class ScriptsGeneral {
  public logoTheme: string;
  public menuTheme: string;
  public iconMenuTheme: string;
  public socialTheme: string;
  public madebyTheme: string;

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
}
