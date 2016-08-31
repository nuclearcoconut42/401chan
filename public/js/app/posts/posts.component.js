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
var post_list_component_1 = require('./post-list.component');
var post_input_component_1 = require('./post-input.component');
var post_service_1 = require('./post.service');
var router_1 = require('@angular/router');
var PostsComponent = (function () {
    function PostsComponent(_activatedRoute, _router, _postService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._postService = _postService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        // (+) converts string 'id' to a number
        this.id = +this._activatedRoute.snapshot.params['id'];
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            template: "\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <post-input>\n                    Loading form...\n                </post-input>\n            </section>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <post-list [postId]=\"\">\n                    Loading posts...\n                </post-list>\n                <button (click)=\"\" class=\"btn btn-primary\">Update</button>\n            </section>\n        </div>\n    ",
            directives: [post_list_component_1.PostListComponent, post_input_component_1.PostInputComponent]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, post_service_1.PostService])
    ], PostsComponent);
    return PostsComponent;
    var _a, _b;
}());
exports.PostsComponent = PostsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELG9DQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3hELHFDQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzFELDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLHVCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBd0IvRDtJQUNJLHdCQUFvQixlQUErQixFQUFVLE9BQWUsRUFBVSxZQUF5QjtRQUEzRixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRSxDQUFDO0lBRWxILGlDQUFRLEdBQVI7UUFDRix1Q0FBdUM7UUFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBNUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxxakJBaUJUO1lBQ0QsVUFBVSxFQUFFLENBQUMsdUNBQWlCLEVBQUUseUNBQWtCLENBQUM7U0FDdEQsQ0FBQzs7c0JBQUE7SUFRRixxQkFBQzs7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHNCQUFjLGlCQU8xQixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQb3N0TGlzdENvbXBvbmVudH0gZnJvbSAnLi9wb3N0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7UG9zdElucHV0Q29tcG9uZW50fSBmcm9tICcuL3Bvc3QtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Bvc3RzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxwb3N0LWlucHV0PlxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGZvcm0uLi5cbiAgICAgICAgICAgICAgICA8L3Bvc3QtaW5wdXQ+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPHBvc3QtbGlzdCBbcG9zdElkXT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIHBvc3RzLi4uXG4gICAgICAgICAgICAgICAgPC9wb3N0LWxpc3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUG9zdExpc3RDb21wb25lbnQsIFBvc3RJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcG9zdFNlcnZpY2U6IFBvc3RTZXJ2aWNlKXt9XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuZ09uSW5pdCgpIHtcbiAgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG4gICAgICB0aGlzLmlkID0gK3RoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
