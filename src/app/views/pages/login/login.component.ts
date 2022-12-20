import { Component } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _auth: AuthGuardService, private _router: Router) {
    if (this._auth.loggedIn) {
      this._router.navigate(['dashboard']);
    }
  }

  login(){
    localStorage.setItem('token', 'x')
    this._router.navigate(['dashboard']);
  }
}
