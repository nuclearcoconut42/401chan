import {Component, OnInit} from '@angular/core';
import {PostListComponent} from './post-list.component';
import {PostInputComponent} from './post-input.component';
import {PostService} from './post.service';
import {Routes, Router, ActivatedRoute} from '@angular/router';

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
                <post-list [postId]="">
                    Loading posts...
                </post-list>
                <button (click)="" class="btn btn-primary">Update</button>
            </section>
        </div>
    `,
    directives: [PostListComponent, PostInputComponent]
})
export class PostsComponent implements OnInit{
    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _postService: PostService){}
    id: number;
    ngOnInit() {
  // (+) converts string 'id' to a number
      this.id = +this._activatedRoute.snapshot.params['id'];
    }
}
