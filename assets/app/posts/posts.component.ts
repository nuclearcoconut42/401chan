import {Component} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {PostListComponent} from './post-list.component';
import {PostInputComponent} from './post-input.component';
import {PostService} from './post.service';

@Component({
    selector: 'posts',
    template: `
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <post-input>
                    Loading form...
                </post-input>
            </section>
        </div>
        <hr>
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <post-list [postId]="getAncestorId()">
                    Loading posts...
                </post-list>
                <button (click)="getAncestorId()" class="btn btn-primary">Update</button>
            </section>
        </div>
    `,
    directives: [PostListComponent, PostInputComponent],
    providers: [CookieService]
})
export class PostsComponent{
    constructor(private _cookieService:CookieService, private _postService: PostService){}
    getAncestorId(){
        return this._cookieService.get('ancestorId');
    }
    removeCookie(key: string){
        var value = this._cookieService.get(key);
        this._cookieService.remove(key);
        return value;
    }
}
