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
var PostInputComponent = (function () {
    function PostInputComponent(_postService) {
        this._postService = _postService;
    }
    PostInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.post = new post_1.Post(form.content, form.parent || 0, [], null);
        this._postService.addPost(this.post).subscribe(function (data) {
            console.log(_this.post);
            console.log(data);
        });
    };
    PostInputComponent = __decorate([
        core_1.Component({
            selector: "post-input",
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form (ngSubmit)=\"onSubmit(form.value)\" #form=\"ngForm\">\n                <div class=\"form-group\">\n                    <input ngControl=\"content\" type=\"text\" class=\"form-control\" id=\"content\" #content placeholder=\"Content of post\">\n                    <input ngControl=\"parent\" type=\"number\" class=\"form-control\" id=\"parent\" #parent  placeholder=\"ID of parent post\" [(ngModel)]=\"_postService.parentValue\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Post</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostInputComponent);
    return PostInputComponent;
}());
exports.PostInputComponent = PostInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBaUIzQztJQUNJLDRCQUFvQixZQUF3QjtRQUF4QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtJQUFFLENBQUM7SUFJL0MscUNBQVEsR0FBUixVQUFTLElBQVE7UUFBakIsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQzFDLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBNUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxncEJBVVQ7U0FDSixDQUFDOzswQkFBQTtJQWdCRix5QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksMEJBQWtCLHFCQWM5QixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1Bvc3R9IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gXCIuL3Bvc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwb3N0LWlucHV0XCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmb3JtLnZhbHVlKVwiICNmb3JtPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImNvbnRlbnRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2NvbnRlbnQgcGxhY2Vob2xkZXI9XCJDb250ZW50IG9mIHBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInBhcmVudFwiIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicGFyZW50XCIgI3BhcmVudCAgcGxhY2Vob2xkZXI9XCJJRCBvZiBwYXJlbnQgcG9zdFwiIFsobmdNb2RlbCldPVwiX3Bvc3RTZXJ2aWNlLnBhcmVudFZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5Qb3N0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUG9zdElucHV0Q29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlOlBvc3RTZXJ2aWNlKXt9XG5cbiAgICBwb3N0OiBQb3N0O1xuXG4gICAgb25TdWJtaXQoZm9ybTphbnkpe1xuICAgICAgICB0aGlzLnBvc3QgPSBuZXcgUG9zdChmb3JtLmNvbnRlbnQsIGZvcm0ucGFyZW50IHx8IDAsIFtdLCBudWxsKTtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuYWRkUG9zdCh0aGlzLnBvc3QpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
