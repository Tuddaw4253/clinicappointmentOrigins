import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewappointmentComponent } from './clinic/newappointment/newappointment.component';
import { HistoryappointmentComponent } from './clinic/historyappointment/historyappointment.component';
import { ChoosedoctorComponent } from './clinic/choosedoctor/choosedoctor.component';
import { OrganizComponent } from './clinic/organiz/organiz.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewappointmentComponent,
    HistoryappointmentComponent,
    ChoosedoctorComponent,
    OrganizComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
