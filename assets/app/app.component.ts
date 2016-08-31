import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {AuthComponent} from './auth/auth.component'

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <auth></auth>
            <hr>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [AuthComponent, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '', component: PostsComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'posts/:id', component: PostsComponent}
])
export class AppComponent{
}
