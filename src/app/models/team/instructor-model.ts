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
  pageUrl?: string;
  photo150pxUlr?: string;
  modality?: IInstructorModalityModel[];
  social?: IInstructorSocialModel[];
}

export class InstructorModel implements IInstructorModel {
  constructor(
    public id?: number,
    public idName?: string,
    public name?: string,
    public surname?: string,
    public about?: IInstructorAboutModel[],
    public pageUrl?: string,
    public photo150pxUlr?: string,
    public modality?: IInstructorModalityModel[],
    public social?: IInstructorSocialModel[]
  ) {
    this.id = id ? id : null;
    this.idName = idName ? idName : null;
    this.name = name ? name : null;
    this.surname = surname ? surname : null;
    this.about = about ? about : null;
    this.pageUrl = pageUrl ? pageUrl : null;
    this.photo150pxUlr = photo150pxUlr ? photo150pxUlr : null;
    this.modality = modality ? modality : null;
    this.social = social ? social : null;
  }
}
