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
var core_1 = require("@angular/core");
var post_1 = require("./post");
var post_component_1 = require("./post.component");
var post_service_1 = require("./post.service");
var PostListComponent = (function () {
    function PostListComponent(_postService) {
        this._postService = _postService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getPost(this.postId).subscribe(function (data) {
            _this.parent = new post_1.Post(data.content, data.parent, data.children, data.timestamp, data._id);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PostListComponent.prototype, "postId", void 0);
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'post-list',
            template: "\n        <div *ngIf=\"parent\" class=\"posts\">\n            <post [post]=\"parent\">Loading post...</post>\n            <post-list *ngFor=\"let postId of parent.children\" [postId]=\"postId\">\n                 Loading replies...\n            </post-list>\n        </div>\n    ",
            directives: [post_component_1.PostComponent, PostListComponent],
            styles: ["\n        .posts{\n            border-left: 1px solid gray;\n            padding: 0px 0px 0px 10px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCxxQkFBbUIsUUFBUSxDQUFDLENBQUE7QUFDNUIsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFxQjNDO0lBR0ksMkJBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUUsQ0FBQztJQUVoRCxvQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUM1QyxVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9GLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQVZEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQXBCWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUseVJBT1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGlCQUFpQixDQUFDO1lBQzlDLE1BQU0sRUFBRSxDQUFDLHNIQUtSLENBQUM7U0FDTCxDQUFDOzt5QkFBQTtJQWNGLHdCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSx5QkFBaUIsb0JBWTdCLENBQUEiLCJmaWxlIjoicG9zdHMvcG9zdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQb3N0fSBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQge1Bvc3RDb21wb25lbnR9IGZyb20gXCIuL3Bvc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1Bvc3RTZXJ2aWNlfSBmcm9tIFwiLi9wb3N0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb3N0LWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nSWY9XCJwYXJlbnRcIiBjbGFzcz1cInBvc3RzXCI+XG4gICAgICAgICAgICA8cG9zdCBbcG9zdF09XCJwYXJlbnRcIj5Mb2FkaW5nIHBvc3QuLi48L3Bvc3Q+XG4gICAgICAgICAgICA8cG9zdC1saXN0ICpuZ0Zvcj1cImxldCBwb3N0SWQgb2YgcGFyZW50LmNoaWxkcmVuXCIgW3Bvc3RJZF09XCJwb3N0SWRcIj5cbiAgICAgICAgICAgICAgICAgTG9hZGluZyByZXBsaWVzLi4uXG4gICAgICAgICAgICA8L3Bvc3QtbGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUG9zdENvbXBvbmVudCwgUG9zdExpc3RDb21wb25lbnRdLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLnBvc3Rze1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgUG9zdExpc3RDb21wb25lbnR7XG4gICAgQElucHV0KCkgcG9zdElkOm51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSl7fVxuICAgIHBhcmVudDogUG9zdDtcbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXRQb3N0KHRoaXMucG9zdElkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IG5ldyBQb3N0KGRhdGEuY29udGVudCwgZGF0YS5wYXJlbnQsIGRhdGEuY2hpbGRyZW4sIGRhdGEudGltZXN0YW1wLCBkYXRhLl9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
