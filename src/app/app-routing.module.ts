import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'en-us', component: HomeComponent },
  { path: 'pt-br', component: HomeComponent },

  { path: 'en-us/studio', component: StudioComponent },
  { path: 'pt-br/studio', component: StudioComponent },

  { path: 'en-us/modalities', component: ModalitiesComponent },
  { path: 'pt-br/modalities', component: ModalitiesComponent },
  { path: 'en-us/modalities/circus', component: CircusComponent },
  { path: 'pt-br/modalities/circus', component: CircusComponent },
  { path: 'en-us/modalities/pilates', component: PilatesComponent },
  { path: 'pt-br/modalities/pilates', component: PilatesComponent },
  {
    path: 'en-us/modalities/pole-choreographic',
    component: PoleChoreographicComponent
  },
  {
    path: 'pt-br/modalities/pole-choreographic',
    component: PoleChoreographicComponent
  },
  { path: 'en-us/modalities/pole-dance', component: PoleDanceComponent },
  { path: 'pt-br/modalities/pole-dance', component: PoleDanceComponent },
  { path: 'en-us/modalities/power-woman', component: PowerWomanComponent },
  { path: 'pt-br/modalities/power-woman', component: PowerWomanComponent },
  {
    path: 'en-us/modalities/functional-training',
    component: FunctionalTrainingComponent
  },
  {
    path: 'pt-br/modalities/functional-training',
    component: FunctionalTrainingComponent
  },
  { path: 'en-us/modalities/stiletto', component: StilettoComponent },
  { path: 'pt-br/modalities/stiletto', component: StilettoComponent },

  { path: 'en-us/team', component: TeamComponent },
  { path: 'pt-br/team', component: TeamComponent },

  { path: 'en-us/events', component: EventsComponent },
  { path: 'pt-br/events', component: EventsComponent },

  { path: 'en-us/contact', component: ContactComponent },
  { path: 'pt-br/contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
