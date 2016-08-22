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
var core_2 = require('angular2-cookie/core');
var post_list_component_1 = require('./post-list.component');
var post_input_component_1 = require('./post-input.component');
var post_service_1 = require('./post.service');
var PostsComponent = (function () {
    function PostsComponent(_cookieService, _postService) {
        this._cookieService = _cookieService;
        this._postService = _postService;
    }
    PostsComponent.prototype.getAncestorId = function () {
        return this.getCookie('ancestorId');
    };
    PostsComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    PostsComponent.prototype.removeCookie = function (key) {
        var value = this._cookieService.get(key);
        this._cookieService.remove(key);
        return value;
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            template: "\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <post-input>\n                    Loading form...\n                </post-input>\n            </section>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <post-list [postId]=\"getAncestorId()\">\n                    Loading posts...\n                </post-list>\n                <button (click)=\"onUpdate()\" class=\"btn btn-primary\">Update</button>\n            </section>\n        </div>\n    ",
            directives: [post_list_component_1.PostListComponent, post_input_component_1.PostInputComponent],
            providers: [core_2.CookieService]
        }), 
        __metadata('design:paramtypes', [core_2.CookieService, post_service_1.PostService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHFCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELG9DQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3hELHFDQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzFELDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBeUIzQztJQUNJLHdCQUFvQixjQUE0QixFQUFVLFlBQXlCO1FBQS9ELG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRSxDQUFDO0lBQ3RGLHNDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsa0NBQVMsR0FBVCxVQUFVLEdBQVc7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxxQ0FBWSxHQUFaLFVBQWEsR0FBVztRQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFuQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLDhrQkFpQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSx5Q0FBa0IsQ0FBQztZQUNuRCxTQUFTLEVBQUUsQ0FBQyxvQkFBYSxDQUFDO1NBQzdCLENBQUM7O3NCQUFBO0lBY0YscUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHNCQUFjLGlCQWExQixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29va2llU2VydmljZX0gZnJvbSAnYW5ndWxhcjItY29va2llL2NvcmUnO1xuaW1wb3J0IHtQb3N0TGlzdENvbXBvbmVudH0gZnJvbSAnLi9wb3N0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7UG9zdElucHV0Q29tcG9uZW50fSBmcm9tICcuL3Bvc3QtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb3N0cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8cG9zdC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZyBmb3JtLi4uXG4gICAgICAgICAgICAgICAgPC9wb3N0LWlucHV0PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxwb3N0LWxpc3QgW3Bvc3RJZF09XCJnZXRBbmNlc3RvcklkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZyBwb3N0cy4uLlxuICAgICAgICAgICAgICAgIDwvcG9zdC1saXN0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uVXBkYXRlKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtQb3N0TGlzdENvbXBvbmVudCwgUG9zdElucHV0Q29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtDb29raWVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0c0NvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb29raWVTZXJ2aWNlOkNvb2tpZVNlcnZpY2UsIHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSl7fVxuICAgIGdldEFuY2VzdG9ySWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29va2llKCdhbmNlc3RvcklkJyk7XG4gICAgfVxuICAgIGdldENvb2tpZShrZXk6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb29raWVTZXJ2aWNlLmdldChrZXkpO1xuICAgIH1cbiAgICByZW1vdmVDb29raWUoa2V5OiBzdHJpbmcpe1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl9jb29raWVTZXJ2aWNlLmdldChrZXkpO1xuICAgICAgICB0aGlzLl9jb29raWVTZXJ2aWNlLnJlbW92ZShrZXkpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
