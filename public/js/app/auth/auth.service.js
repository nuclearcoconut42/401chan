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
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.manageOpen = false;
    }
    AuthService.prototype.toggleManage = function () {
        this.manageOpen = !this.manageOpen;
    };
    AuthService.prototype.verify = function (pass) {
        var body = JSON.stringify({ pass: pass });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        localStorage.clear();
        return this._http.post('http://localhost:3000/signin/', body, options)
            .map(this.extractData)
            .catch(function (error) { return Rx_1.Observable.throw(error); });
    };
    AuthService.prototype.extractData = function (response) {
        var data = response.json().obj;
        return data || {};
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0QsZUFBZSxDQUFDLENBQUE7QUFDdEUsbUJBQXlCLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUd6QztJQUNJLHFCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUUvQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRmMsQ0FBQztJQUlsQyxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUNyRCxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7YUFDakUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTyxpQ0FBVyxHQUFuQixVQUFvQixRQUFrQjtRQUNsQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRyxDQUFDO0lBQ3ZCLENBQUM7SUF2Qkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQXdCYixrQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlksbUJBQVcsY0F1QnZCLENBQUEiLCJmaWxlIjoiYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZXtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXt9XG5cbiAgICBtYW5hZ2VPcGVuID0gZmFsc2U7XG5cbiAgICB0b2dnbGVNYW5hZ2UoKXtcbiAgICAgICAgdGhpcy5tYW5hZ2VPcGVuID0gIXRoaXMubWFuYWdlT3BlbjtcbiAgICB9XG5cbiAgICB2ZXJpZnkocGFzczogc3RyaW5nKXtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7cGFzczogcGFzc30pO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnM6IGhlYWRlcnN9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaWduaW4vJywgYm9keSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICByZXR1cm4gZGF0YSB8fCB7IH07XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
