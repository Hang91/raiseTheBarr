import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule} from '@agm/core'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequestComponent } from './request/request.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { FaqItemComponent } from './faq/faq-list/faq-item/faq-item.component';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { FaqStartComponent } from './faq/faq-start/faq-start.component';
import { PartnerComponent } from './home/partner/partner.component';
import { CompanyComponent } from './home/company/company.component';
import { ScreenComponent } from './home/screen/screen.component';
import { MapComponent } from './contact-us/map/map.component';
import { ServiceComponent } from './home/service/service.component';
import { BetaComponent } from './home/beta/beta.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequestComponent,
    ContactUsComponent,
    HomeComponent,
    FooterComponent,
    FaqComponent,
    AboutUsComponent,
    FaqListComponent,
    FaqItemComponent,
    FaqDetailComponent,
    FaqStartComponent,
    PartnerComponent,
    CompanyComponent,
    ScreenComponent,
    MapComponent,
    ServiceComponent,
    BetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXE7xcv4hjhyzq58-9KMLXykZhxrT0Xz8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
