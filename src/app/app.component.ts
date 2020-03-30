import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parliament-meeting';

  constructor() {

  }
}
