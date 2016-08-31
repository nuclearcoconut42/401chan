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
var core_2 = require('angular2-cookie/core');
var PostService = (function () {
    function PostService(_http, _cookieService) {
        this._http = _http;
        this._cookieService = _cookieService;
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
        return this._http.post('http://localhost:3000/api/', body, options)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    PostService.prototype.getPost = function (postId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.get('http://localhost:3000/api/' + postId)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    PostService.prototype.deletePost = function (postId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.delete('http://localhost:3000/api/' + postId + token)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json); });
    };
    PostService.prototype.banUser = function (postId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/api/ban/' + postId + token, "")
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error.json); });
    };
    PostService.prototype.extractData = function (response) {
        var data = response.json().obj;
        return data || {};
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_2.CookieService])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;

//# sourceMappingURL=data:application/json;base64,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a0IsRUFBQyxDQUFDLENBQUM7UUFDL0QsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLE1BQU0sR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ3hFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVPLGlDQUFXLEdBQW5CLFVBQW9CLFFBQWtCO1FBQ2xDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFHLENBQUM7SUFDdkIsQ0FBQztJQXBETDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBcURiLGtCQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSxtQkFBVyxjQW9EdkIsQ0FBQSIsImZpbGUiOiJwb3N0cy9wb3N0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Bvc3R9IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB7UG9zdElucHV0Q29tcG9uZW50fSBmcm9tIFwiLi9wb3N0LWlucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3N0U2VydmljZXtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9jb29raWVTZXJ2aWNlOkNvb2tpZVNlcnZpY2Upe31cbiAgICBhbmNlc3RvcklkOiBTdHJpbmc7XG4gICAgcGFyZW50VmFsdWU6IG51bWJlcjtcblxuICAgIHNldFBhcmVudChpZDpudW1iZXIpe1xuICAgICAgICB0aGlzLnBhcmVudFZhbHVlID0gaWQ7XG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkUG9zdChwb3N0OlBvc3Qpe1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvc3QpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnM6IGhlYWRlcnN9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS8nLCBib2R5LCBvcHRpb25zKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gICAgfVxuXG4gICAgZ2V0UG9zdChwb3N0SWQpe1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpLycgKyBwb3N0SWQpXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG5cbiAgICBkZWxldGVQb3N0KHBvc3RJZCl7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpLycgKyBwb3N0SWQgKyB0b2tlbilcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24pKTtcbiAgICB9XG5cbiAgICBiYW5Vc2VyKHBvc3RJZCl7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9iYW4vJyArIHBvc3RJZCArIHRva2VuLCBcIlwiKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbikpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAgICAgcmV0dXJuIGRhdGEgfHwgeyB9O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
