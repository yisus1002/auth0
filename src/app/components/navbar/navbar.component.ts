import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              public auth: AuthService) {  }

              loginWithRedirect(){
                this.auth.loginWithRedirect();
              }

              logout(){
                this.auth.logout();
              }


  ngOnInit(): void {
  }

}
