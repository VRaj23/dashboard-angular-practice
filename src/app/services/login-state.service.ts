import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs'

@Injectable()
export class LoginStateService{

    private loggedIn = new BehaviorSubject<boolean>(false);

    getLoginStatus(): Observable<boolean>{
        return this.loggedIn;
    }

    onLogin(token: string){
        this.loggedIn.next(true);
        sessionStorage.setItem('token', token);    
    }

}