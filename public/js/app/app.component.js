"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var posts_component_1 = require('./posts/posts.component');
var auth_component_1 = require('./auth/auth.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n        <div class=\"container\">\n            <auth></auth>\n            <hr>\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [auth_component_1.AuthComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '', component: posts_component_1.PostsComponent },
            { path: 'posts', component: posts_component_1.PostsComponent },
            { path: 'posts/:id', component: posts_component_1.PostsComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRCxnQ0FBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCwrQkFBNEIsdUJBRTVCLENBQUMsQ0FGa0Q7QUFrQm5EO0lBQUE7SUFDQSxDQUFDO0lBakJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLHFKQU1UO1lBQ0QsVUFBVSxFQUFFLENBQUMsOEJBQWEsRUFBRSwwQkFBaUIsQ0FBQztTQUNqRCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7U0FDakQsQ0FBQzs7b0JBQUE7SUFFRixtQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksb0JBQVksZUFDeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtQb3N0c0NvbXBvbmVudH0gZnJvbSAnLi9wb3N0cy9wb3N0cy5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYXV0aC5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YXV0aD48L2F1dGg+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0F1dGhDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZXMoW1xuICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBQb3N0c0NvbXBvbmVudH0sXG4gICAge3BhdGg6ICdwb3N0cycsIGNvbXBvbmVudDogUG9zdHNDb21wb25lbnR9LFxuICAgIHtwYXRoOiAncG9zdHMvOmlkJywgY29tcG9uZW50OiBQb3N0c0NvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50e1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
