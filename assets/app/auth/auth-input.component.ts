import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {PostService} from "../posts/post.service";

@Component({
    selector: "auth-input",
    template: `
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <form *ngIf="!_postService.isLoggedIn()" (ngSubmit)="onSubmit(form.value)" #form="ngForm">
                    <div class="form-group">
                        <input ngControl="password" type="password" class="form-control" id="password" #password placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-success">Login</button>
                </form>
                <button *ngIf="_postService.isLoggedIn()" (click)="onLogout()" class="btn btn-danger">Logout</button>
                <button (click)="onCancel()" class="btn btn-danger">Cancel</button>
            </section>
        </div>
    `
})
export class AuthInputComponent{
    constructor(private _authService:AuthService, private _postService:PostService){}
    
    onLogout(){
        localStorage.clear();
    }
    
    onSubmit(form:any){
        this._authService.verify(form.password)
            .subscribe(
                data => {
                    localStorage.setItem('token', data);
                },
                error => console.error(error)
            );
        this.onCancel();
    }
    
    onCancel(){
        this._authService.toggleManage();
    }
}
