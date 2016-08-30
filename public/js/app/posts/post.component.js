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
    };
    PostComponent.prototype.onReply = function () {
        this._postService.setParent(this.post._id);
    };
    PostComponent.prototype.onBan = function () {
        this._postService.banUser(this.post._id).subscribe(function (data) {
            console.log(data);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            template: "\n            <article class=\"panel panel-default\">\n                <header class=\"panel-header\">\n                    <div class=\"info\">\n                        #<a href=\"{{post._id}}\">{{ post._id }}</a> {{ post.timestamp }}\n                    </div>\n                </header>\n                <div class=\"panel-body\">\n                    <div class=\"post\">{{ post.content }}</div>\n                    <br>\n                    <div *ngIf=\"banned\" class=\"ban\"><strong>USER WAS BANNED FOR THIS POST</strong></div>\n                </div>\n                <footer class=\"panel-footer\">\n                    <div class=\"links\">\n                        <a (click)=\"onReply()\">Reply</a>\n                        <a *ngIf=\"_postService.isLoggedIn()\" (click)=\"onDelete()\">Delete</a>\n                        <a *ngIf=\"_postService.isLoggedIn() && !banned\" (click)=\"onBan()\">Ban</a>\n                        <a *ngIf=\"_postService.isLoggedIn() && banned\" (click)=\"onBan()\">Unban</a>\n                    </div>\n                </footer>\n            </article>\n\n    ",
            styles: ["\n        .info{\n            font-size: 12px;\n            width: 80%;\n        }\n        .links{\n            font-size: 12px;\n            width: 20%;\n        }\n        .ban{\n            color: red;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBMEMzQztJQUdJLHVCQUFvQixZQUF3QjtRQUF4QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtJQUFFLENBQUM7SUFFL0MsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUNqRCxVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQzlDLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBdEJEO1FBQUMsWUFBSyxFQUFFOzsrQ0FBQTtJQXpDWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsa2xDQXNCVDtZQUNELE1BQU0sRUFBRSxDQUFDLGdPQVlSLENBQUM7U0FDTCxDQUFDOztxQkFBQTtJQTBCRixvQkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4QlkscUJBQWEsZ0JBd0J6QixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQb3N0fSBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQge1Bvc3RTZXJ2aWNlfSBmcm9tIFwiLi9wb3N0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb3N0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cInBhbmVsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIzxhIGhyZWY9XCJ7e3Bvc3QuX2lkfX1cIj57eyBwb3N0Ll9pZCB9fTwvYT4ge3sgcG9zdC50aW1lc3RhbXAgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3RcIj57eyBwb3N0LmNvbnRlbnQgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYmFubmVkXCIgY2xhc3M9XCJiYW5cIj48c3Ryb25nPlVTRVIgV0FTIEJBTk5FRCBGT1IgVEhJUyBQT1NUPC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvblJlcGx5KClcIj5SZXBseTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiX3Bvc3RTZXJ2aWNlLmlzTG9nZ2VkSW4oKVwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJfcG9zdFNlcnZpY2UuaXNMb2dnZWRJbigpICYmICFiYW5uZWRcIiAoY2xpY2spPVwib25CYW4oKVwiPkJhbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiX3Bvc3RTZXJ2aWNlLmlzTG9nZ2VkSW4oKSAmJiBiYW5uZWRcIiAoY2xpY2spPVwib25CYW4oKVwiPlVuYmFuPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cblxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuaW5mb3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmtze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAuYmFue1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgUG9zdENvbXBvbmVudHtcbiAgICBASW5wdXQoKSBwb3N0OlBvc3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZTpQb3N0U2VydmljZSl7fVxuXG4gICAgb25EZWxldGUoKXtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZGVsZXRlUG9zdCh0aGlzLnBvc3QuX2lkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblJlcGx5KCl7XG4gICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLnNldFBhcmVudCh0aGlzLnBvc3QuX2lkKTtcbiAgICB9XG5cbiAgICBvbkJhbigpe1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5iYW5Vc2VyKHRoaXMucG9zdC5faWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
