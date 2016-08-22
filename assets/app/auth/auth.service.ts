import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService{
    constructor(private _http: Http){}
    
    manageOpen = false;
    
    toggleManage(){
        this.manageOpen = !this.manageOpen;
    }
    
    verify(pass: string){
        let body = JSON.stringify({pass: pass});
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        localStorage.clear();
        return this._http.post('https://chan401-nuclearcoconut.c9users.io/signin', body, options)
            .map(this.extractData)
            .catch(error => Observable.throw(error));
    }
    
    private extractData(response: Response) {
        let data = response.json().obj;
        return data || { };
    }
}