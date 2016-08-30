import {Component, OnInit} from '@angular/core';
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
                <post-list [postId]="ancestorId">
                    Loading posts...
                </post-list>
                <button (click)="onUpdate()" class="btn btn-primary">Update</button>
            </section>
        </div>
    `,
    directives: [PostListComponent, PostInputComponent]
})
export class PostsComponent implements OnInit{
    constructor(private _postService: PostService){}
    ancestorId: String;
    onUpdate(){
        this._postService.resetAncestorId();
        this.ancestorId = this.getAncestorId();
        this._postService.getAncestorId();
        this.ancestorId = this.getAncestorId();
    }
    getAncestorId(){
        return this._postService.ancestorId;
    }
    ngOnInit(){
        this._postService.getAncestorId();
        this.getAncestorId();
    }
}
