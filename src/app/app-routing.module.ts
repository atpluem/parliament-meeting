import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './services/authguard.guard';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserviewComponent } from './components/userview/userview.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  // {path: "**", component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "user", component: UserviewComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
