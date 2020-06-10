import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Scripts
import { Global } from './scripts/global';

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
  { path: 'en', component: HomeComponent },
  { path: 'pt', component: HomeComponent },

  { path: 'en/studio', component: StudioComponent },
  { path: 'pt/studio', component: StudioComponent },

  { path: 'en/modalities', component: ModalitiesComponent },
  { path: 'pt/modalities', component: ModalitiesComponent },
  { path: 'en/modalities/circus', component: ModalityInfoComponent },
  { path: 'pt/modalities/circus', component: ModalityInfoComponent },
  { path: 'en/modalities/pilates', component: ModalityInfoComponent },
  { path: 'pt/modalities/pilates', component: ModalityInfoComponent },
  {
    path: 'en/modalities/pole-choreographic',
    component: ModalityInfoComponent
  },
  {
    path: 'pt/modalities/pole-choreographic',
    component: ModalityInfoComponent
  },
  { path: 'en/modalities/pole-dance', component: ModalityInfoComponent },
  { path: 'pt/modalities/pole-dance', component: ModalityInfoComponent },
  { path: 'en/modalities/power-woman', component: ModalityInfoComponent },
  { path: 'pt/modalities/power-woman', component: ModalityInfoComponent },
  {
    path: 'en/modalities/functional-training',
    component: ModalityInfoComponent
  },
  {
    path: 'pt/modalities/functional-training',
    component: ModalityInfoComponent
  },
  { path: 'en/modalities/stiletto', component: ModalityInfoComponent },
  { path: 'pt/modalities/stiletto', component: ModalityInfoComponent },

  { path: 'en/team', component: TeamComponent },
  { path: 'pt/team', component: TeamComponent },
  { path: 'en/team/marcia-martins', component: PersonalInfoComponent },
  { path: 'pt/team/marcia-martins', component: PersonalInfoComponent },
  { path: 'en/team/mayra-martins', component: PersonalInfoComponent },
  { path: 'pt/team/mayra-martins', component: PersonalInfoComponent },
  { path: 'en/team/patricia-perez', component: PersonalInfoComponent },
  { path: 'pt/team/patricia-perez', component: PersonalInfoComponent },
  { path: 'en/team/fernanda-agria', component: PersonalInfoComponent },
  { path: 'pt/team/fernanda-agria', component: PersonalInfoComponent },
  { path: 'en/team/lucas-loreto', component: PersonalInfoComponent },
  { path: 'pt/team/lucas-loreto', component: PersonalInfoComponent },
  { path: 'en/team/sergio-biller', component: PersonalInfoComponent },
  { path: 'pt/team/sergio-biller', component: PersonalInfoComponent },

  { path: 'en/contact', component: ContactComponent },
  { path: 'pt/contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
