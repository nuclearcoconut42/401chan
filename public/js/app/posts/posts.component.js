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
var PostsComponent = (function () {
    function PostsComponent(_postService) {
        this._postService = _postService;
    }
    PostsComponent.prototype.onUpdate = function () {
        this._postService.resetAncestorId();
        this.ancestorId = this.getAncestorId();
        this._postService.getAncestorId();
        this.ancestorId = this.getAncestorId();
    };
    PostsComponent.prototype.getAncestorId = function () {
        return this._postService.ancestorId;
    };
    PostsComponent.prototype.ngOnInit = function () {
        this._postService.getAncestorId();
        this.getAncestorId();
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            template: "\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <post-input>\n                    Loading form...\n                </post-input>\n            </section>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <post-list [postId]=\"ancestorId\">\n                    Loading posts...\n                </post-list>\n                <button (click)=\"onUpdate()\" class=\"btn btn-primary\">Update</button>\n            </section>\n        </div>\n    ",
            directives: [post_list_component_1.PostListComponent, post_input_component_1.PostInputComponent]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELG9DQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3hELHFDQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzFELDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBd0IzQztJQUNJLHdCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFFLENBQUM7SUFFaEQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFyQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLHlrQkFpQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSx5Q0FBa0IsQ0FBQztTQUN0RCxDQUFDOztzQkFBQTtJQWlCRixxQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksc0JBQWMsaUJBZ0IxQixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQb3N0TGlzdENvbXBvbmVudH0gZnJvbSAnLi9wb3N0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7UG9zdElucHV0Q29tcG9uZW50fSBmcm9tICcuL3Bvc3QtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb3N0cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8cG9zdC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZyBmb3JtLi4uXG4gICAgICAgICAgICAgICAgPC9wb3N0LWlucHV0PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxwb3N0LWxpc3QgW3Bvc3RJZF09XCJhbmNlc3RvcklkXCI+XG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcgcG9zdHMuLi5cbiAgICAgICAgICAgICAgICA8L3Bvc3QtbGlzdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblVwZGF0ZSgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUG9zdExpc3RDb21wb25lbnQsIFBvc3RJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6IFBvc3RTZXJ2aWNlKXt9XG4gICAgYW5jZXN0b3JJZDogU3RyaW5nO1xuICAgIG9uVXBkYXRlKCl7XG4gICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLnJlc2V0QW5jZXN0b3JJZCgpO1xuICAgICAgICB0aGlzLmFuY2VzdG9ySWQgPSB0aGlzLmdldEFuY2VzdG9ySWQoKTtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0QW5jZXN0b3JJZCgpO1xuICAgICAgICB0aGlzLmFuY2VzdG9ySWQgPSB0aGlzLmdldEFuY2VzdG9ySWQoKTtcbiAgICB9XG4gICAgZ2V0QW5jZXN0b3JJZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdFNlcnZpY2UuYW5jZXN0b3JJZDtcbiAgICB9XG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0QW5jZXN0b3JJZCgpO1xuICAgICAgICB0aGlzLmdldEFuY2VzdG9ySWQoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
