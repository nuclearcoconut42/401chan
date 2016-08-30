///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ROUTER_PROVIDERS} from "@angular/router";
import {provide} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {CookieService} from "angular2-cookie/core";

import {AppComponent} from "./app.component";
import {PostService} from "./posts/post.service";
import {AuthService} from "./auth/auth.service";

bootstrap(AppComponent, [PostService, AuthService, CookieService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);
