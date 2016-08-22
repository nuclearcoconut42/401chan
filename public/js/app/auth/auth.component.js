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
var auth_input_component_1 = require("./auth-input.component");
var AuthComponent = (function () {
    function AuthComponent(_authService) {
        this._authService = _authService;
    }
    AuthComponent.prototype.onManage = function () {
        this._authService.toggleManage();
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: "auth",
            template: "\n        <a *ngIf=\"!_authService.manageOpen\" (click)=\"onManage()\">Manage</a>\n        <auth-input *ngIf=\"_authService.manageOpen\"></auth-input>\n    ",
            directives: [auth_input_component_1.AuthInputComponent]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyxxQ0FBaUMsd0JBQXdCLENBQUMsQ0FBQTtBQVUxRDtJQUNJLHVCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFFLENBQUM7SUFFaEQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQWJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSw4SkFHVDtZQUNELFVBQVUsRUFBRSxDQUFDLHlDQUFrQixDQUFDO1NBQ25DLENBQUM7O3FCQUFBO0lBT0Ysb0JBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLHFCQUFhLGdCQU16QixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoSW5wdXRDb21wb25lbnR9IGZyb20gXCIuL2F1dGgtaW5wdXQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImF1dGhcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YSAqbmdJZj1cIiFfYXV0aFNlcnZpY2UubWFuYWdlT3BlblwiIChjbGljayk9XCJvbk1hbmFnZSgpXCI+TWFuYWdlPC9hPlxuICAgICAgICA8YXV0aC1pbnB1dCAqbmdJZj1cIl9hdXRoU2VydmljZS5tYW5hZ2VPcGVuXCI+PC9hdXRoLWlucHV0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0F1dGhJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2Upe31cbiAgICBcbiAgICBvbk1hbmFnZSgpe1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS50b2dnbGVNYW5hZ2UoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
