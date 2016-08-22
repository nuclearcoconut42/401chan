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
var auth_service_1 = require("./auth.service");
var post_service_1 = require("../posts/post.service");
var AuthInputComponent = (function () {
    function AuthInputComponent(_authService, _postService) {
        this._authService = _authService;
        this._postService = _postService;
    }
    AuthInputComponent.prototype.onLogout = function () {
        localStorage.clear();
    };
    AuthInputComponent.prototype.onSubmit = function (form) {
        this._authService.verify(form.password)
            .subscribe(function (data) {
            localStorage.setItem('token', data);
        }, function (error) { return console.error(error); });
        this.onCancel();
    };
    AuthInputComponent.prototype.onCancel = function () {
        this._authService.toggleManage();
    };
    AuthInputComponent = __decorate([
        core_1.Component({
            selector: "auth-input",
            template: "\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <form *ngIf=\"!_postService.isLoggedIn()\" (ngSubmit)=\"onSubmit(form.value)\" #form=\"ngForm\">\n                    <div class=\"form-group\">\n                        <input ngControl=\"password\" type=\"password\" class=\"form-control\" id=\"password\" #password placeholder=\"Password\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-success\">Login</button>\n                </form>\n                <button *ngIf=\"_postService.isLoggedIn()\" (click)=\"onLogout()\" class=\"btn btn-danger\">Logout</button>\n                <button (click)=\"onCancel()\" class=\"btn btn-danger\">Cancel</button>\n            </section>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, post_service_1.PostService])
    ], AuthInputComponent);
    return AuthInputComponent;
}());
exports.AuthInputComponent = AuthInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyw2QkFBMEIsdUJBQXVCLENBQUMsQ0FBQTtBQW1CbEQ7SUFDSSw0QkFBb0IsWUFBd0IsRUFBVSxZQUF3QjtRQUExRCxpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO0lBQUUsQ0FBQztJQUVqRixxQ0FBUSxHQUFSO1FBQ0ksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsSUFBUTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEMsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFyQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLDh4QkFhVDtTQUNKLENBQUM7OzBCQUFBO0lBc0JGLHlCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSwwQkFBa0IscUJBcUI5QixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSBcIi4uL3Bvc3RzL3Bvc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhdXRoLWlucHV0XCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSAqbmdJZj1cIiFfcG9zdFNlcnZpY2UuaXNMb2dnZWRJbigpXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGZvcm0udmFsdWUpXCIgI2Zvcm09XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXNzd29yZFwiICNwYXNzd29yZCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfcG9zdFNlcnZpY2UuaXNMb2dnZWRJbigpXCIgKGNsaWNrKT1cIm9uTG9nb3V0KClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DYW5jZWwoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoSW5wdXRDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsIHByaXZhdGUgX3Bvc3RTZXJ2aWNlOlBvc3RTZXJ2aWNlKXt9XG4gICAgXG4gICAgb25Mb2dvdXQoKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuICAgIFxuICAgIG9uU3VibWl0KGZvcm06YW55KXtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UudmVyaWZ5KGZvcm0ucGFzc3dvcmQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLm9uQ2FuY2VsKCk7XG4gICAgfVxuICAgIFxuICAgIG9uQ2FuY2VsKCl7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnRvZ2dsZU1hbmFnZSgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
