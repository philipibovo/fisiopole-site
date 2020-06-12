import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

//Navona
import { Navona } from './scripts/navona';

//Script
import { Global } from './scripts/global';
import { ScriptsGeneral } from './scripts/scripts-general';

//Pages > Home
import { HomeComponent } from './pages/home/home.component';
//Pages > Studio
import { StudioComponent } from './pages/studio/studio.component';
//Pages > Modalities
import { ModalitiesComponent } from './pages/modalities/modalities.component';
import { ModalityInfoComponent } from './pages/modalities/modality-info/modality-info.component';
//Pages > Team
import { TeamComponent } from './pages/team/team.component';
import { PersonalInfoComponent } from './pages/team/personal-info/personal-info.component';
//Pages > Contact
import { ContactComponent } from './pages/contact/contact.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudioComponent,
    ModalitiesComponent,
    ModalityInfoComponent,
    ContactComponent,
    TeamComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    Navona,
    Global,
    ScriptsGeneral
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
