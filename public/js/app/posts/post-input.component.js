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
            _this._postService.reloadThreads();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBaUIzQztJQUNJLDRCQUFvQixZQUF3QjtRQUF4QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtJQUFFLENBQUM7SUFJL0MscUNBQVEsR0FBUixVQUFTLElBQVE7UUFBakIsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQzFDLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBM0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxncEJBVVQ7U0FDSixDQUFDOzswQkFBQTtJQWVGLHlCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSwwQkFBa0IscUJBYTlCLENBQUEiLCJmaWxlIjoicG9zdHMvcG9zdC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UG9zdH0gZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSBcIi4vcG9zdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInBvc3QtaW5wdXRcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGZvcm0udmFsdWUpXCIgI2Zvcm09XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29udGVudFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbnRlbnRcIiAjY29udGVudCBwbGFjZWhvbGRlcj1cIkNvbnRlbnQgb2YgcG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwicGFyZW50XCIgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXJlbnRcIiAjcGFyZW50ICBwbGFjZWhvbGRlcj1cIklEIG9mIHBhcmVudCBwb3N0XCIgWyhuZ01vZGVsKV09XCJfcG9zdFNlcnZpY2UucGFyZW50VmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlBvc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQb3N0SW5wdXRDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6UG9zdFNlcnZpY2Upe31cbiAgICBcbiAgICBwb3N0OiBQb3N0O1xuICAgIFxuICAgIG9uU3VibWl0KGZvcm06YW55KXtcbiAgICAgICAgdGhpcy5wb3N0ID0gbmV3IFBvc3QoZm9ybS5jb250ZW50LCBmb3JtLnBhcmVudCB8fCAwLCBbXSwgbnVsbCk7XG4gICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLmFkZFBvc3QodGhpcy5wb3N0KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5yZWxvYWRUaHJlYWRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
