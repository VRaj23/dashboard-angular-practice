import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginStateService } from './login-state.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private loginState: LoginStateService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot
        , state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{

        this.loginState.getLoginStatus().subscribe(
            (state) =>{
                if(state){
                    return true;
                }else{
                    this.router.navigate(['']);
                    return false;
                }

            }
        );
        return true;
    }
}