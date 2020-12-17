import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'studio', component: StudioComponent },

  { path: 'classes', component: ModalitiesComponent },
  { path: 'classes/circus', component: ModalityInfoComponent },
  { path: 'classes/pilates', component: ModalityInfoComponent },
  {
    path: 'classes/pole-choreography',
    component: ModalityInfoComponent
  },
  { path: 'classes/pole-fitness-dance', component: ModalityInfoComponent },
  { path: 'classes/power-woman', component: ModalityInfoComponent },
  {
    path: 'classes/functional-training',
    component: ModalityInfoComponent
  },
  { path: 'classes/stiletto', component: ModalityInfoComponent },
  { path: 'classes/flex', component: ModalityInfoComponent },

  { path: 'team', component: TeamComponent },
  { path: 'team/marcia-martins', component: PersonalInfoComponent },
  { path: 'team/mayra-martins', component: PersonalInfoComponent },
  { path: 'team/patricia-perez', component: PersonalInfoComponent },
  { path: 'team/fernanda-agria', component: PersonalInfoComponent },
  { path: 'team/lucas-loreto', component: PersonalInfoComponent },
  { path: 'team/sergio-biller', component: PersonalInfoComponent },
  { path: 'team/raissa-venuto', component: PersonalInfoComponent },

  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
