import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../models/json-response.model';
import { DashboardData } from '../models/dashboard-data.model';
import { LoginRequest } from '../models/login-request.model';
import { StringPojo } from '../models/string-pojo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  apiBaseURL: string = "https://api.vraj23.com";
  adminAPI: string = "/auth/admin";
  ApiVersion: string = "/v1";
  dashboardAPI: string = "/dashboard";
  userLoginAPI: string = "/login";

  constructor(private http: HttpClient) { }

  private getAuthToken(): {} {
    var token = sessionStorage.getItem('token');
    if(token == null)
      token == ""
    return {headers: new HttpHeaders()
      .append("Authorization",token)};
  }

  getDashboardData(): Observable<JsonResponse<Array<DashboardData>>>{
    return this.http.get<JsonResponse<Array<DashboardData>>>(
      this.apiBaseURL + this.adminAPI + this.ApiVersion + this.dashboardAPI, this.getAuthToken());
  }

  postLogin(request: LoginRequest): Observable<JsonResponse<StringPojo>>{
    return this.http.post<JsonResponse<StringPojo>>(this.apiBaseURL + this.userLoginAPI,request);
  }
}
