import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RpiaAboutComponent } from './pages/rpia-about/rpia-about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { OfficersComponent } from './pages/officers/officers.component';
import { AmbulanceAboutComponent } from './pages/ambulance-about/ambulance-about.component';
import { Fr59AboutComponent } from './pages/fr59-about/fr59-about.component';
import { MediaComponent } from './pages/media/media.component';
import { JoinComponent } from './pages/join/join.component';
import { NewMembersTrainingComponent } from './pages/new-members-training/new-members-training.component';
import { ServiceListComponent } from './pages/request-coverage/services-list.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rpia-about', component: RpiaAboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'officers', component: OfficersComponent },
  { path: 'ambulance-about', component: AmbulanceAboutComponent },
  { path: 'fr59-about', component: Fr59AboutComponent },
  { path: 'media', component: MediaComponent },
  { path: 'join', component: JoinComponent },
  { path: 'new-members-training', component: NewMembersTrainingComponent },
  { path: 'request-coverage', component: ServiceListComponent},
  //{ path: 'contact-us', component: ContactUsComponent},

  // redirects:
  { path: '5939-about', redirectTo: '/ambulance-about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
