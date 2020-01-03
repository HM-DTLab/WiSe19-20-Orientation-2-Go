import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SettingsAuthenticationService } from '../settings-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ini: boolean;

  constructor(private router: Router,
              private settingsAuth: SettingsAuthenticationService) { }

  settingsClick() {
    console.log(localStorage.getItem('password'));
    if(this.ini) {
      let route = this.router.config.find(r => r.path === 'trueSettings');
      this.router.navigateByUrl(`${'trueSettings'}`);
    } else {
      let route = this.router.config.find(r => r.path === 'settings');
      this.router.navigateByUrl(`${'settings'}`);
    }
    
  }

  bringMeHome() {
    console.log("Bring_Me_Home-Button pressed!");
    let route = this.router.config.find(r => r.path === 'mapnavigation');
    window.location.href = 'http://maps.google.com/maps?saddr=brighton&daddr=timbuktu';
//    this.router.navigateByUrl(`${'mapnavigation'}`);
  }

  calendarClick() {
    console.log("Calendar-Button pressed!");
    let route = this.router.config.find(r => r.path === 'calendar');
    this.router.navigateByUrl(`${'calendar'}`);
  }

  ngOnInit() {
    this.settingsAuth.isInitial().subscribe(t => this.ini = t);
  }

}
