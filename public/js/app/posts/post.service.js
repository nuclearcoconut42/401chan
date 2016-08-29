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
        return this._http.post('http://localhost:3000/api/', body, options)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    PostService.prototype.getPost = function (postId) {
        return this._http.get('http://localhost:3000/api/' + postId)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    PostService.prototype.deletePost = function (postId) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        this.clearThreads();
        return this._http.delete('http://localhost:3000/api/' + postId + token)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json); });
    };
    PostService.prototype.banUser = function (postId) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/api/ban/' + postId + token, "")
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

//# sourceMappingURL=data:application/json;base64,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QUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNyQixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRU8saUNBQVcsR0FBbkIsVUFBb0IsUUFBa0I7UUFDbEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUcsQ0FBQztJQUN2QixDQUFDO0lBdkVMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUF3RWIsa0JBQUM7QUFBRCxDQXZFQSxBQXVFQyxJQUFBO0FBdkVZLG1CQUFXLGNBdUV2QixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9zdH0gZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHtQb3N0SW5wdXRDb21wb25lbnR9IGZyb20gXCIuL3Bvc3QtaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3N0U2VydmljZXtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe31cblxuICAgIHBhcmVudFZhbHVlOiBudW1iZXI7XG5cbiAgICBzZXRQYXJlbnQoaWQ6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5wYXJlbnRWYWx1ZSA9IGlkO1xuICAgIH1cblxuICAgIHRocmVhZElkczogbnVtYmVyW107XG5cbiAgICBpc0xvZ2dlZEluKCl7XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRQb3N0KHBvc3Q6UG9zdCl7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9zdCk7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7aGVhZGVyczogaGVhZGVyc30pO1xuICAgICAgICB0aGlzLmNsZWFyVGhyZWFkcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpLycsIGJvZHksIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG5cbiAgICBnZXRQb3N0KHBvc3RJZCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS8nICsgcG9zdElkKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlUG9zdChwb3N0SWQpe1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbiAgICAgICAgdGhpcy5jbGVhclRocmVhZHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpLycgKyBwb3N0SWQgKyB0b2tlbilcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24pKTtcbiAgICB9XG5cbiAgICBiYW5Vc2VyKHBvc3RJZCl7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jhbi8nICsgcG9zdElkICsgdG9rZW4sIFwiXCIpXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKSk7XG4gICAgfVxuXG4gICAgcmVsb2FkVGhyZWFkcygpe1xuICAgICAgICB0aGlzLmNsZWFyVGhyZWFkcygpO1xuICAgICAgICB0aGlzLmdldFRocmVhZHMoKTtcbiAgICB9XG5cbiAgICBjbGVhclRocmVhZHMoKXtcbiAgICAgICAgdGhpcy50aHJlYWRJZHMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRUaHJlYWRzKCl7XG4gICAgICAgIHRoaXMuZ2V0UG9zdCgwKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVhZElkcyA9IGRhdGEuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICByZXR1cm4gZGF0YSB8fCB7IH07XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
