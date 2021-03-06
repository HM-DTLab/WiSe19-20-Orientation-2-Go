import { Component, OnInit, Input } from '@angular/core';
import { SettingsAuthenticationService } from '../settings-authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secured-settings',
  templateUrl: './secured-settings.component.html',
  styleUrls: ['./secured-settings.component.css']
})
export class SecuredSettingsComponent implements OnInit {

  @Input() newPassword : string;

  constructor(private router : Router,
              private route: ActivatedRoute) {

   }

   changePassword(): void {
    this.router.navigate([`../changePassword`], { relativeTo: this.route});
  }

  changeHomeAdress(): void {
    console.log(localStorage.getItem('housenumber'));
    console.log(localStorage.getItem('place'));
    console.log(localStorage.getItem('postcode'));
    console.log(localStorage.getItem('street'));
    this.router.navigate([`../changeHomeAdress`], { relativeTo: this.route});
  }

  changeRadius(): void {
    console.log(localStorage.getItem('radius'));
    this.router.navigate([`../radius`], { relativeTo: this.route});
  }

  changeTimer(): void {
    this.router.navigate([`../timer`], { relativeTo: this.route});
  }

  changeCheckInterval(): void {
    this.router.navigate([`../checkInterval`], { relativeTo: this.route});
  }

  changeNavigation(): void {
    this.router.navigate([`../navigation`], { relativeTo: this.route});
  }

  changeContacts(): void {
    console.log(JSON.parse(localStorage.getItem("contacts")));
    this.router.navigate([`../contacts`], { relativeTo: this.route});
  }

  backToHome(): void {
    this.router.navigate([`../home`], { relativeTo: this.route});
  }

  ngOnInit() {
    
  
  }

}
