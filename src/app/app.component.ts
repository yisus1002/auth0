import { AuthService } from '@auth0/auth0-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authapp';

  constructor(public auth: AuthService){
    // this.auth.

  }
}
