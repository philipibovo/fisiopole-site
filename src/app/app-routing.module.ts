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
  { path: 'estudio', component: StudioComponent },
  { path: 'modalidades', component: ModalitiesComponent },
  { path: 'modalidades/circo', component: CircusComponent },
  { path: 'modalidades/pilates', component: PilatesComponent },
  {
    path: 'modalidades/pole-coreografico',
    component: PoleChoreographicComponent
  },
  { path: 'modalidades/pole-dance', component: PoleDanceComponent },
  { path: 'modalidades/power-woman', component: PowerWomanComponent },
  {
    path: 'modalidades/treinamento-funcional',
    component: FunctionalTrainingComponent
  },
  { path: 'modalidades/stiletto', component: StilettoComponent },
  { path: 'equipe', component: TeamComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'contato', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
