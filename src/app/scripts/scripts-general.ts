export class ScriptsGeneral {
  public logoTheme: string;
  public menuTheme: string;
  public socialTheme: string;
  public madebyTheme: string;

  isSmartphone() {
    if (window.innerWidth <= 600) {
      return true;
    } else {
      return false;
    }
  }

  isTablet() {
    if (window.innerWidth > 600 && window.innerWidth <= 959) {
      return true;
    } else {
      return false;
    }
  }
}
