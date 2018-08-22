import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _router: Router){
    var token = sessionStorage.getItem('token');
    if(token != null)
      this._router.navigate(['/dashboard']);
    else
      this._router.navigate(['/']);
  }
}
