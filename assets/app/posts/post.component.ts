import {Component, Input} from "@angular/core";
import {Post} from "./post";
import {PostService} from "./post.service";

@Component({
    selector: 'post',
    template: `
            <article class="panel panel-default">
                <header class="panel-header">
                    <div class="info">
                        #<a href="{{post._id}}">{{ post._id }}</a> {{ post.timestamp }}
                    </div>
                </header>
                <div class="panel-body">
                    <div class="post">{{ post.content }}</div>
                    <br>
                    <div *ngIf="banned" class="ban"><strong>USER WAS BANNED FOR THIS POST</strong></div>
                </div>
                <footer class="panel-footer">
                    <div class="links">
                        <a (click)="onReply()">Reply</a>
                        <a *ngIf="_postService.isLoggedIn()" (click)="onDelete()">Delete</a>
                        <a *ngIf="_postService.isLoggedIn() && !banned" (click)="onBan()">Ban</a>
                        <a *ngIf="_postService.isLoggedIn() && banned" (click)="onBan()">Unban</a>
                    </div>
                </footer>
            </article>

    `,
    styles: [`
        .info{
            font-size: 12px;
            width: 80%;
        }
        .links{
            font-size: 12px;
            width: 20%;
        }
        .ban{
            color: red;
        }
    `]
})

export class PostComponent{
    @Input() post:Post;

    constructor(private _postService:PostService){}

    onDelete(){
        this._postService.deletePost(this.post._id).subscribe(
            data => {
                console.log(data);
            }
        );
    }

    onReply(){
        this._postService.setParent(this.post._id);
    }

    onBan(){
        this._postService.banUser(this.post._id).subscribe(
            data => {
                console.log(data);
            }
        );
    }
}
