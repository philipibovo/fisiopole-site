export interface IInstructorSocialModel {
  name?: string;
  icon?: string;
  url?: string;
}

export interface IInstructorModalityModel {
  id?: number;
}

export interface IInstructorAboutTextModel {
  en?: string;
  pt?: string;
}

export interface IInstructorAboutModel {
  paragraphNumber?: number;
  text?: IInstructorAboutTextModel;
}

export interface IInstructorModel {
  id?: number;
  idName?: string;
  name?: string;
  surname?: string;
  about?: IInstructorAboutModel[];
  path?: string;
  photoPerfil?: string;
  modality?: IInstructorModalityModel[];
  social?: IInstructorSocialModel[];
  active?: boolean;
  sequence?: number;
}

export class InstructorModel implements IInstructorModel {
  constructor(
    public id?: number,
    public idName?: string,
    public name?: string,
    public surname?: string,
    public about?: IInstructorAboutModel[],
    public path?: string,
    public photoPerfil?: string,
    public modality?: IInstructorModalityModel[],
    public social?: IInstructorSocialModel[],
    public active?: boolean,
    public sequence?: number
  ) {
    this.id = id ? id : null;
    this.idName = idName ? idName : null;
    this.name = name ? name : null;
    this.surname = surname ? surname : null;
    this.about = about ? about : null;
    this.path = path ? path : null;
    this.photoPerfil = photoPerfil ? photoPerfil : null;
    this.modality = modality ? modality : null;
    this.social = social ? social : null;
    this.active = active ? active : null;
    this.sequence = sequence ? sequence : null;
  }
}
