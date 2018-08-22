import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../services/api-client.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginRequest } from '../../models/login-request.model';
import { JsonResponse } from '../../models/json-response.model';
import { LoginStateService } from '../../services/login-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService: ApiClientService, 
    private router: Router, 
    private loginStateService: LoginStateService) { }

  loginFailed: boolean = false;
  loggingIn: boolean = false;
  notAdmin: boolean = false;

  ngOnInit() {
  }

  resetLoginFailed(){
    this.loginFailed = false;
    this.notAdmin = false;
}

login(formData: NgForm){
  console.log('Trying to login');
  this.loggingIn = true;
  var loginRequest: LoginRequest = new LoginRequest();
  loginRequest.email = formData.value.username;
  loginRequest.password = formData.value.password;
  
  this.apiService.postLogin(loginRequest).subscribe(
    (json) => {
      this.loggingIn = false;
      if(json.status == 200 && json.message == "ROLE_ADMIN"){
        console.log("Login Successful");
        this.loginStateService.onLogin(json.response.value);
        this.loginFailed = false;
        this.router.navigate(['/dashboard']);
      }else if(json.response && json.message != "ROLE_ADMIN"){
        this.notAdmin = true;
      }
      else{
        console.log(json.status+":"+json.message);
        this.loginFailed = true;
      }
    }
  );
  }

}
