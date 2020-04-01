import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SkybarComponent } from './skybar/skybar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { PageContentComponent } from './page-content/page-content.component';

import { HomeComponent } from './pages/home/home.component';
import { RpiaAboutComponent } from './pages/rpia-about/rpia-about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { OfficersComponent } from './pages/officers/officers.component';
import { AmbulanceAboutComponent } from './pages/ambulance-about/ambulance-about.component';
import { Fr59AboutComponent } from './pages/fr59-about/fr59-about.component';
import { MediaComponent } from './pages/media/media.component';
import { JoinComponent } from './pages/join/join.component';
import { NewMembersTrainingComponent } from './pages/new-members-training/new-members-training.component';
import { CprCertificationComponent } from './pages/cpr-certification/cpr-certification.component';
import { ServiceListComponent } from './pages/request-coverage/services-list.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    SkybarComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    PageContentComponent,

    HomeComponent,
    RpiaAboutComponent,
    FaqComponent,
    OfficersComponent,
    AmbulanceAboutComponent,
    Fr59AboutComponent,
    MediaComponent,
    JoinComponent,
    NewMembersTrainingComponent,
    CprCertificationComponent,
    //ContactUsComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
