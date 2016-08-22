import {Component} from "@angular/core";
import {Post} from "./post";
import {PostService} from "./post.service";

@Component({
    selector: "post-input",
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
                <div class="form-group">
                    <input ngControl="content" type="text" class="form-control" id="content" #content placeholder="Content of post">
                    <input ngControl="parent" type="number" class="form-control" id="parent" #parent  placeholder="ID of parent post" [(ngModel)]="_postService.parentValue">
                </div>
                <button type="submit" class="btn btn-primary">Post</button>
            </form>
        </section>
    `
})

export class PostInputComponent{
    constructor(private _postService:PostService){}
    
    post: Post;
    
    onSubmit(form:any){
        this.post = new Post(form.content, form.parent || 0, [], null);
        this._postService.addPost(this.post).subscribe(
            data => {
                this._postService.reloadThreads();
            }
        );
    }
}