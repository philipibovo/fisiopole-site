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

//Script
import { Global } from './scripts/global';
import { ScriptsGeneral } from './scripts/scripts-general';

//Pages
import { TemplateComponent } from './template/template.component';
//Pages > Home
import { HomeComponent } from './pages/home/home.component';
//Pages > Studio
import { StudioComponent } from './pages/studio/studio.component';
//Pages > Modalities
import { ModalitiesComponent } from './pages/modalities/modalities.component';
import { CircusComponent } from './pages/modalities/circus/circus.component';
import { FunctionalTrainingComponent } from './pages/modalities/functional-training/functional-training.component';
import { PilatesComponent } from './pages/modalities/pilates/pilates.component';
import { PoleChoreographicComponent } from './pages/modalities/pole-choreographic/pole-choreographic.component';
import { PoleDanceComponent } from './pages/modalities/pole-dance/pole-dance.component';
import { PowerWomanComponent } from './pages/modalities/power-woman/power-woman.component';
import { StilettoComponent } from './pages/modalities/stiletto/stiletto.component';
//Pages > Team
import { TeamComponent } from './pages/team/team.component';
//Pages > Events
import { EventsComponent } from './pages/events/events.component';
//Pages > Contact
import { ContactComponent } from './pages/contact/contact.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent,
    StudioComponent,
    ModalitiesComponent,
    CircusComponent,
    FunctionalTrainingComponent,
    PilatesComponent,
    PoleChoreographicComponent,
    PoleDanceComponent,
    PowerWomanComponent,
    StilettoComponent,
    EventsComponent,
    ContactComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    Global,
    ScriptsGeneral
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
