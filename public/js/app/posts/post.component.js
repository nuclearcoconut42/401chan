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
var post_service_1 = require("./post.service");
var PostComponent = (function () {
    function PostComponent(_postService) {
        this._postService = _postService;
    }
    PostComponent.prototype.onDelete = function () {
        this._postService.deletePost(this.post._id).subscribe(function (data) {
            console.log(data);
        });
        this._postService.getThreads();
    };
    PostComponent.prototype.onReply = function () {
        this._postService.setParent(this.post._id);
    };
    PostComponent.prototype.onBan = function () {
        this._postService.banUser(this.post._id).subscribe(function (data) {
            console.log(data);
        });
        this._postService.getThreads();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            template: "\n            <article class=\"panel panel-default\">\n                <header class=\"panel-header\">\n                    <div class=\"info\">\n                        #{{ post._id }} {{ post.timestamp }}\n                    </div>\n                </header>\n                <div class=\"panel-body\">\n                    <div class=\"post\">{{ post.content }}</div>\n                    <br>\n                    <div *ngIf=\"banned\" class=\"ban\"><strong>USER WAS BANNED FOR THIS POST</strong></div>\n                </div>\n                <footer class=\"panel-footer\">\n                    <div class=\"links\">\n                        <a (click)=\"onReply()\">Reply</a>\n                        <a *ngIf=\"_postService.isLoggedIn()\" (click)=\"onDelete()\">Delete</a>\n                        <a *ngIf=\"_postService.isLoggedIn() && !banned\" (click)=\"onBan()\">Ban</a>\n                        <a *ngIf=\"_postService.isLoggedIn() && banned\" (click)=\"onBan()\">Unban</a>\n                    </div>\n                </footer>\n            </article>\n        \n    ",
            styles: ["\n        .info{\n            font-size: 12px;\n            width: 80%;\n        }\n        .links{\n            font-size: 12px;\n            width: 20%;\n        }\n        .ban{\n            color: red;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBMEMzQztJQUdJLHVCQUFvQixZQUF3QjtRQUF4QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtJQUFFLENBQUM7SUFFL0MsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUNqRCxVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FDOUMsVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQXhCRDtRQUFDLFlBQUssRUFBRTs7K0NBQUE7SUF6Q1o7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLDZqQ0FzQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxnT0FZUixDQUFDO1NBQ0wsQ0FBQzs7cUJBQUE7SUE0QkYsb0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLHFCQUFhLGdCQTBCekIsQ0FBQSIsImZpbGUiOiJwb3N0cy9wb3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UG9zdH0gZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSBcIi4vcG9zdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9zdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJwYW5lbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICN7eyBwb3N0Ll9pZCB9fSB7eyBwb3N0LnRpbWVzdGFtcCB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdFwiPnt7IHBvc3QuY29udGVudCB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJiYW5uZWRcIiBjbGFzcz1cImJhblwiPjxzdHJvbmc+VVNFUiBXQVMgQkFOTkVEIEZPUiBUSElTIFBPU1Q8L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm9uUmVwbHkoKVwiPlJlcGx5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJfcG9zdFNlcnZpY2UuaXNMb2dnZWRJbigpXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIl9wb3N0U2VydmljZS5pc0xvZ2dlZEluKCkgJiYgIWJhbm5lZFwiIChjbGljayk9XCJvbkJhbigpXCI+QmFuPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJfcG9zdFNlcnZpY2UuaXNMb2dnZWRJbigpICYmIGJhbm5lZFwiIChjbGljayk9XCJvbkJhbigpXCI+VW5iYW48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICBcbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmluZm97XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rc3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbntcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIFBvc3RDb21wb25lbnR7XG4gICAgQElucHV0KCkgcG9zdDpQb3N0O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlOlBvc3RTZXJ2aWNlKXt9XG4gICAgXG4gICAgb25EZWxldGUoKXtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZGVsZXRlUG9zdCh0aGlzLnBvc3QuX2lkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0VGhyZWFkcygpO1xuICAgIH1cbiAgICBcbiAgICBvblJlcGx5KCl7XG4gICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLnNldFBhcmVudCh0aGlzLnBvc3QuX2lkKTtcbiAgICB9XG4gICAgXG4gICAgb25CYW4oKXtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuYmFuVXNlcih0aGlzLnBvc3QuX2lkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0VGhyZWFkcygpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
