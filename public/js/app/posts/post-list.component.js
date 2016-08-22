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
            console.log(_this.parent);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PostListComponent.prototype, "postId", void 0);
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'post-list',
            template: "\n        <div class=\"posts\">\n            <post [post]=\"parent\">Loading post...</post>\n            <post-list *ngFor=\"let postId of parent.children\" [postId]=\"postId\">\n                Loading replies...\n            </post-list>\n        </div>\n    ",
            directives: [post_component_1.PostComponent, PostListComponent],
            styles: ["\n        .posts{\n            border-left: 1px solid gray;\n            padding: 0px 0px 0px 10px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCxxQkFBbUIsUUFBUSxDQUFDLENBQUE7QUFDNUIsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFxQjNDO0lBR0ksMkJBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUUsQ0FBQztJQUdoRCxvQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUM1QyxVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQVpEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQXBCWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsdVFBT1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGlCQUFpQixDQUFDO1lBQzlDLE1BQU0sRUFBRSxDQUFDLHNIQUtSLENBQUM7U0FDTCxDQUFDOzt5QkFBQTtJQWdCRix3QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFkseUJBQWlCLG9CQWM3QixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UG9zdH0gZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHtQb3N0Q29tcG9uZW50fSBmcm9tIFwiLi9wb3N0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSBcIi4vcG9zdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9zdC1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdHNcIj5cbiAgICAgICAgICAgIDxwb3N0IFtwb3N0XT1cInBhcmVudFwiPkxvYWRpbmcgcG9zdC4uLjwvcG9zdD5cbiAgICAgICAgICAgIDxwb3N0LWxpc3QgKm5nRm9yPVwibGV0IHBvc3RJZCBvZiBwYXJlbnQuY2hpbGRyZW5cIiBbcG9zdElkXT1cInBvc3RJZFwiPlxuICAgICAgICAgICAgICAgIExvYWRpbmcgcmVwbGllcy4uLlxuICAgICAgICAgICAgPC9wb3N0LWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Bvc3RDb21wb25lbnQsIFBvc3RMaXN0Q29tcG9uZW50XSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5wb3N0c3tcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XG4gICAgICAgIH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIFBvc3RMaXN0Q29tcG9uZW50e1xuICAgIEBJbnB1dCgpIHBvc3RJZDpudW1iZXI7XG4gICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSl7fVxuICAgIFxuICAgIHBhcmVudDogUG9zdDtcbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXRQb3N0KHRoaXMucG9zdElkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IG5ldyBQb3N0KGRhdGEuY29udGVudCwgZGF0YS5wYXJlbnQsIGRhdGEuY2hpbGRyZW4sIGRhdGEudGltZXN0YW1wLCBkYXRhLl9pZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
