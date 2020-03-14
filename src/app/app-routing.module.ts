import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'
import { StudioComponent } from './pages/studio/studio.component'
import { ModalitiesComponent } from './pages/modalities/modalities.component'
import { TeamComponent } from './pages/team/team.component'
import { EventsComponent } from './pages/events/events.component'
import { ContactComponent } from './pages/contact/contact.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estudio', component: StudioComponent },
  { path: 'modalidades', component: ModalitiesComponent },
  { path: 'equipe', component: TeamComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'contato', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
