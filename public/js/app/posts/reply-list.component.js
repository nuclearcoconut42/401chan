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
var ReplyListComponent = (function () {
    function ReplyListComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReplyListComponent.prototype, "post", void 0);
    ReplyListComponent = __decorate([
        core_1.Component({
            selector: 'reply-list',
            template: "\n        <div class=\"replies\">\n            <div class=\"reply\" *ngFor=\"let reply of post.children>\n                <post></post>\n                <reply-list><reply-list>\n            </div>\n            \n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ReplyListComponent);
    return ReplyListComponent;
}());
exports.ReplyListComponent = ReplyListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3JlcGx5LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFlL0M7SUFBQTtJQUlBLENBQUM7SUFIRztRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFkWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsMk9BUVQ7U0FDSixDQUFDOzswQkFBQTtJQU1GLHlCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSwwQkFBa0IscUJBSTlCLENBQUEiLCJmaWxlIjoicG9zdHMvcmVwbHktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmVwbHktbGlzdCdcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVwbGllc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcGx5XCIgKm5nRm9yPVwibGV0IHJlcGx5IG9mIHBvc3QuY2hpbGRyZW4+XG4gICAgICAgICAgICAgICAgPHBvc3Q+PC9wb3N0PlxuICAgICAgICAgICAgICAgIDxyZXBseS1saXN0PjxyZXBseS1saXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFJlcGx5TGlzdENvbXBvbmVudHtcbiAgICBASW5wdXQoKSBwb3N0OlBvc3Q7XG4gICAgXG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
