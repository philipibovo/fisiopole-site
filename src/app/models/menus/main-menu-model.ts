export interface IMainMenuLabelModel {
  en?: string;
  pt?: string;
}

export interface IMainMenuModel {
  id?: number;
  idName?: string;
  label?: IMainMenuLabelModel;
}

export class MainMenuModel implements IMainMenuModel {
  constructor(
    public id?: number,
    public idName?: string,
    public label?: IMainMenuLabelModel
  ) {
    this.id = id ? id : null;
    this.idName = idName ? idName : null;
    this.label = label ? label : null;
  }
}
