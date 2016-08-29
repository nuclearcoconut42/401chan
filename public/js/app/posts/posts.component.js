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
        return this._cookieService.get('ancestorId');
    };
    PostsComponent.prototype.removeCookie = function (key) {
        var value = this._cookieService.get(key);
        this._cookieService.remove(key);
        return value;
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            template: "\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <post-input>\n                    Loading form...\n                </post-input>\n            </section>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <post-list [postId]=\"getAncestorId()\">\n                    Loading posts...\n                </post-list>\n                <button (click)=\"getAncestorId()\" class=\"btn btn-primary\">Update</button>\n            </section>\n        </div>\n    ",
            directives: [post_list_component_1.PostListComponent, post_input_component_1.PostInputComponent],
            providers: [core_2.CookieService]
        }), 
        __metadata('design:paramtypes', [core_2.CookieService, post_service_1.PostService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHFCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELG9DQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3hELHFDQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzFELDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBeUIzQztJQUNJLHdCQUFvQixjQUE0QixFQUFVLFlBQXlCO1FBQS9ELG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRSxDQUFDO0lBQ3RGLHNDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELHFDQUFZLEdBQVosVUFBYSxHQUFXO1FBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWhDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsbWxCQWlCVDtZQUNELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixFQUFFLHlDQUFrQixDQUFDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLG9CQUFhLENBQUM7U0FDN0IsQ0FBQzs7c0JBQUE7SUFXRixxQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksc0JBQWMsaUJBVTFCLENBQUEiLCJmaWxlIjoicG9zdHMvcG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5pbXBvcnQge1Bvc3RMaXN0Q29tcG9uZW50fSBmcm9tICcuL3Bvc3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtQb3N0SW5wdXRDb21wb25lbnR9IGZyb20gJy4vcG9zdC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Bvc3RzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxwb3N0LWlucHV0PlxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGZvcm0uLi5cbiAgICAgICAgICAgICAgICA8L3Bvc3QtaW5wdXQ+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPHBvc3QtbGlzdCBbcG9zdElkXT1cImdldEFuY2VzdG9ySWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIHBvc3RzLi4uXG4gICAgICAgICAgICAgICAgPC9wb3N0LWxpc3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ2V0QW5jZXN0b3JJZCgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUG9zdExpc3RDb21wb25lbnQsIFBvc3RJbnB1dENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbQ29va2llU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29va2llU2VydmljZTpDb29raWVTZXJ2aWNlLCBwcml2YXRlIF9wb3N0U2VydmljZTogUG9zdFNlcnZpY2Upe31cbiAgICBnZXRBbmNlc3RvcklkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb29raWVTZXJ2aWNlLmdldCgnYW5jZXN0b3JJZCcpO1xuICAgIH1cbiAgICByZW1vdmVDb29raWUoa2V5OiBzdHJpbmcpe1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl9jb29raWVTZXJ2aWNlLmdldChrZXkpO1xuICAgICAgICB0aGlzLl9jb29raWVTZXJ2aWNlLnJlbW92ZShrZXkpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
