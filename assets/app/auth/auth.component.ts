import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {AuthInputComponent} from "./auth-input.component";

@Component({
    selector: "auth",
    template: `
        <a *ngIf="!_authService.manageOpen" (click)="onManage()">Manage</a>
        <auth-input *ngIf="_authService.manageOpen"></auth-input>
    `,
    directives: [AuthInputComponent]
})
export class AuthComponent{
    constructor(private _authService: AuthService){}
    
    onManage(){
        this._authService.toggleManage();
    }
}