import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { MyDashboradItemComponent } from './components/my-dashboard/my-dashborad-item/my-dashborad-item.component';

import { ApiClientService } from './services/api-client.service';
import { LoginComponent } from './components/login/login.component';
import { LoginStateService } from './services/login-state.service';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: LoginComponent}
  ,{path: 'dashboard', canActivate:[AuthGuard], component: MyDashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    MyDashboradItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{useHash: true})
  ],
  providers: [ApiClientService, LoginStateService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private loginStateService: LoginStateService){
    var token = sessionStorage.getItem('token');
    if(token != null)
      this.loginStateService.onLogin(token);
  }
 }
