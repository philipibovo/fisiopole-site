export interface IModalityPhotoGalleryModel {
  sequence?: number;
  titleEN?: string;
  titlePT?: string;
  url?: string;
}

export interface IModalityAboutTextModel {
  en?: string;
  pt?: string;
}

export interface IModalityAboutModel {
  paragraphNumber?: number;
  text?: IModalityAboutTextModel;
}

export interface IModalityNameModel {
  en?: string;
  pt?: string;
}

export interface IModalityModel {
  id?: number;
  idName?: string;
  name?: IModalityNameModel;
  doubleTitle?: boolean;
  about?: IModalityAboutModel[];
  path?: string;
  photoGallery?: IModalityPhotoGalleryModel[];
}

export class ModalityModel {
  constructor(
    public id?: number,
    public idName?: string,
    public name?: IModalityNameModel,
    public doubleTitle?: boolean,
    public about?: IModalityAboutModel[],
    public path?: string,
    public photoGallery?: IModalityPhotoGalleryModel[]
  ) {
    this.id = id ? id : null;
    this.idName = idName ? idName : null;
    this.name = name ? name : null;
    this.doubleTitle = doubleTitle ? doubleTitle : null;
    this.about = about ? about : null;
    this.path = path ? path : null;
    this.photoGallery = photoGallery ? photoGallery : null;
  }
}
