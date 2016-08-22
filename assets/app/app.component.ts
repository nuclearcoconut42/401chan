import {Component} from '@angular/core';
import {PostsComponent} from './posts/posts.component';
import {AuthComponent} from './auth/auth.component'

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <auth></auth>
            <hr>
            <posts></posts>
        </div>
    `,
    directives: [PostsComponent, AuthComponent]
})
export class AppComponent{

}
