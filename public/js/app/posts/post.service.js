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
var http_1 = require("@angular/http");
var Rx_1 = require('rxjs/Rx');
var core_1 = require("@angular/core");
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
    }
    PostService.prototype.setParent = function (id) {
        this.parentValue = id;
    };
    PostService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    };
    PostService.prototype.addPost = function (post) {
        var body = JSON.stringify(post);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.clearThreads();
        return this._http.post('https://chan401-nuclearcoconut.c9users.io/posts/', body, options)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    PostService.prototype.getPost = function (postId) {
        return this._http.get('https://chan401-nuclearcoconut.c9users.io/posts/' + postId)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    PostService.prototype.deletePost = function (postId) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        this.clearThreads();
        return this._http.delete('https://chan401-nuclearcoconut.c9users.io/posts/' + postId + token)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json); });
    };
    PostService.prototype.banUser = function (postId) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('https://chan401-nuclearcoconut.c9users.io/ban/' + postId + token, "")
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json); });
    };
    PostService.prototype.reloadThreads = function () {
        this.clearThreads();
        this.getThreads();
    };
    PostService.prototype.clearThreads = function () {
        this.threadIds = [];
    };
    PostService.prototype.getThreads = function () {
        var _this = this;
        this.getPost(0).subscribe(function (data) {
            _this.threadIds = data.children;
        });
    };
    PostService.prototype.extractData = function (response) {
        var data = response.json().obj;
        return data || {};
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;

//# sourceMappingURL=data:application/json;base64,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QUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNyQixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRU8saUNBQVcsR0FBbkIsVUFBb0IsUUFBa0I7UUFDbEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUcsQ0FBQztJQUN2QixDQUFDO0lBdkVMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUF3RWIsa0JBQUM7QUFBRCxDQXZFQSxBQXVFQyxJQUFBO0FBdkVZLG1CQUFXLGNBdUV2QixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9zdH0gZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHtQb3N0SW5wdXRDb21wb25lbnR9IGZyb20gXCIuL3Bvc3QtaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3N0U2VydmljZXtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXt9XG4gICAgXG4gICAgcGFyZW50VmFsdWU6IG51bWJlcjtcbiAgICBcbiAgICBzZXRQYXJlbnQoaWQ6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5wYXJlbnRWYWx1ZSA9IGlkO1xuICAgIH1cbiAgICBcbiAgICB0aHJlYWRJZHM6IG51bWJlcltdO1xuICAgIFxuICAgIGlzTG9nZ2VkSW4oKXtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFkZFBvc3QocG9zdDpQb3N0KXtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwb3N0KTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBoZWFkZXJzfSk7XG4gICAgICAgIHRoaXMuY2xlYXJUaHJlYWRzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHBzOi8vY2hhbjQwMS1udWNsZWFyY29jb251dC5jOXVzZXJzLmlvL3Bvc3RzLycsIGJvZHksIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0UG9zdChwb3N0SWQpe1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHBzOi8vY2hhbjQwMS1udWNsZWFyY29jb251dC5jOXVzZXJzLmlvL3Bvc3RzLycgKyBwb3N0SWQpXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlUG9zdChwb3N0SWQpe1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbiAgICAgICAgdGhpcy5jbGVhclRocmVhZHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKCdodHRwczovL2NoYW40MDEtbnVjbGVhcmNvY29udXQuYzl1c2Vycy5pby9wb3N0cy8nICsgcG9zdElkICsgdG9rZW4pXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKSk7XG4gICAgfVxuICAgIFxuICAgIGJhblVzZXIocG9zdElkKXtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHBzOi8vY2hhbjQwMS1udWNsZWFyY29jb251dC5jOXVzZXJzLmlvL2Jhbi8nICsgcG9zdElkICsgdG9rZW4sIFwiXCIpXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKSk7XG4gICAgfVxuICAgIFxuICAgIHJlbG9hZFRocmVhZHMoKXtcbiAgICAgICAgdGhpcy5jbGVhclRocmVhZHMoKTtcbiAgICAgICAgdGhpcy5nZXRUaHJlYWRzKCk7XG4gICAgfVxuICAgIFxuICAgIGNsZWFyVGhyZWFkcygpe1xuICAgICAgICB0aGlzLnRocmVhZElkcyA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBnZXRUaHJlYWRzKCl7XG4gICAgICAgIHRoaXMuZ2V0UG9zdCgwKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVhZElkcyA9IGRhdGEuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAgICAgcmV0dXJuIGRhdGEgfHwgeyB9O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
