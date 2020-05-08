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
import { AttendantRateComponent } from './components/analysis/attendant-rate/attendant-rate.component';
import { PartymembercountComponent } from './components/analysis/partymembercount/partymembercount.component';
import { CostperbuildingComponent } from './components/analysis/costperbuilding/costperbuilding.component';
import { ConferenceDurationComponent } from './components/analysis/conference-duration/conference-duration.component';
import { TopargrankComponent } from './components/analysis/topargrank/topargrank.component';
import { ConferenceViewComponent } from './components/view/conference-view/conference-view.component';
import { CouncilViewComponent } from './components/view/council-view/council-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CouncilMemberComponent,
    ConferenceComponent,
    PartyComponent,
    UserviewComponent,
    AgeintervalComponent,
    AttendantRateComponent,
    PartymembercountComponent,
    CostperbuildingComponent,
    ConferenceDurationComponent,
    TopargrankComponent,
    ConferenceViewComponent,
    CouncilViewComponent
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
