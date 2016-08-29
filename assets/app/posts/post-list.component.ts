import {Component, OnInit, Input} from "@angular/core";
import {Post} from "./post";
import {PostComponent} from "./post.component";
import {PostService} from "./post.service";

@Component({
    selector: 'post-list',
    template: `
        <div *ngIf="parent" class="posts">
            <post [post]="parent">Loading post...</post>
            <post-list *ngFor="let postId of parent.children" [postId]="postId">
                 Loading replies...
            </post-list>
        </div>
    `,
    directives: [PostComponent, PostListComponent],
    styles: [`
        .posts{
            border-left: 1px solid gray;
            padding: 0px 0px 0px 10px;
        }
    `]
})

export class PostListComponent{
    @Input() postId:number;

    constructor(private _postService: PostService){}
    parent: Post;
    ngOnInit(){
        this._postService.getPost(this.postId).subscribe(
            data => {
                this.parent = new Post(data.content, data.parent, data.children, data.timestamp, data._id);
            }
        );
    }
}
