import {Post} from "./post";
import {PostInputComponent} from "./post-input.component";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Injectable} from "@angular/core";
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class PostService{
    constructor(private _http: Http, private _cookieService:CookieService){}
    ancestorId: String;
    parentValue: number;

    setParent(id:number){
        this.parentValue = id;
    }

    isLoggedIn(){
        if(localStorage.getItem('token')){
            return true;
        }
        return false;
    }

    addPost(post:Post){
        let body = JSON.stringify(post);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.post('http://localhost:3000/api/', body, options)
            .map(this.extractData)
            .catch(error => Observable.throw(error.json()));
    }

    getPost(postId){
        let headers = new Headers({'Content-Type':'application/json'});
        return this._http.get('http://localhost:3000/api/' + postId)
            .map(this.extractData)
            .catch(error => Observable.throw(error.json()));
    }

    deletePost(postId){
        let headers = new Headers({'Content-Type':'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.delete('http://localhost:3000/api/' + postId + token)
            .map(this.extractData)
            .catch(error => Observable.throw(error.json));
    }

    banUser(postId){
        let headers = new Headers({'Content-Type':'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/api/ban/' + postId + token, "")
            .map(this.extractData)
            .catch(error => Observable.throw(error.json));
    }

    resetAncestorId(){
        this.ancestorId = "";
    }
    getAncestorId(){
        this.ancestorId = this._cookieService.get("ancestorId");
    }
    reloadAncestorId(){
        this.resetAncestorId();
        this.getAncestorId();
    }
    removeCookie(key: string){
        var value = this._cookieService.get(key);
        this._cookieService.remove(key);
        return value;
    }

    private extractData(response: Response) {
        let data = response.json().obj;
        return data || { };
    }
}
