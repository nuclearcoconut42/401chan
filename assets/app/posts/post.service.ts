import {Post} from "./post";
import {PostInputComponent} from "./post-input.component";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Injectable} from "@angular/core";

@Injectable()
export class PostService{

    constructor(private _http: Http){}

    parentValue: number;

    setParent(id:number){
        this.parentValue = id;
    }

    threadIds: number[];

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
        this.clearThreads();
        return this._http.post('http://localhost:3000/api/', body, options)
            .map(this.extractData)
            .catch(error => Observable.throw(error.json()));
    }

    getPost(postId){
        return this._http.get('http://localhost:3000/api/' + postId)
            .map(this.extractData)
            .catch(error => Observable.throw(error.json()));
    }

    deletePost(postId){
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        this.clearThreads();
        return this._http.delete('http://localhost:3000/api/' + postId + token)
            .map(this.extractData)
            .catch(error => Observable.throw(error.json));
    }

    banUser(postId){
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/api/ban/' + postId + token, "")
            .map(this.extractData)
            .catch(error => Observable.throw(error.json));
    }

    reloadThreads(){
        this.clearThreads();
        this.getThreads();
    }

    clearThreads(){
        this.threadIds = [];
    }

    getThreads(){
        this.getPost(0).subscribe(
            data => {
                this.threadIds = data.children;
            }
        );
    }

    private extractData(response: Response) {
        let data = response.json().obj;
        return data || { };
    }
}
