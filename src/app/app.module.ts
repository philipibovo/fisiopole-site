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
import { ScriptsGeneral } from './scripts/scripts-general';

//Pages
import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { StudioComponent } from './pages/studio/studio.component';
import { ModalitiesComponent } from './pages/modalities/modalities.component';
import { TeamComponent } from './pages/team/team.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent,
    StudioComponent,
    ModalitiesComponent,
    TeamComponent,
    EventsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, ScriptsGeneral],
  bootstrap: [AppComponent]
})
export class AppModule {}
