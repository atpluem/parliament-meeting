import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';
import { CouncilMemberComponent } from './components/form/council-member/council-member.component';
import { ConferenceComponent } from './components/form/conference/conference.component';
import { PartyComponent } from './components/form/party/party.component';
import { UserviewComponent } from './components/userview/userview.component';
// Analysis report
import { ChartModule } from 'angular2-chartjs';
import { AgeintervalComponent } from './components/analysis/ageinterval/ageinterval.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CouncilMemberComponent,
    ConferenceComponent,
    PartyComponent,
    UserviewComponent,
    AgeintervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
