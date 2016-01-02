var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var ReplaySubject_1 = require('rxjs/subject/ReplaySubject');
var HttpUtil = (function () {
    function HttpUtil(http) {
        this.http = http;
        this.requestNotifier = new ReplaySubject_1.ReplaySubject(1);
    }
    HttpUtil.prototype.get = function (url, options) {
        return this._request('get', url, options);
    };
    HttpUtil.prototype.post = function (url, body, options) {
        return this._request('post', url, body, options);
    };
    HttpUtil.prototype.put = function (url, body, options) {
        return this._request('put', url, body, options);
    };
    HttpUtil.prototype.delete = function (url, options) {
        return this._request('delete', url, options);
    };
    HttpUtil.prototype.patch = function (url, body, options) {
        return this._request('patch', url, body, options);
    };
    HttpUtil.prototype.head = function (url, options) {
        return this._request('head', url, options);
    };
    HttpUtil.prototype._request = function (method) {
        var _this = this;
        var httpParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            httpParams[_i - 1] = arguments[_i];
        }
        this._notify({ type: 'start' });
        return this.http[method].apply(this.http, httpParams)
            .do(function (res) { return _this._notify({ type: 'done' }); }, function (err) { return _this._notify({ type: 'error', data: err }); }, function () { return _this._notify({ type: 'complete' }); });
    };
    HttpUtil.prototype._notify = function (notification) {
        this.requestNotifier.next(notification);
    };
    HttpUtil = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpUtil);
    return HttpUtil;
})();
exports.HttpUtil = HttpUtil;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvaHR0cC51dGlsLnRzIl0sIm5hbWVzIjpbIkh0dHBVdGlsIiwiSHR0cFV0aWwuY29uc3RydWN0b3IiLCJIdHRwVXRpbC5nZXQiLCJIdHRwVXRpbC5wb3N0IiwiSHR0cFV0aWwucHV0IiwiSHR0cFV0aWwuZGVsZXRlIiwiSHR0cFV0aWwucGF0Y2giLCJIdHRwVXRpbC5oZWFkIiwiSHR0cFV0aWwuX3JlcXVlc3QiLCJIdHRwVXRpbC5fbm90aWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQscUJBQWlELGVBQWUsQ0FBQyxDQUFBO0FBR2pFLDhCQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBS3pEO0lBS0NBLGtCQUFvQkEsSUFBVUE7UUFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7UUFGN0JBLG9CQUFlQSxHQUFHQSxJQUFJQSw2QkFBYUEsQ0FBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFHdERBLENBQUNBO0lBRURELHNCQUFHQSxHQUFIQSxVQUFJQSxHQUFXQSxFQUFFQSxPQUE0QkE7UUFDNUNFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO0lBQzNDQSxDQUFDQTtJQUVERix1QkFBSUEsR0FBSkEsVUFBS0EsR0FBV0EsRUFBRUEsSUFBWUEsRUFBRUEsT0FBNEJBO1FBQzNERyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFFREgsc0JBQUdBLEdBQUhBLFVBQUlBLEdBQVdBLEVBQUVBLElBQVlBLEVBQUVBLE9BQTRCQTtRQUMxREksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDakRBLENBQUNBO0lBRURKLHlCQUFNQSxHQUFOQSxVQUFPQSxHQUFXQSxFQUFFQSxPQUE0QkE7UUFDL0NLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLEVBQUVBLEdBQUdBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO0lBQzlDQSxDQUFDQTtJQUVBTCx3QkFBS0EsR0FBTEEsVUFBTUEsR0FBV0EsRUFBRUEsSUFBWUEsRUFBRUEsT0FBNEJBO1FBQzdETSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFFRE4sdUJBQUlBLEdBQUpBLFVBQUtBLEdBQVdBLEVBQUVBLE9BQTRCQTtRQUM5Q08sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDM0NBLENBQUNBO0lBRU1QLDJCQUFRQSxHQUFoQkEsVUFBaUJBLE1BQWNBO1FBQS9CUSxpQkFRQ0E7UUFSZ0NBLG9CQUFvQkE7YUFBcEJBLFdBQW9CQSxDQUFwQkEsc0JBQW9CQSxDQUFwQkEsSUFBb0JBO1lBQXBCQSxtQ0FBb0JBOztRQUVsREEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsT0FBT0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFOUJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLFVBQVVBLENBQUNBO2FBQ2xEQSxFQUFFQSxDQUFDQSxVQUFDQSxHQUFRQSxJQUFLQSxPQUFBQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFDQSxDQUFDQSxFQUE1QkEsQ0FBNEJBLEVBQzVDQSxVQUFDQSxHQUFRQSxJQUFLQSxPQUFBQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxDQUFDQSxFQUF4Q0EsQ0FBd0NBLEVBQ3REQSxjQUFNQSxPQUFBQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFDQSxDQUFDQSxFQUFoQ0EsQ0FBZ0NBLENBQUNBLENBQUNBO0lBQy9DQSxDQUFDQTtJQUVRUiwwQkFBT0EsR0FBZkEsVUFBZ0JBLFlBQTBCQTtRQUMxQ1MsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7SUFDeENBLENBQUNBO0lBNUNIVDtRQUFDQSxpQkFBVUEsRUFBRUE7O2lCQThDWkE7SUFBREEsZUFBQ0E7QUFBREEsQ0E5Q0EsQUE4Q0NBLElBQUE7QUE3Q1ksZ0JBQVEsV0E2Q3BCLENBQUEiLCJmaWxlIjoiY29yZS9odHRwLnV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlcXVlc3RPcHRpb25zQXJncywgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1JlcGxheVN1YmplY3R9IGZyb20gJ3J4anMvc3ViamVjdC9SZXBsYXlTdWJqZWN0JztcblxuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gJy4vZHRvJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cFV0aWwge1xuXG4gIHJlcXVlc3ROb3RpZmllciA9IG5ldyBSZXBsYXlTdWJqZWN0PE5vdGlmaWNhdGlvbj4oMSk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG5cdH1cblxuXHRnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlcXVlc3QoJ2dldCcsIHVybCwgb3B0aW9ucyk7XG5cdH1cblxuXHRwb3N0KHVybDogc3RyaW5nLCBib2R5OiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlcXVlc3QoJ3Bvc3QnLCB1cmwsIGJvZHksIG9wdGlvbnMpO1x0XHRcblx0fVxuXG5cdHB1dCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuXHRcdHJldHVybiB0aGlzLl9yZXF1ZXN0KCdwdXQnLCB1cmwsIGJvZHksIG9wdGlvbnMpO1x0XHRcblx0fVxuXG5cdGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblx0XHRyZXR1cm4gdGhpcy5fcmVxdWVzdCgnZGVsZXRlJywgdXJsLCBvcHRpb25zKTtcdFx0XG5cdH1cblxuICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuXHRcdHJldHVybiB0aGlzLl9yZXF1ZXN0KCdwYXRjaCcsIHVybCwgYm9keSwgb3B0aW9ucyk7XHRcdCAgICBcbiAgfVxuXG4gIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlcXVlc3QoJ2hlYWQnLCB1cmwsIG9wdGlvbnMpO1x0XHQgICAgICAgIFxuICB9XG5cblx0cHJpdmF0ZSBfcmVxdWVzdChtZXRob2Q6IHN0cmluZywgLi4uaHR0cFBhcmFtczogYW55W10pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgXG4gICAgdGhpcy5fbm90aWZ5KHt0eXBlOiAnc3RhcnQnfSk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2RdLmFwcGx5KHRoaXMuaHR0cCwgaHR0cFBhcmFtcylcbiAgICAgIC5kbygocmVzOiBhbnkpID0+IHRoaXMuX25vdGlmeSh7dHlwZTogJ2RvbmUnfSksXG4gICAgICAgIChlcnI6IGFueSkgPT4gdGhpcy5fbm90aWZ5KHt0eXBlOiAnZXJyb3InLCBkYXRhOiBlcnJ9KSxcbiAgICAgICAgKCkgPT4gdGhpcy5fbm90aWZ5KHt0eXBlOiAnY29tcGxldGUnfSkpO1xuXHR9XG4gIFxuICBwcml2YXRlIF9ub3RpZnkobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pIHtcblx0XHR0aGlzLnJlcXVlc3ROb3RpZmllci5uZXh0KG5vdGlmaWNhdGlvbik7ICAgIFxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
